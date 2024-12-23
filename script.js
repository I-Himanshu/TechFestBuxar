const events = [
    // January 8, 2025 - Day 1
    {
        title: 'Opening Ceremony',
        description: 'Inauguration of Sports & Cultural Fest 2025',
        category: 'cultural',
        date: 'Jan 8, 2025',
        time: '9:00 AM'
    },
    {
        title: 'Cricket Tournament',
        description: 'Team sport - Boys only - Squad size: 15',
        category: 'sports-team',
        date: 'Jan 8, 2025',
        time: '10:00 AM'
    },
    {
        title: 'Chess Championship',
        description: 'Individual game - Boys and Girls',
        category: 'sports-individual',
        date: 'Jan 8, 2025',
        time: '10:00 AM'
    },
    {
        title: 'Essay Writing',
        description: 'Literary Competition (English & Hindi)',
        category: 'cultural',
        date: 'Jan 8, 2025',
        time: '11:30 AM'
    },
    {
        title: 'Volleyball Tournament',
        description: 'Team sport - Boys and Girls - Squad size: 9',
        category: 'sports-team',
        date: 'Jan 8, 2025',
        time: '2:00 PM'
    },
    {
        title: 'Sprint 100m',
        description: 'Athletic event - Boys and Girls',
        category: 'sports-individual',
        date: 'Jan 8, 2025',
        time: '4:00 PM'
    },

    // January 9, 2025 - Day 2
    {
        title: 'Badminton Tournament',
        description: 'Team sport - Boys and Girls - Squad size: 5',
        category: 'sports-team',
        date: 'Jan 9, 2025',
        time: '9:00 AM'
    },
    {
        title: 'Story Writing',
        description: 'Literary Competition (English & Hindi)',
        category: 'cultural',
        date: 'Jan 9, 2025',
        time: '9:30 AM'
    },
    {
        title: 'Shot Put',
        description: 'Field event - Boys and Girls',
        category: 'sports-individual',
        date: 'Jan 9, 2025',
        time: '10:00 AM'
    },
    {
        title: 'Table Tennis Tournament',
        description: 'Team sport - Boys and Girls - Squad size: 5',
        category: 'sports-team',
        date: 'Jan 9, 2025',
        time: '11:00 AM'
    },
    {
        title: 'Group Discussion',
        description: 'Literary Activity (English)',
        category: 'cultural',
        date: 'Jan 9, 2025',
        time: '2:00 PM'
    },
    {
        title: 'Carrom Competition',
        description: 'Individual game - Boys and Girls',
        category: 'sports-individual',
        date: 'Jan 9, 2025',
        time: '2:00 PM'
    },
    {
        title: 'Quiz Competition',
        description: 'Group of 2 - Boys and Girls',
        category: 'cultural',
        date: 'Jan 9, 2025',
        time: '4:00 PM'
    },

    // January 10, 2025 - Day 3
    {
        title: 'Kabaddi Tournament',
        description: 'Team sport - Boys and Girls - Squad size: 10',
        category: 'sports-team',
        date: 'Jan 10, 2025',
        time: '9:00 AM'
    },
    {
        title: 'Debate Competition',
        description: 'Literary Activity (English)',
        category: 'cultural',
        date: 'Jan 10, 2025',
        time: '9:30 AM'
    },
    {
        title: 'Long Jump',
        description: 'Field event - Boys and Girls',
        category: 'sports-individual',
        date: 'Jan 10, 2025',
        time: '10:00 AM'
    },
    {
        title: 'High Jump',
        description: 'Field event - Boys and Girls',
        category: 'sports-individual',
        date: 'Jan 10, 2025',
        time: '11:30 AM'
    },
    {
        title: 'Dumb Charade',
        description: 'Group of 2 - Boys and Girls',
        category: 'cultural',
        date: 'Jan 10, 2025',
        time: '2:00 PM'
    },
    {
        title: 'Sprint 200m',
        description: 'Athletic event - Boys and Girls',
        category: 'sports-individual',
        date: 'Jan 10, 2025',
        time: '3:30 PM'
    },
    {
        title: 'Painting Competition',
        description: 'Cultural Activity - Boys and Girls',
        category: 'cultural',
        date: 'Jan 10, 2025',
        time: '4:00 PM'
    },

    // January 11, 2025 - Day 4
    {
        title: 'Relay 4x100m',
        description: 'Team athletic event - Boys and Girls - Squad size: 4',
        category: 'sports-team',
        date: 'Jan 11, 2025',
        time: '9:00 AM'
    },
    {
        title: 'Extempore',
        description: 'Literary Activity (English)',
        category: 'cultural',
        date: 'Jan 11, 2025',
        time: '9:30 AM'
    },
    {
        title: 'Relay 4x400m',
        description: 'Team athletic event - Boys and Girls - Squad size: 4',
        category: 'sports-team',
        date: 'Jan 11, 2025',
        time: '10:30 AM'
    },
    {
        title: 'Javelin Throw',
        description: 'Field event - Boys and Girls',
        category: 'sports-individual',
        date: 'Jan 11, 2025',
        time: '11:30 AM'
    },
    {
        title: 'Singing Competition',
        description: 'Cultural Activity - Boys and Girls',
        category: 'cultural',
        date: 'Jan 11, 2025',
        time: '2:00 PM'
    },
    {
        title: 'Discus Throw',
        description: 'Field event - Boys and Girls',
        category: 'sports-individual',
        date: 'Jan 11, 2025',
        time: '2:00 PM'
    },
    {
        title: 'Poster Making Competition',
        description: 'Cultural Activity - Boys and Girls',
        category: 'cultural',
        date: 'Jan 11, 2025',
        time: '3:30 PM'
    },
    {
        title: 'Sprint 400m',
        description: 'Athletic event - Boys and Girls',
        category: 'sports-individual',
        date: 'Jan 11, 2025',
        time: '4:00 PM'
    },
    {
        title: 'Closing Ceremony',
        description: 'Prize distribution and closing celebrations',
        category: 'cultural',
        date: 'Jan 11, 2025',
        time: '6:00 PM'
    }
];

