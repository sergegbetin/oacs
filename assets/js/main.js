// OACS Website - Main JavaScript with Tailwind CSS Integration
// Optimized for performance and modern animations

class OACSSite {
    constructor() {
        this.init();
    }

    init() {
        this.setupMobileMenu();
        this.setupScrollEffects();
        this.setupStatsCarousel();
        this.setupAnimations();
        this.setupSmoothScroll();
        this.setupFormHandling();
    }

    // Mobile Menu Toggle
    setupMobileMenu() {
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        
        if (mobileMenuBtn && mobileMenu) {
            mobileMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            });

            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
                    mobileMenu.classList.add('hidden');
                    const icon = mobileMenuBtn.querySelector('i');
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-times');
                }
            });
        }
    }

    // Header Scroll Effects
    setupScrollEffects() {
        const header = document.getElementById('header');
        let lastScrollY = window.scrollY;
        let ticking = false;

        const updateHeader = () => {
            const currentScrollY = window.scrollY;
            
            if (currentScrollY > 100) {
                header.classList.add('shadow-2xl');
                header.classList.add('backdrop-blur-md');
                header.classList.add('bg-white/95');
            } else {
                header.classList.remove('shadow-2xl');
                header.classList.remove('backdrop-blur-md');
                header.classList.remove('bg-white/95');
            }

            // Hide/show header on scroll
            if (currentScrollY > lastScrollY && currentScrollY > 200) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
            }

            lastScrollY = currentScrollY;
            ticking = false;
        };

        const requestTick = () => {
            if (!ticking) {
                requestAnimationFrame(updateHeader);
                ticking = true;
            }
        };

        window.addEventListener('scroll', requestTick, { passive: true });
    }

    // Stats Carousel
    setupStatsCarousel() {
        const statCards = document.querySelectorAll('.stat-card');
        const statDots = document.querySelectorAll('.stat-dot');
        let currentIndex = 0;
        let intervalId;

        if (statCards.length === 0) return;

        const showStat = (index) => {
            // Hide all cards
            statCards.forEach((card, i) => {
                card.classList.remove('active');
                if (i === index) {
                    card.classList.add('active');
                }
            });

            // Update dots
            statDots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
        };

        const nextStat = () => {
            currentIndex = (currentIndex + 1) % statCards.length;
            showStat(currentIndex);
        };

        const startCarousel = () => {
            intervalId = setInterval(nextStat, 3000);
        };

        const stopCarousel = () => {
            clearInterval(intervalId);
        };

        // Initialize
        showStat(0);
        startCarousel();

        // Pause on hover
        const carouselContainer = document.querySelector('.stat-carousel');
        if (carouselContainer) {
            carouselContainer.addEventListener('mouseenter', stopCarousel);
            carouselContainer.addEventListener('mouseleave', startCarousel);
        }

        // Dot navigation
        statDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentIndex = index;
                showStat(currentIndex);
                stopCarousel();
                startCarousel();
            });
        });
    }

    // Intersection Observer for Animations
    setupAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    
                    // Add animation classes based on element type
                    if (element.classList.contains('card-hover')) {
                        element.classList.add('animate-fade-in-up');
                    } else if (element.classList.contains('animate-fade-in-left')) {
                        element.classList.add('animate-fade-in-left');
                    } else if (element.classList.contains('animate-fade-in-right')) {
                        element.classList.add('animate-fade-in-right');
                    } else if (element.classList.contains('animate-scale-in')) {
                        element.classList.add('animate-scale-in');
                    } else {
                        element.classList.add('animate-fade-in-up');
                    }

                    // Stagger animation for multiple elements
                    const siblings = Array.from(element.parentElement.children);
                    const index = siblings.indexOf(element);
                    element.style.animationDelay = `${index * 0.1}s`;
                }
            });
        }, observerOptions);

        // Observe all animatable elements
        const animatableElements = document.querySelectorAll('.card-hover, .animate-fade-in-left, .animate-fade-in-right, .animate-scale-in');
        animatableElements.forEach(el => observer.observe(el));
    }

    // Smooth Scroll for Anchor Links
    setupSmoothScroll() {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const headerHeight = document.getElementById('header').offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Form Handling
    setupFormHandling() {
        const forms = document.querySelectorAll('form');
        
        forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                
                // Get form data
                const formData = new FormData(form);
                const data = Object.fromEntries(formData);
                
                // Basic validation
                const requiredFields = form.querySelectorAll('[required]');
                let isValid = true;
                
                requiredFields.forEach(field => {
                    if (!field.value.trim()) {
                        field.classList.add('border-red-500');
                        isValid = false;
                    } else {
                        field.classList.remove('border-red-500');
                    }
                });
                
                if (isValid) {
                    // Store in localStorage (simulation)
                    const submissions = JSON.parse(localStorage.getItem('oacs_submissions') || '[]');
                    submissions.push({
                        ...data,
                        timestamp: new Date().toISOString()
                    });
                    localStorage.setItem('oacs_submissions', JSON.stringify(submissions));
                    
                    // Show success message
                    this.showNotification('Message envoyé avec succès !', 'success');
                    form.reset();
                } else {
                    this.showNotification('Veuillez remplir tous les champs obligatoires.', 'error');
                }
            });
        });
    }

    // Notification System
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg transition-all duration-300 transform translate-x-full ${
            type === 'success' ? 'bg-green-500 text-white' : 
            type === 'error' ? 'bg-red-500 text-white' : 
            'bg-blue-500 text-white'
        }`;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.classList.remove('translate-x-full');
        }, 100);
        
        // Auto remove
        setTimeout(() => {
            notification.classList.add('translate-x-full');
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }

    // Utility: Debounce function
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Utility: Throttle function
    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new OACSSite();
});

// Handle page visibility change (pause animations when tab is not visible)
document.addEventListener('visibilitychange', () => {
    const statCards = document.querySelectorAll('.stat-card');
    if (document.hidden) {
        // Pause animations
        statCards.forEach(card => {
            card.style.animationPlayState = 'paused';
        });
    } else {
        // Resume animations
        statCards.forEach(card => {
            card.style.animationPlayState = 'running';
        });
    }
});

// Performance optimization: Preload critical resources
const preloadCriticalResources = () => {
    const criticalImages = [
        'file:///home/beto/Documents/Outre Atlantique/Logo OACS.png'
    ];
    
    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
};

// Run preload on page load
window.addEventListener('load', preloadCriticalResources);

// Service Worker registration (if available)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Note: Service worker would need to be created for offline functionality
        console.log('Service Worker support detected');
    });
}