// Main JavaScript for Energy Audit Pro

// Form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        // Simple validation
        if (!data.name || !data.email || !data.phone) {
            alert('Please fill in all required fields.');
            return;
        }
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            alert('Please enter a valid email address.');
            return;
        }
        // Simulate form submission
        console.log('Form submitted:', data);
        alert('Thank you for your inquiry! We will contact you within 24 hours.');
        this.reset();
    });
}

// Smooth scrolling for anchor links
const anchorLinks = document.querySelectorAll('a[href^="#"]');
anchorLinks.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href.length > 1) {
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Animation observer (for future use, e.g. fade-in effects)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Example: observe elements with .animate-fade-in, .animate-slide-in, .animate-scale-in
const animatedEls = document.querySelectorAll('.animate-fade-in, .animate-slide-in, .animate-scale-in');
animatedEls.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
}); 