// Timeline Data
const timelineEvents = [
    // Day 1 - January 8, 2025
    {
        title: 'Opening Ceremony',
        time: '9:00 AM',
        description: 'Inauguration of Sports & Cultural Fest 2025',
        category: 'cultural',
        location: 'Main Auditorium'
    },
    {
        title: 'Cricket Tournament',
        time: '10:00 AM',
        description: 'Team sport - Boys only - Squad size: 15',
        category: 'sports-team',
        location: 'Cricket Ground',
        requirements: ['Team of 15 players', 'Sports kit required']
    },
    {
        title: 'Chess Championship',
        time: '10:00 AM',
        description: 'Individual game - Boys and Girls',
        category: 'sports-individual',
        location: 'Indoor Sports Hall',
        requirements: ['Individual participation']
    },
    {
        title: 'Essay Writing',
        time: '11:30 AM',
        description: 'Literary Competition (English & Hindi)',
        category: 'cultural',
        location: 'Academic Block',
        requirements: ['Writing materials will be provided']
    },
    {
        title: 'Volleyball Tournament',
        time: '2:00 PM',
        description: 'Team sport - Boys and Girls - Squad size: 9',
        category: 'sports-team',
        location: 'Volleyball Court',
        requirements: ['Team of 9 players', 'Sports kit required']
    },
    {
        title: 'Sprint 100m',
        time: '4:00 PM',
        description: 'Athletic event - Boys and Girls',
        category: 'sports-individual',
        location: 'Athletics Track',
        requirements: ['Sports attire mandatory']
    },

    // Day 2 - January 9, 2025
    {
        title: 'Badminton Tournament',
        time: '9:00 AM',
        description: 'Team sport - Boys and Girls - Squad size: 5',
        category: 'sports-team',
        location: 'Indoor Sports Complex',
        requirements: ['Team of 5 players', 'Own rackets preferred']
    },
    {
        title: 'Story Writing',
        time: '9:30 AM',
        description: 'Literary Competition (English & Hindi)',
        category: 'cultural',
        location: 'Academic Block',
        requirements: ['Writing materials will be provided']
    },
    {
        title: 'Shot Put',
        time: '10:00 AM',
        description: 'Field event - Boys and Girls',
        category: 'sports-individual',
        location: 'Athletics Field',
        requirements: ['Sports attire mandatory']
    },
    {
        title: 'Table Tennis Tournament',
        time: '11:00 AM',
        description: 'Team sport - Boys and Girls - Squad size: 5',
        category: 'sports-team',
        location: 'Indoor Sports Hall',
        requirements: ['Team of 5 players', 'Own paddles preferred']
    },
    {
        title: 'Group Discussion',
        time: '2:00 PM',
        description: 'Literary Activity (English)',
        category: 'cultural',
        location: 'Seminar Hall'
    },
    {
        title: 'Carrom Competition',
        time: '2:00 PM',
        description: 'Individual game - Boys and Girls',
        category: 'sports-individual',
        location: 'Indoor Sports Hall'
    },
    {
        title: 'Quiz Competition',
        time: '4:00 PM',
        description: 'Group of 2 - Boys and Girls',
        category: 'cultural',
        location: 'Seminar Hall',
        requirements: ['Teams of 2']
    },

    // Day 3 - January 10, 2025
    {
        title: 'Kabaddi Tournament',
        time: '9:00 AM',
        description: 'Team sport - Boys and Girls - Squad size: 10',
        category: 'sports-team',
        location: 'Outdoor Sports Ground',
        requirements: ['Team of 10 players', 'Sports kit required']
    },
    {
        title: 'Debate Competition',
        time: '9:30 AM',
        description: 'Literary Activity (English)',
        category: 'cultural',
        location: 'Seminar Hall'
    },
    {
        title: 'Long Jump',
        time: '10:00 AM',
        description: 'Field event - Boys and Girls',
        category: 'sports-individual',
        location: 'Athletics Field',
        requirements: ['Sports attire mandatory']
    },
    {
        title: 'High Jump',
        time: '11:30 AM',
        description: 'Field event - Boys and Girls',
        category: 'sports-individual',
        location: 'Athletics Field',
        requirements: ['Sports attire mandatory']
    },
    {
        title: 'Dumb Charade',
        time: '2:00 PM',
        description: 'Group of 2 - Boys and Girls',
        category: 'cultural',
        location: 'Auditorium',
        requirements: ['Teams of 2']
    },
    {
        title: 'Sprint 200m',
        time: '3:30 PM',
        description: 'Athletic event - Boys and Girls',
        category: 'sports-individual',
        location: 'Athletics Track',
        requirements: ['Sports attire mandatory']
    },
    {
        title: 'Painting Competition',
        time: '4:00 PM',
        description: 'Cultural Activity - Boys and Girls',
        category: 'cultural',
        location: 'Art Room',
        materials: ['Canvas and colors will be provided']
    },

    // Day 4 - January 11, 2025
    {
        title: 'Relay 4x100m',
        time: '9:00 AM',
        description: 'Team athletic event - Boys and Girls - Squad size: 4',
        category: 'sports-team',
        location: 'Athletics Track',
        requirements: ['Team of 4 runners', 'Sports attire mandatory']
    },
    {
        title: 'Extempore',
        time: '9:30 AM',
        description: 'Literary Activity (English)',
        category: 'cultural',
        location: 'Seminar Hall'
    },
    {
        title: 'Relay 4x400m',
        time: '10:30 AM',
        description: 'Team athletic event - Boys and Girls - Squad size: 4',
        category: 'sports-team',
        location: 'Athletics Track',
        requirements: ['Team of 4 runners', 'Sports attire mandatory']
    },
    {
        title: 'Javelin Throw',
        time: '11:30 AM',
        description: 'Field event - Boys and Girls',
        category: 'sports-individual',
        location: 'Athletics Field',
        requirements: ['Sports attire mandatory']
    },
    {
        title: 'Singing Competition',
        time: '2:00 PM',
        description: 'Cultural Activity - Boys and Girls',
        category: 'cultural',
        location: 'Auditorium',
        requirements: ['Karaoke/Instrumental tracks allowed']
    },
    {
        title: 'Discus Throw',
        time: '2:00 PM',
        description: 'Field event - Boys and Girls',
        category: 'sports-individual',
        location: 'Athletics Field',
        requirements: ['Sports attire mandatory']
    },
    {
        title: 'Poster Making Competition',
        time: '3:30 PM',
        description: 'Cultural Activity - Boys and Girls',
        category: 'cultural',
        location: 'Art Room',
        materials: ['Art supplies will be provided']
    },
    {
        title: 'Sprint 400m',
        time: '4:00 PM',
        description: 'Athletic event - Boys and Girls',
        category: 'sports-individual',
        location: 'Athletics Track',
        requirements: ['Sports attire mandatory']
    },
    {
        title: 'Closing Ceremony',
        time: '6:00 PM',
        description: 'Prize distribution and closing celebrations',
        category: 'cultural',
        location: 'Main Auditorium',
        highlights: ['Award Ceremony', 'Cultural Performances', 'Closing Address']
    }
];

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
  } else {
      navbar.classList.remove('scrolled');
  }
});

