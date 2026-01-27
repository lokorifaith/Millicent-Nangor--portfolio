// Smooth scrolling for navigation links
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

// Add active class to current navigation item
const currentLocation = location.pathname;
const menuItems = document.querySelectorAll('.main-nav a');

menuItems.forEach(item => {
    const href = item.getAttribute('href');
    if (href === currentLocation || 
        (currentLocation === '/' && href === 'index.html') ||
        (currentLocation.includes('images.html') && href === 'images.html')) {
        item.classList.add('active');
    }
});

// Add scroll effect to header
let lastScroll = 0;
window.addEventListener('scroll', function() {
    const header = document.querySelector('.top-header');
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Contact button functionality
document.querySelectorAll('.btn-contact, .btn-primary, .btn-cta').forEach(button => {
    button.addEventListener('click', function(e) {
        if (this.getAttribute('href') === '#contact') {
            e.preventDefault();
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Contact form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };
        
        // Here you would typically send the data to a server
        // For now, we'll just show an alert
        alert('Thank you for your message! I will get back to you soon.\n\n' +
              'Name: ' + formData.name + '\n' +
              'Email: ' + formData.email);
        
        // Reset form
        contactForm.reset();
    });
}

// Gallery filter functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const galleryCards = document.querySelectorAll('.gallery-card');

if (filterButtons.length > 0 && galleryCards.length > 0) {
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            galleryCards.forEach(card => {
                if (filter === 'all') {
                    card.classList.remove('hide');
                } else {
                    if (card.getAttribute('data-category') === filter) {
                        card.classList.remove('hide');
                    } else {
                        card.classList.add('hide');
                    }
                }
            });
        });
    });
}
