// Aquon Inc. Website - Enhanced JavaScript
// ==========================================

// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 100,
        delay: 0,
    });
});

// ==========================================
// Mobile Menu Toggle
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileMenuToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            }
        });
        
        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            });
        });
    }
});

// ==========================================
// Smooth Scroll for Anchor Links
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '#demo' && href !== '#investor' && href !== '#contact-form') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});

// ==========================================
// Navbar Scroll Effect
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Add shadow on scroll
        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';
        }
        
        lastScroll = currentScroll;
    });
});

// ==========================================
// Animated Counter for Metrics
// ==========================================
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16); // 60fps
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        
        // Format number based on target
        if (target < 10) {
            element.textContent = current.toFixed(2);
        } else if (target < 100) {
            element.textContent = Math.floor(current);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Observe metric cards and trigger counter animation
document.addEventListener('DOMContentLoaded', function() {
    const metricObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const metricValue = entry.target;
                const targetValue = parseFloat(metricValue.getAttribute('data-count'));
                if (targetValue && !metricValue.classList.contains('counted')) {
                    metricValue.classList.add('counted');
                    animateCounter(metricValue, targetValue);
                }
                metricObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    document.querySelectorAll('[data-count]').forEach(el => {
        metricObserver.observe(el);
    });
});

// ==========================================
// Interactive Compiler Diagram
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    const compilerLayers = document.querySelectorAll('.compiler-layer');
    
    compilerLayers.forEach(layer => {
        layer.addEventListener('click', function() {
            const layerName = this.getAttribute('data-layer');
            // Could expand to show more details about each layer
            console.log(`Clicked on ${layerName} layer`);
        });
    });
});

// ==========================================
// Architecture Layer Expand/Collapse
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    const archLayers = document.querySelectorAll('.arch-detail-layer');
    
    archLayers.forEach(layer => {
        const header = layer.querySelector('.arch-detail-header');
        if (header) {
            header.addEventListener('click', function() {
                // Close all other layers
                archLayers.forEach(otherLayer => {
                    if (otherLayer !== layer) {
                        otherLayer.classList.remove('expanded');
                    }
                });
                
                // Toggle current layer
                layer.classList.toggle('expanded');
            });
        }
    });
});

// ==========================================
// Module Tabs (Product Page)
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    const moduleTabs = document.querySelectorAll('.module-tab');
    const moduleContents = document.querySelectorAll('.module-content');
    
    moduleTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetModule = this.getAttribute('data-module');
            
            // Remove active class from all tabs and contents
            moduleTabs.forEach(t => t.classList.remove('active'));
            moduleContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            this.classList.add('active');
            const targetContent = document.getElementById(targetModule);
            if (targetContent) {
                targetContent.classList.add('active');
                
                // Scroll to content smoothly
                setTimeout(() => {
                    targetContent.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }, 100);
            }
        });
    });
});

// ==========================================
// Interactive Architecture Cards (Homepage)
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    const archCards = document.querySelectorAll('.arch-layer');
    
    archCards.forEach(card => {
        card.addEventListener('click', function() {
            // Add a pulse animation
            this.style.animation = 'none';
            setTimeout(() => {
                this.style.animation = 'pulse 0.5s ease-out';
            }, 10);
        });
    });
});

// Add pulse animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(style);

// ==========================================
// Form Handling (Placeholder)
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            // Simulate form submission
            setTimeout(() => {
                submitBtn.innerHTML = '<i class="fas fa-check"></i> Sent!';
                submitBtn.style.background = '#10B981';
                
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.background = '';
                    form.reset();
                    
                    alert('Form submission functionality will be implemented by your engineering team. This is a placeholder.');
                }, 2000);
            }, 1500);
        });
    });
});

// ==========================================
// Parallax Effect for Hero Background
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    const heroBackground = document.querySelector('.hero-background');
    
    if (heroBackground) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxSpeed = 0.5;
            heroBackground.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        });
    }
});