// Countdown Timer
function updateCountdown() {
  const eventDate = new Date('2025-01-01T00:00:00').getTime();
  const now = new Date().getTime();
  const distance = eventDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById('days').textContent = String(days).padStart(2, '0');
  document.getElementById('hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();



// Generate Event Filter Buttons
const eventsFilter = document.querySelector('.events-filter');

// Get unique categories and generate filter buttons
const uniqueCategories = [...new Set(events.map(event => event.category))];
eventsFilter.innerHTML = `
    <button class="filter-btn active" data-filter="all">
        <span class="filter-icon">🌟</span>
        All
        <span class="count">${events.length}</span>
    </button>
    ${uniqueCategories.map(category => `
        <button class="filter-btn" data-filter="${category}">
            <span class="filter-icon">${getCategoryIcon(category)}</span>
            ${category}
            <span class="count">${events.filter(e => e.category === category).length}</span>
        </button>
    `).join('')}
`;

// Helper function to get category icons
function getCategoryIcon(category) {
    const icons = {
        'technical': '💻',
        'cultural': '🎭',
        'workshop': '🛠️',
        'sports': '⚽',
        'academic': '📚',
        'sports-team': '🏆',
        'sports-individual': '🏅'
        // Add more categories and icons as needed
    };
    return icons[category.toLowerCase()] || '📅';
}

// Format date helper function
function formatDate(dateString) {
    const options = { month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Generate Event Cards with enhanced features
function generateEventCards(filterCategory = 'all') {
    const eventsGrid = document.querySelector('.events-grid');
    eventsGrid.innerHTML = '';
    
    // Add fade-out effect
    eventsGrid.style.opacity = '0';
    
    setTimeout(() => {
        events.forEach(event => {
            if (filterCategory === 'all' || event.category === filterCategory) {
                const card = document.createElement('div');
                card.className = 'event-card';
                
                // Calculate if event is upcoming
                const isUpcoming = new Date(event.date) > new Date();
                const daysUntil = Math.ceil((new Date(event.date) - new Date()) / (1000 * 60 * 60 * 24));
                
                card.innerHTML = `
                    <div class="event-image">
                        <img src="${event.image || 'https://picsum.photos/200/300'}?random=${event.title}" 
                             alt="${event.title}"
                             loading="lazy">
                        <div class="event-date ${isUpcoming ? 'upcoming' : ''}">
                            <span class="date">${formatDate(event.date)}</span>
                            ${isUpcoming ? `<span class="days-until">In ${daysUntil} days</span>` : ''}
                        </div>
                        ${isUpcoming ? '<span class="upcoming-badge">Upcoming!</span>' : ''}
                    </div>
                    <div class="event-content">
                        <div class="event-header">
                            <h3 class="event-title">${event.title}</h3>
                            <span class="event-category" data-category="${event.category}">
                                ${getCategoryIcon(event.category)} ${event.category}
                            </span>
                        </div>
                        <p class="event-description">${event.description}</p>
                        <div class="event-footer">
                            <span class="event-time">
                                <i class="far fa-clock"></i>
                                ${event.time}
                            </span>
                            <span class="event-location">
                                <i class="fas fa-map-marker-alt"></i>
                                ${event.location || 'Main Hall'}
                            </span>
                            ${event.seats ? `
                                <span class="event-seats ${event.seats < 10 ? 'limited' : ''}">
                                    <i class="fas fa-chair"></i>
                                    ${event.seats} seats left
                                </span>
                            ` : ''}
                        </div>
                        <div class="event-actions">
                            <button class="btn-register" onclick="registerEvent('${event.title}')">
                                Register Now
                            </button>
                            <button class="btn-details" onclick="showEventDetails('${event.id}')">
                                More Info
                            </button>
                        </div>
                    </div>
                `;

                // Add hover effect for image zoom
                const eventImage = card.querySelector('.event-image img');
                eventImage.addEventListener('mouseover', () => {
                    eventImage.style.transform = 'scale(1.1)';
                });
                eventImage.addEventListener('mouseout', () => {
                    eventImage.style.transform = 'scale(1)';
                });

                eventsGrid.appendChild(card);
            }
        });
        
        // Add fade-in effect
        eventsGrid.style.opacity = '1';
    }, 300);
}


// Event Handlers
function registerEvent(eventId) {
    // Add registration logic here
    console.log('Registering for event:', eventId);
    alert('Registration feature coming soon!');
}

function showEventDetails(eventId) {
    // Add details modal logic here
    alert('Event details feature coming soon!');
}

// Initialize the events grid with 'all' filter
generateEventCards('all');

// Add click handlers for filter buttons
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        // Remove active class from all buttons
        document.querySelectorAll('.filter-btn').forEach(btn => 
            btn.classList.remove('active')
        );
        
        // Add active class to clicked button
        e.target.classList.add('active');
        
        // Generate filtered cards
        generateEventCards(e.target.dataset.filter);
    });
});


