// DOM Elements - We'll initialize these after the DOM is loaded
let navbar;
let hamburger;
let navLinks;
let navLinksItems;
let tabBtns;
let testimonialDots;
let contactForm;
let newsletterForm;

// Sample car data for the collection section
const carCollection = [
    {
        name: 'Mercedes-Benz 300SL Gullwing',
        year: '1954',
        era: 'vintage',
        image: 'https://source.unsplash.com/600x400/?mercedes,300sl',
        description: 'The iconic "Gullwing" with its distinctive doors and groundbreaking engineering.'
    },
    {
        name: 'BMW 507',
        year: '1956',
        era: 'vintage',
        image: 'https://source.unsplash.com/600x400/?bmw,507',
        description: 'A beautiful roadster that has become one of the most collectible BMWs ever made.'
    },
    {
        name: 'Porsche 356 Speedster',
        year: '1955',
        era: 'vintage',
        image: 'https://source.unsplash.com/600x400/?porsche,356',
        description: 'The car that established Porsche\'s motorsport legacy and design philosophy.'
    },
    {
        name: 'Mercedes-Benz 600 Grosser',
        year: '1963',
        era: 'classic',
        image: 'https://source.unsplash.com/600x400/?mercedes,600',
        description: 'The ultimate luxury car of its era, favored by royalty and celebrities alike.'
    },
    {
        name: 'BMW 2002 Turbo',
        year: '1973',
        era: 'classic',
        image: 'https://source.unsplash.com/600x400/?bmw,2002',
        description: 'BMW\'s first turbocharged production car and the precursor to the M division.'
    },
    {
        name: 'Porsche 911 Carrera RS',
        year: '1973',
        era: 'classic',
        image: 'https://source.unsplash.com/600x400/?porsche,911rs',
        description: 'The purist\'s dream - lightweight, powerful, and the blueprint for all future 911 models.'
    },
    {
        name: 'Audi Quattro',
        year: '1980',
        era: 'classic',
        image: 'https://source.unsplash.com/600x400/?audi,quattro',
        description: 'The car that revolutionized rally racing with its all-wheel-drive system.'
    },
    {
        name: 'Volkswagen Golf GTI Mk1',
        year: '1976',
        era: 'classic',
        image: 'https://source.unsplash.com/600x400/?volkswagen,gti',
        description: 'The original hot hatch that combined practicality with sports car performance.'
    },
    {
        name: 'Mercedes-Benz 190E 2.5-16 Evolution II',
        year: '1990',
        era: 'modern',
        image: 'https://source.unsplash.com/600x400/?mercedes,190e',
        description: 'A touring car homologation special with an iconic aerodynamic body kit.'
    },
    {
        name: 'BMW E30 M3',
        year: '1986',
        era: 'modern',
        image: 'https://source.unsplash.com/600x400/?bmw,e30m3',
        description: 'The first M3, developed for racing and now one of the most sought-after classics.'
    },
    {
        name: 'Porsche 959',
        year: '1986',
        era: 'modern',
        image: 'https://source.unsplash.com/600x400/?porsche,959',
        description: 'A technological tour de force that was the fastest production car of its time.'
    },
    {
        name: 'Audi RS2 Avant',
        year: '1994',
        era: 'modern',
        image: 'https://source.unsplash.com/600x400/?audi,rs2',
        description: 'The first RS model, developed in collaboration with Porsche, creating the super wagon segment.'
    },
    {
        name: 'Mercedes-Benz SLS AMG',
        year: '2010',
        era: 'contemporary',
        image: 'https://source.unsplash.com/600x400/?mercedes,sls',
        description: 'A modern interpretation of the 300SL with gullwing doors and a naturally aspirated V8.'
    },
    {
        name: 'BMW i8',
        year: '2014',
        era: 'contemporary',
        image: 'https://source.unsplash.com/600x400/?bmw,i8',
        description: 'A plug-in hybrid sports car with futuristic design and innovative construction.'
    },
    {
        name: 'Porsche Taycan',
        year: '2019',
        era: 'contemporary',
        image: 'https://source.unsplash.com/600x400/?porsche,taycan',
        description: 'Porsche\'s first all-electric car, combining performance with sustainability.'
    },
    {
        name: 'Audi e-tron GT',
        year: '2021',
        era: 'contemporary',
        image: 'https://source.unsplash.com/600x400/?audi,etron',
        description: 'A sleek electric grand tourer showcasing Audi\'s vision for the future.'
    }
];

