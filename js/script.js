document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const mobileNav = document.createElement('div');
    mobileNav.classList.add('mobile-nav-overlay');
    mobileNav.innerHTML = `
        <div class="mobile-nav">
            <button class="close-btn" aria-label="Close navigation menu"><i class="fas fa-times"></i></button>
            <ul>
                <li><a href="#hero">Home</a></li>
                <li><a href="#books-showcase">Books</a></li>
                <li><a href="#features">Tea Pairing</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#community">Community</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#books-showcase" class="btn btn-primary cta-button mobile-cta">Start Reading Now</a></li>
            </ul>
        </div>
    `;
    document.body.appendChild(mobileNav);

    const mobileNavPanel = mobileNav.querySelector('.mobile-nav');
    const closeBtn = mobileNav.querySelector('.close-btn');

    hamburgerMenu.addEventListener('click', () => {
        mobileNav.classList.add('active');
        mobileNavPanel.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    closeBtn.addEventListener('click', () => {
        mobileNav.classList.remove('active');
        mobileNavPanel.classList.remove('active');
        document.body.style.overflow = '';
    });

    mobileNav.addEventListener('click', (e) => {
        if (e.target === mobileNav) {
            mobileNav.classList.remove('active');
            mobileNavPanel.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    mobileNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('active');
            mobileNavPanel.classList.remove('active');
            document.body.style.overflow = '';
        });
    });


    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Sticky Header
    const header = document.getElementById('site-header');

    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > header.offsetHeight) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });

    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const isActive = question.classList.contains('active');

            faqQuestions.forEach(q => {
                if (q !== question && q.classList.contains('active')) {
                    q.classList.remove('active');
                    q.nextElementSibling.style.maxHeight = '0';
                }
            });

            if (!isActive) {
                question.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            } else {
                question.classList.remove('active');
                answer.style.maxHeight = '0';
            }
        });
    });
});