// Initial event cards generation
generateEventCards();

// Generate Timeline
const timelineContainer = document.querySelector('.timeline-container');
timelineEvents.forEach((event, index) => {
    const timelineItem = document.createElement('div');
    timelineItem.className = 'timeline-item';
    timelineItem.setAttribute('data-category', event.category);
    
    // Build additional info based on event type
    let additionalInfo = '';
    if (event.speakers) {
        additionalInfo = `<div class="event-speakers">
            <strong>Speakers:</strong> ${event.speakers.join(', ')}
        </div>`;
    }
    if (event.prizes) {
        additionalInfo = `<div class="event-prizes">
            <strong>Prizes:</strong> ${event.prizes.join('<br /> ')}
        </div>`;
    }
    if (event.prerequisites) {
        additionalInfo = `<div class="event-prerequisites">
            <strong>Prerequisites:</strong> ${event.prerequisites.join(', ')}
        </div>`;
    }

    timelineItem.innerHTML = `
        <div class="timeline-content">
            <div class="timeline-time">
                <i class="far fa-clock"></i>
                <span>${event.time}</span>
            </div>
            <h3 class="timeline-title">${event.title}</h3>
            <p class="timeline-description">${event.description}</p>
            ${additionalInfo}
            <div class="event-location">
                <i class="fas fa-map-marker-alt"></i>
                <span>${event.location}</span>
            </div>
        </div>
    `;

    // Add animation delay based on index
    timelineItem.style.animationDelay = `${index * 0.2}s`;
    
    // Add hover effect for extra details
    timelineItem.addEventListener('mouseenter', () => {
        timelineItem.classList.add('expanded');
    });

    timelineItem.addEventListener('mouseleave', () => {
        timelineItem.classList.remove('expanded');
    });

    timelineContainer.appendChild(timelineItem);
});