// ==========================================
// Interactive Vision Circle (Homepage)
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    const visionNodes = document.querySelectorAll('.vision-node');
    
    visionNodes.forEach((node, index) => {
        node.addEventListener('mouseenter', function() {
            // Pause rotation on hover
            const orbit = this.closest('.vision-orbit');
            if (orbit) {
                orbit.style.animationPlayState = 'paused';
            }
            
            // Scale up the node
            this.style.transform = `rotate(var(--angle)) translateY(-160px) rotate(calc(-1 * var(--angle))) scale(1.2)`;
        });
        
        node.addEventListener('mouseleave', function() {
            // Resume rotation
            const orbit = this.closest('.vision-orbit');
            if (orbit) {
                orbit.style.animationPlayState = 'running';
            }
            
            // Reset scale
            this.style.transform = `rotate(var(--angle)) translateY(-160px) rotate(calc(-1 * var(--angle))) scale(1)`;
        });
    });
});

// ==========================================
// Hover Effects for Cards
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.problem-card, .value-card, .module-card, .feature-card, .benefit-card, .customer-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        });
    });
});

// ==========================================
// Code Window Syntax Highlighting Enhancement
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    const codeWindows = document.querySelectorAll('.code-window, .code-window-large');
    
    codeWindows.forEach(window => {
        // Add copy button
        const header = window.querySelector('.code-window-header');
        if (header && !header.querySelector('.code-copy-btn')) {
            const copyBtn = document.createElement('button');
            copyBtn.className = 'code-copy-btn';
            copyBtn.innerHTML = '<i class="fas fa-copy"></i>';
            copyBtn.style.cssText = 'margin-left: auto; background: none; border: none; color: #9CA3AF; cursor: pointer; padding: 4px 8px; border-radius: 4px; transition: all 0.2s;';
            
            copyBtn.addEventListener('mouseenter', function() {
                this.style.background = 'rgba(255, 255, 255, 0.1)';
                this.style.color = '#FFFFFF';
            });
            
            copyBtn.addEventListener('mouseleave', function() {
                this.style.background = 'none';
                this.style.color = '#9CA3AF';
            });
            
            copyBtn.addEventListener('click', function() {
                const code = window.querySelector('code');
                if (code) {
                    navigator.clipboard.writeText(code.textContent).then(() => {
                        this.innerHTML = '<i class="fas fa-check"></i>';
                        this.style.color = '#10B981';
                        setTimeout(() => {
                            this.innerHTML = '<i class="fas fa-copy"></i>';
                            this.style.color = '#9CA3AF';
                        }, 2000);
                    });
                }
            });
            
            header.appendChild(copyBtn);
        }
    });
});

// ==========================================
// Intersection Observer for Fade-in Animations
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for fade-in animation
    const fadeElements = document.querySelectorAll('.problem-card, .value-card, .module-card, .feature-card, .benefit-card, .customer-card, .recognition-item');
    fadeElements.forEach(el => observer.observe(el));
});

// ==========================================
// Button Ripple Effect
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-primary-small');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.5);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
    
    // Add ripple animation
    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
        @keyframes ripple {
            to {
                transform: scale(2);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(rippleStyle);
});

// ==========================================
// UI Placeholder Hover Effect
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    const placeholders = document.querySelectorAll('.ui-placeholder');
    
    placeholders.forEach(placeholder => {
        placeholder.addEventListener('mouseenter', function() {
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.transform = 'scale(1.1) rotate(5deg)';
                icon.style.transition = 'transform 0.3s ease';
            }
        });
        
        placeholder.addEventListener('mouseleave', function() {
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    });
});

// ==========================================
// Scroll Progress Indicator (Optional)
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    // Create progress bar
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(135deg, #0D4D5D 0%, #1DBFBF 50%, #7FE6E6 100%);
        width: 0%;
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    // Update progress on scroll
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.pageYOffset / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
});

// ==========================================
// Console Welcome Message
// ==========================================
console.log('%c🌊 Welcome to Aquon Inc.', 'font-size: 20px; font-weight: bold; color: #1DBFBF;');
console.log('%cBuilding trustworthy optimization infrastructure', 'font-size: 14px; color: #0D3D4D;');
console.log('%cInterested in joining our team? Visit aquon.ai/careers', 'font-size: 12px; color: #6B7280;');
