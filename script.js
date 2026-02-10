document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            if (mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.remove('hidden');
            } else {
                mobileMenu.classList.add('hidden');
            }
        });
    }

    // Scroll Effects: Navbar and Reveals
    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('section, header, div');

    // Reveal elements on scroll
    const revealElements = document.querySelectorAll('.group'); // Add reveal logic to cards/groups if needed
    
    // Add 'reveal' class to sections for scroll animation
    sections.forEach(section => {
        // Simple heuristic: if it's a major section, add reveal. 
        // Or we can manually add 'reveal' class in HTML. Let's do it manually for better control.
    });

    // Check for elements with 'reveal' class
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));


    // Navbar background on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled', 'bg-vera-dark', 'shadow-md');
            navbar.classList.remove('bg-transparent');
        } else {
            navbar.classList.remove('scrolled', 'bg-vera-dark', 'shadow-md');
            navbar.classList.add('bg-transparent');
        }
    });
    
    // Initial check
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled', 'bg-vera-dark');
    }
});
