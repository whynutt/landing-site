document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const closeMobileMenu = document.querySelector('.close-mobile-menu');

    mobileMenuToggle.addEventListener('click', () => {
        mobileMenuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    });

    closeMobileMenu.addEventListener('click', () => {
        mobileMenuOverlay.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    });

    // Close mobile menu when a link is clicked
    mobileMenuOverlay.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Sticky Header
    const header = document.getElementById('main-header');
    const stickyScrollPoint = 50; // Pixels from top to activate sticky header

    window.addEventListener('scroll', () => {
        if (window.scrollY > stickyScrollPoint) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });

    // Smooth Scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Calculate offset for sticky header
                const headerOffset = header.offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Basic Form Submission (Contact & Newsletter)
    const contactForm = document.querySelector('#contact .contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Contact form submitted!');
            const formData = new FormData(this);
            for (let [name, value] of formData.entries()) {
                console.log(`${name}: ${value}`);
            }
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }

    const newsletterForm = document.querySelector('#main-footer .newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Newsletter subscription submitted!');
            const emailInput = this.querySelector('input[type="email"]');
            console.log(`Email: ${emailInput.value}`);
            alert('Thank you for subscribing to our newsletter!');
            this.reset();
        });
    }
});
