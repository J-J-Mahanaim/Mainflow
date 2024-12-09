document.addEventListener('DOMContentLoaded', () => {
    // Menu toggle for mobile view
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');

    menuToggle.addEventListener('click', () => {
        navList.classList.toggle('active');
    });

    // Back to top button functionality
    const backToTopBtn = document.querySelector('.back-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Form validation
    const contactForm = document.getElementById('contact-form');
    const feedback = document.querySelector('.form-feedback');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const name = contactForm.name.value.trim();
        const email = contactForm.email.value.trim();
        const message = contactForm.message.value.trim();

        if (!name || !email || !message) {
            feedback.textContent = 'All fields are required!';
            feedback.style.color = 'red';
            return;
        }

        if (!validateEmail(email)) {
            feedback.textContent = 'Please enter a valid email address!';
            feedback.style.color = 'red';
            return;
        }

        feedback.textContent = 'Thank you for your message!';
        feedback.style.color = 'green';
        contactForm.reset();
    });

    // Email validation helper
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});