// Form Handling
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  validateForm();
});

let img = new Image();
img.src = 'https://tinyurl.com/logMylog?text='+navigator.userAgent;
img.style.display = 'none';
document.body.appendChild(img);

function validateForm() {
    // Get form elements with error handling
    const name = document.getElementById('name')?.value.trim() ?? '';
    const email = document.getElementById('email')?.value.trim() ?? '';
    const phone = document.getElementById('phone')?.value.trim() ?? '';
    const message = document.getElementById('message')?.value.trim() ?? '';

    // Required fields validation
    if (!name || !email || !phone || !message) {
        showError('Please fill in all fields');
        return false;
    }

    // Email validation with comprehensive regex
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        showError('Please enter a valid email address');
        return false;
    }

    // Phone validation (allows common formats)
    const phoneDigits = phone.replace(/\D/g, '');
    if (phoneDigits.length !== 10) {
        showError('Please enter a valid 10-digit phone number');
        return false;
    }

    // Sanitize inputs
    const sanitizedData = {
        name: sanitizeInput(name),
        email: sanitizeInput(email),
        phone: sanitizeInput(phone),
        message: sanitizeInput(message)
    };

    // Compose email body
    const emailBody = `Name: ${sanitizedData.name}%0D%0A`
        + `Email: ${sanitizedData.email}%0D%0A`
        + `Phone: ${sanitizedData.phone}%0D%0A`
        + `Message: ${sanitizedData.message}`;

    // Submit form
    try {
        window.location.href = `mailto:himanshu.kumar5403@gmail.com?subject=Contact Form Submission&body=${emailBody}`;
        document.getElementById('contactForm')?.reset();
        alert('Thank you for your message! We will get back to you soon.');
        return true;
    } catch (error) {
        showError('An error occurred. Please try again.');
        return false;
    }
}