// Initialize the collection grid
function initializeCollection() {
    const collectionGrid = document.querySelector('.collection-grid');
    
    // Create initial grid with all cars
    displayCars('all');
    
    // Tab functionality
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            tabBtns.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            btn.classList.add('active');
            
            // Display cars based on selected era
            const era = btn.getAttribute('data-era');
            displayCars(era);
        });
    });
    
    // Function to display cars based on era
    function displayCars(era) {
        // Filter cars based on era
        const filteredCars = era === 'all' ? carCollection : carCollection.filter(car => car.era === era);
        
        // Clear the grid
        collectionGrid.innerHTML = '';
        
        // Add cars to the grid
        filteredCars.forEach(car => {
            const carCard = document.createElement('div');
            carCard.className = 'featured-card';
            
            carCard.innerHTML = `
                <div class="card-image" style="background-image: url('${car.image}')"></div>
                <div class="card-content">
                    <h3>${car.name}</h3>
                    <p class="year">${car.year}</p>
                    <p>${car.description}</p>
                    <a href="#" class="btn-text">View Details <i class="fas fa-arrow-right"></i></a>
                </div>
            `;
            
            collectionGrid.appendChild(carCard);
        });
    }
}

// Testimonial Slider
function initializeTestimonialSlider() {
    const slides = document.querySelectorAll('.testimonial-slide');
    let currentSlide = 0;
    
    // Hide all slides except the first one
    slides.forEach((slide, index) => {
        if (index !== 0) {
            slide.style.display = 'none';
        }
    });
    
    // Dot functionality
    testimonialDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            // Hide all slides
            slides.forEach(slide => {
                slide.style.display = 'none';
            });
            
            // Remove active class from all dots
            testimonialDots.forEach(d => d.classList.remove('active'));
            
            // Show selected slide
            slides[index].style.display = 'block';
            
            // Add active class to selected dot
            dot.classList.add('active');
            
            // Update current slide
            currentSlide = index;
        });
    });
    
    // Auto slide
    setInterval(() => {
        // Hide all slides
        slides.forEach(slide => {
            slide.style.display = 'none';
        });
        
        // Remove active class from all dots
        testimonialDots.forEach(d => d.classList.remove('active'));
        
        // Increment current slide
        currentSlide = (currentSlide + 1) % slides.length;
        
        // Show current slide
        slides[currentSlide].style.display = 'block';
        
        // Add active class to current dot
        testimonialDots[currentSlide].classList.add('active');
    }, 5000);
}

// Gallery Lightbox
function initializeGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            // Create lightbox
            const lightbox = document.createElement('div');
            lightbox.className = 'lightbox';
            
            // Get background image URL
            const imageUrl = window.getComputedStyle(item).backgroundImage.slice(4, -1).replace(/"/g, "");
            
            // Create lightbox content
            lightbox.innerHTML = `
                <div class="lightbox-content">
                    <span class="close-lightbox">&times;</span>
                    <img src="${imageUrl}" alt="Gallery Image">
                </div>
            `;
            
            // Add lightbox to body
            document.body.appendChild(lightbox);
            
            // Prevent scrolling
            document.body.style.overflow = 'hidden';
            
            // Close lightbox when clicking on close button or outside the image
            const closeLightbox = document.querySelector('.close-lightbox');
            closeLightbox.addEventListener('click', () => {
                document.body.removeChild(lightbox);
                document.body.style.overflow = 'auto';
            });
            
            lightbox.addEventListener('click', (e) => {
                if (e.target === lightbox) {
                    document.body.removeChild(lightbox);
                    document.body.style.overflow = 'auto';
                }
            });
        });
    });
}

