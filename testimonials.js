// Testimonials data and management
const testimonials = [
    {
        name: "Sarah Chen",
        title: "Marketing Consultant",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
        content: "The LinkedIn strategy session completely transformed my approach. I went from zero responses to booking 3 clients in my first month. The personalized templates were game-changers!",
        rating: 5,
        result: "3 new clients in 30 days"
    },
    {
        name: "Michael Rodriguez",
        title: "Business Development Freelancer", 
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        content: "I was skeptical about another LinkedIn 'guru,' but this was different. Real, actionable advice that I could implement immediately. My connection acceptance rate doubled overnight.",
        rating: 5,
        result: "2x connection acceptance rate"
    },
    {
        name: "Emily Watson",
        title: "Digital Strategy Consultant",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face", 
        content: "The profile optimization alone was worth the investment. My profile views increased by 400% and I'm finally attracting the right prospects. Highly recommend!",
        rating: 5,
        result: "400% increase in profile views"
    },
    {
        name: "David Park",
        title: "Sales Consultant",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        content: "Finally, a LinkedIn strategy that actually works for consultants. The outreach templates got me responses from prospects who had been ignoring me for months.",
        rating: 5,
        result: "First responses from cold prospects"
    },
    {
        name: "Lisa Thompson", 
        title: "HR Consultant",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
        content: "The 90-minute session gave me more clarity than months of trying random LinkedIn tactics. I now have a clear roadmap and I'm already seeing results.",
        rating: 5,
        result: "Clear 90-day implementation plan"
    },
    {
        name: "Alex Johnson",
        title: "Tech Consultant", 
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
        content: "Best $500 I've spent on my business this year. The strategy is so targeted that I'm only connecting with high-quality prospects who actually need my services.",
        rating: 5,
        result: "Higher quality prospect connections"
    }
];

function renderTestimonials() {
    const container = document.getElementById('testimonials-container');
    if (!container) {
        console.error('Testimonials container not found');
        return;
    }
    
    container.innerHTML = testimonials.map(testimonial => `
        <div class="bg-white rounded-2xl p-6 shadow-lg hover-lift border border-gray-100">
            <div class="flex items-center mb-4">
                <img src="${testimonial.image}" alt="${testimonial.name}" class="w-12 h-12 rounded-full mr-4 object-cover">
                <div>
                    <h4 class="font-semibold text-gray-900">${testimonial.name}</h4>
                    <p class="text-sm text-gray-600">${testimonial.title}</p>
                </div>
            </div>
            
            <div class="flex mb-4">
                ${Array(testimonial.rating).fill(0).map(() => 
                    '<svg class="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>'
                ).join('')}
            </div>
            
            <p class="text-gray-600 mb-4 italic">"${testimonial.content}"</p>
            
            <div class="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-3">
                <div class="flex items-center text-green-700">
                    <svg class="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                    <span class="text-sm font-medium">Result: ${testimonial.result}</span>
                </div>
            </div>
        </div>
    `).join('');
}

function addTestimonial(testimonial) {
    testimonials.push(testimonial);
    renderTestimonials();
}

function getRandomTestimonials(count = 3) {
    const shuffled = [...testimonials].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Initialize testimonials when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Small delay to ensure all elements are rendered
    setTimeout(renderTestimonials, 100);
});

// Export for use in other modules
window.TestimonialsModule = {
    testimonials,
    renderTestimonials,
    addTestimonial,
    getRandomTestimonials
};
