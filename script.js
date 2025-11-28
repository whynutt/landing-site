document.addEventListener('DOMContentLoaded', () => {
    // Hamburger Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('header nav');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
    });

    // Close mobile nav on link click
    document.querySelectorAll('header nav ul li a, header nav .cta-button').forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('active')) {
                hamburger.classList.remove('active');
                nav.classList.remove('active');
            }
        });
    });

    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.closest('.faq-item');
            const answer = faqItem.querySelector('.faq-answer');

            // Toggle 'open' class for styling and 'active' for icon/question style
            question.classList.toggle('active');
            answer.classList.toggle('open');

            // Set max-height for smooth transition
            if (answer.classList.contains('open')) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
                answer.style.paddingTop = '20px';
                answer.style.paddingBottom = '20px';
            } else {
                answer.style.maxHeight = '0';
                answer.style.paddingTop = '0';
                answer.style.paddingBottom = '0';
            }

            // Optional: Close other open FAQs
            faqQuestions.forEach(otherQuestion => {
                if (otherQuestion !== question) {
                    const otherFaqItem = otherQuestion.closest('.faq-item');
                    const otherAnswer = otherFaqItem.querySelector('.faq-answer');
                    if (otherAnswer.classList.contains('open')) {
                        otherQuestion.classList.remove('active');
                        otherAnswer.classList.remove('open');
                        otherAnswer.style.maxHeight = '0';
                        otherAnswer.style.paddingTop = '0';
                        otherAnswer.style.paddingBottom = '0';
                    }
                }
            });
        });
    });
});