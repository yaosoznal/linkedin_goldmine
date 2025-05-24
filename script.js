// Main application logic
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the application
    initializeEventListeners();
    initializeAnimations();
    loadTestimonials();
});

function initializeEventListeners() {
    // CTA button click handlers
    const mainCTA = document.getElementById('mainCTA');
    const secondaryCTA = document.getElementById('secondaryCTA');
    
    if (mainCTA) {
        mainCTA.addEventListener('click', handleCTAClick);
    }
    
    if (secondaryCTA) {
        secondaryCTA.addEventListener('click', handleCTAClick);
    }
    
    // Smooth scrolling for any internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

function handleCTAClick(e) {
    e.preventDefault();
    
    // Show booking modal or redirect to payment
    showBookingProcess();
}

function showBookingProcess() {
    // Create modal overlay
    const modal = createBookingModal();
    document.body.appendChild(modal);
    
    // Show modal with animation
    setTimeout(() => {
        modal.classList.add('opacity-100');
        modal.classList.remove('opacity-0');
    }, 10);
}

function createBookingModal() {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 opacity-0 transition-opacity duration-300';
    
    modal.innerHTML = `
        <div class="bg-white rounded-3xl p-8 max-w-md mx-4 transform transition-all duration-300 scale-95">
            <div class="text-center">
                <div class="w-20 h-20 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                </div>
                <h3 class="text-2xl font-bold mb-4 text-gray-900">Book Your Strategy Session</h3>
                <p class="text-gray-600 mb-8">
                    Choose your preferred payment method to secure your 90-minute LinkedIn Lead Strategy consultation.
                </p>
                
                <div class="space-y-4 mb-8">
                    <button onclick="redirectToPayment('paypal')" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl transition-colors duration-200 flex items-center justify-center">
                        <svg class="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a.3.3 0 0 0-.32-.07c-.99.27-2.704.44-4.571.44h-2.19c-.524 0-.968.382-1.05.9L12.35 12.11a.641.641 0 0 0 .633.74h1.42c3.421 0 5.996-1.39 6.757-5.933z"/>
                        </svg>
                        Pay with PayPal - $500
                    </button>
                    
                    <button onclick="redirectToPayment('wise')" class="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-xl transition-colors duration-200 flex items-center justify-center">
                        <svg class="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                        Pay with Wise - $500
                    </button>
                </div>
                
                <div class="text-sm text-gray-500 mb-6">
                    ✅ Secure payment processing<br>
                    ✅ Instant booking confirmation<br>
                    ✅ Session recording included
                </div>
                
                <button onclick="closeModal()" class="text-gray-400 hover:text-gray-600 transition-colors duration-200">
                    Maybe later
                </button>
            </div>
        </div>
    `;
    
    // Close modal when clicking overlay
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    return modal;
}

function redirectToPayment(method) {
    // In a real implementation, these would be actual payment links
    const paymentUrls = {
        paypal: 'https://paypal.me/yourpaypal/500',  // Replace with actual PayPal link
        wise: 'https://wise.com/pay/your-wise-link'   // Replace with actual Wise link
    };
    
    // Show confirmation message
    alert(`Redirecting to ${method.charAt(0).toUpperCase() + method.slice(1)} payment for $500. After payment, you'll receive a calendar link to book your session.`);
    
    // In production, uncomment this line to redirect
    // window.open(paymentUrls[method], '_blank');
    
    closeModal();
}

function closeModal() {
    const modal = document.querySelector('.fixed.inset-0');
    if (modal) {
        modal.classList.add('opacity-0');
        modal.classList.remove('opacity-100');
        setTimeout(() => {
            modal.remove();
        }, 300);
    }
}

function initializeAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements that should animate on scroll
    document.querySelectorAll('.hover-lift').forEach(el => {
        observer.observe(el);
    });
    
    // Add CSS for scroll animations
    const style = document.createElement('style');
    style.textContent = `
        .hover-lift {
            opacity: 0.8;
            transform: translateY(20px);
            transition: all 0.6s ease-out;
        }
        
        .hover-lift.animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        .pulse-animation {
            animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.8; }
        }
    `;
    document.head.appendChild(style);
}

function loadTestimonials() {
    // This will be called by testimonials.js
    // testimonials.js will populate the testimonials container
    console.log('Main application loaded, testimonials will be loaded separately');
}

// Utility functions
function trackEvent(eventName, properties = {}) {
    // Analytics tracking (placeholder)
    console.log('Event tracked:', eventName, properties);
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Export functions for use in other modules
window.LinkedInConsultApp = {
    handleCTAClick,
    redirectToPayment,
    closeModal,
    trackEvent,
    validateEmail
};