// Add lightbox styles
function addLightboxStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .lightbox {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.9);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1001;
        }
        
        .lightbox-content {
            position: relative;
            max-width: 90%;
            max-height: 90%;
        }
        
        .lightbox img {
            max-width: 100%;
            max-height: 90vh;
            display: block;
            border: 3px solid white;
        }
        
        .close-lightbox {
            position: absolute;
            top: -40px;
            right: 0;
            color: white;
            font-size: 30px;
            cursor: pointer;
        }
    `;
    document.head.appendChild(style);
}

// Initialize everything when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize DOM elements
    navbar = document.querySelector('.navbar');
    hamburger = document.querySelector('.hamburger');
    navLinks = document.querySelector('.nav-links');
    navLinksItems = document.querySelectorAll('.nav-links a');
    tabBtns = document.querySelectorAll('.tab-btn');
    testimonialDots = document.querySelectorAll('.dot');
    contactForm = document.getElementById('contactForm');
    newsletterForm = document.getElementById('newsletterForm');
    
    // Sticky Navbar
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
    
    // Mobile Menu Toggle
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
            
            // Prevent body scrolling when menu is open
            if (navLinks.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
    }
    
    // Close mobile menu when clicking on a nav link
    if (navLinksItems && hamburger && navLinks) {
        navLinksItems.forEach(item => {
            item.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navLinks && navLinks.classList.contains('active') && 
            !navLinks.contains(e.target) && 
            !hamburger.contains(e.target)) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // Add touch support for gallery items
    const galleryItems = document.querySelectorAll('.gallery-item');
    if (galleryItems.length > 0) {
        galleryItems.forEach(item => {
            // Add active state for touch devices
            item.addEventListener('touchstart', () => {
                item.classList.add('touch-active');
            });
            
            item.addEventListener('touchend', () => {
                setTimeout(() => {
                    item.classList.remove('touch-active');
                }, 300);
            });
        });
    }
    
    // Initialize collection if elements exist
    if (document.querySelector('.collection-grid') && tabBtns.length > 0) {
        initializeCollection();
    }
    
    // Initialize testimonial slider if elements exist
    if (document.querySelectorAll('.testimonial-slide').length > 0 && testimonialDots.length > 0) {
        initializeTestimonialSlider();
    }
    
    // Initialize gallery if elements exist
    if (document.querySelectorAll('.gallery-item').length > 0) {
        initializeGallery();
        addLightboxStyles();
    }
    
    // Form event listeners with mobile optimizations
    if (contactForm) {
        // Add input focus styles for better mobile UX
        const formInputs = contactForm.querySelectorAll('input, textarea');
        formInputs.forEach(input => {
            input.addEventListener('focus', () => {
                input.parentElement.classList.add('input-focused');
            });
            
            input.addEventListener('blur', () => {
                input.parentElement.classList.remove('input-focused');
            });
        });
        
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const formObject = Object.fromEntries(formData.entries());
            
            // In a real application, you would send this data to a server
            console.log('Form submitted:', formObject);
            
            // Show success message
            alert('Thank you for your message! We will get back to you soon.');
            
            // Reset form
            contactForm.reset();
        });
    }
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get email
            const email = newsletterForm.querySelector('input[type="email"]').value;
            
            // In a real application, you would send this data to a server
            console.log('Newsletter subscription:', email);
            
            // Show success message
            alert('Thank you for subscribing to our newsletter!');
            
            // Reset form
            newsletterForm.reset();
        });
    }
    
    // Smooth scrolling for navigation links with mobile offset adjustment
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Adjust offset for mobile
                const isMobile = window.innerWidth < 768;
                const offset = isMobile ? 70 : 80;
                
                window.scrollTo({
                    top: targetElement.offsetTop - offset,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    // Check if we're on a touch device
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    if (isTouchDevice) {
        // Add swipe detection to the testimonial slider
        const testimonialSlider = document.querySelector('.testimonial-slider');
        if (testimonialSlider) {
            testimonialSlider.addEventListener('touchstart', e => {
                touchStartX = e.changedTouches[0].screenX;
            }, {passive: true});
            
            testimonialSlider.addEventListener('touchend', e => {
                touchEndX = e.changedTouches[0].screenX;
                handleSwipe();
            }, {passive: true});
        }
    }
    
    function handleSwipe() {
        const swipeThreshold = 50; // Minimum distance for a swipe
        
        if (touchEndX < touchStartX - swipeThreshold) {
            // Swipe left - next slide
            const activeDot = document.querySelector('.dot.active');
            if (activeDot && activeDot.nextElementSibling) {
                activeDot.nextElementSibling.click();
            } else if (testimonialDots.length > 0) {
                testimonialDots[0].click(); // Go to first slide if at the end
            }
        }
        
        if (touchEndX > touchStartX + swipeThreshold) {
            // Swipe right - previous slide
            const activeDot = document.querySelector('.dot.active');
            if (activeDot && activeDot.previousElementSibling) {
                activeDot.previousElementSibling.click();
            } else if (testimonialDots.length > 0) {
                testimonialDots[testimonialDots.length - 1].click(); // Go to last slide if at the beginning
            }
        }
    }
    
    // Add viewport height fix for mobile browsers
    function setMobileViewportHeight() {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    
    // Set the height initially and on resize
    setMobileViewportHeight();
    window.addEventListener('resize', setMobileViewportHeight);
});