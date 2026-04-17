// js/script.js

document.addEventListener('DOMContentLoaded', () => {
    
    // --- Sticky Navbar ---
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Initial check in case user loaded page halfway down
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    }

    // --- Mobile Menu Toggle (Basic functionality) ---
    // Note: Since this is a simple landing page, the mobile menu logic could involve showing a dropdown.
    // For now, we will just add a click listener.
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinksContainer = document.querySelector('.nav-links');
    
    // We can add simple inline style toggling for demonstration
    let isMenuOpen = false;
    
    mobileMenuBtn.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;
        
        if (isMenuOpen) {
            navLinksContainer.style.display = 'flex';
            navLinksContainer.style.flexDirection = 'column';
            navLinksContainer.style.position = 'absolute';
            navLinksContainer.style.top = '100%';
            navLinksContainer.style.left = '0';
            navLinksContainer.style.width = '100%';
            navLinksContainer.style.backgroundColor = 'var(--white)';
            navLinksContainer.style.padding = '20px';
            navLinksContainer.style.boxShadow = 'var(--shadow-md)';
            
            // Set text color for links
            const links = navLinksContainer.querySelectorAll('a');
            links.forEach(link => {
                link.style.color = 'var(--text-dark)';
                link.style.marginBottom = '15px';
            });
            
        } else {
            // Reset to default css styles
            navLinksContainer.style = '';
        }
    });

    // --- Smooth Scrolling for Anchor Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            
            // If the href is strictly "#", ignore it
            if (this.getAttribute('href') === '#') return;

            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                // If mobile menu is open, close it
                if (isMenuOpen && window.innerWidth <= 768) {
                    mobileMenuBtn.click();
                }

                // Scroll to target with offset for navbar
                const navbarHeight = navbar.offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

});