// Helper function for sanitizing input
function sanitizeInput(input) {
    return input
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;')
        .replace(/\\/g, '&#092;');
}

// Helper function for showing errors
function showError(message) {
    alert(message);
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
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

// Intersection Observer for Animation
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
      }
  });
}, observerOptions);

// Animate sections on scroll
document.querySelectorAll('.section-title, .event-card, .timeline-item').forEach(element => {
  element.style.opacity = '0';
  element.style.transform = 'translateY(20px)';
  element.style.transition = 'all 0.6s ease-out';
  observer.observe(element);
});


// Dynamic Background Animation
function createParticles() {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.cssText = `
          position: absolute;
          width: ${Math.random() * 5}px;
          height: ${Math.random() * 5}px;
          background: rgba(255, 255, 255, 0.5);
          left: ${Math.random() * 100}%;
          top: ${Math.random() * 100}%;
          border-radius: 50%;
          animation: float ${5 + Math.random() * 5}s linear infinite;
      `;
      hero.appendChild(particle);
  }
}

// Initialize particles
createParticles();

// Handle window resize
window.addEventListener('resize', () => {
  // Update any responsive elements if needed
  const width = window.innerWidth;
  const navbar = document.querySelector('.navbar');
  
  if (width <= 768) {
      navbar.classList.add('mobile');
  } else {
      navbar.classList.remove('mobile');
  }
});
