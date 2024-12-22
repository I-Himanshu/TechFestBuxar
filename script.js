// Event Data
const events = [
  {
      title: 'Hackathon 2025',
      description: '24-hour coding challenge to solve real-world problems',
      category: 'technical',
      date: 'Jan 1, 2025',
      time: '2:00 PM'
  },
  {
      title: 'Robotics Workshop',
      description: 'Learn to build and program autonomous robots',
      category: 'workshop',
      date: 'Jan 1, 2025',
      time: '3:30 PM'
  },
  {
      title: 'Tech Talks',
      description: 'Industry experts share insights on emerging technologies',
      category: 'technical',
      date: 'Jan 1, 2025',
      time: '5:00 PM'
  },
  {
      title: 'Cultural Night',
      description: 'Enjoy performances and cultural activities',
      category: 'cultural',
      date: 'Jan 1, 2025',
      time: '7:00 PM'
  },
  {
      title: 'AI Workshop',
      description: 'Dive into the world of Artificial Intelligence and Machine Learning',
      category: 'workshop',
      date: 'Jan 1, 2025',
      time: '4:00 PM'
  },
  {
      title: 'Project Exhibition',
      description: 'Showcase of innovative student projects',
      category: 'technical',
      date: 'Jan 1, 2025',
      time: '6:00 PM'
  }
];

// Timeline Data
const timelineEvents = [
    {
        title: 'Grand Opening Ceremony',
        time: '9:00 AM',
        description: 'Join us for an inspiring inauguration with industry leaders and special guests.',
        category: 'main',
        speakers: ['Dr. Sarah Johnson', 'Prof. Michael Chen'],
        location: 'Main Auditorium'
    },
    {
        title: 'Hackathon Kickoff',
        time: '10:00 AM',
        description: '24-hour coding challenge begins! Form your teams and start building innovative solutions.',
        category: 'technical',
        prizes: ['₹50,000 First Prize', '₹30,000 Second Prize', '₹20,000 Third Prize'],
        location: 'Innovation Hub'
    },
    {
        title: 'AI & Machine Learning Workshop',
        time: '11:30 AM',
        description: 'Deep dive into neural networks and practical ML applications with industry experts.',
        category: 'workshop',
        prerequisites: ['Basic Python knowledge', 'Laptop required'],
        instructor: 'Dr. Alex Kumar',
        location: 'Workshop Hall A'
    },
    {
        title: 'Tech Talks: Future of Innovation',
        time: '2:00 PM',
        description: 'Leading tech experts share insights on emerging technologies and future trends.',
        category: 'technical',
        speakers: ['Rahul Sharma - Google', 'Priya Patel - Microsoft'],
        location: 'Conference Room'
    },
    {
        title: 'Robotics & IoT Workshop',
        time: '3:30 PM',
        description: 'Hands-on session with cutting-edge robotics and IoT devices. Build your own smart device!',
        category: 'workshop',
        materials: 'All equipment provided',
        instructor: 'Prof. David Wong',
        location: 'Robotics Lab'
    },
    {
        title: 'Project Exhibition',
        time: '5:00 PM',
        description: 'Showcase of innovative student projects and startup demonstrations.',
        category: 'technical',
        prizes: ['Best Innovation Award', 'People\'s Choice Award'],
        location: 'Exhibition Hall'
    },
    {
        title: 'Cultural Night & Awards',
        time: '7:00 PM',
        description: 'Celebrate with performances, award ceremony, and networking dinner.',
        category: 'cultural',
        highlights: ['Award Ceremony', 'Live Performances', 'Networking Dinner'],
        location: 'Main Auditorium'
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

// Generate Event Cards
const eventsGrid = document.querySelector('.events-grid');
const filterButtons = document.querySelectorAll('.filter-btn');

function generateEventCards(filterCategory = 'all') {
  eventsGrid.innerHTML = '';
  events.forEach(event => {
      if (filterCategory === 'all' || event.category === filterCategory) {
          const card = document.createElement('div');
          card.className = 'event-card';
          card.innerHTML = `
              <div class="event-image">
                  <img src="${event.image||'https://picsum.photos/200/300'}?random=${event.time}" alt="${event.title}">
              </div>
              <div class="event-content">
                  <h3 class="event-title">${event.title}</h3>
                  <p class="event-description">${event.description}</p>
                  <div class="event-meta">
                      <span class="event-category">${event.category}</span>
                      <span class="event-time">
                          <i class="far fa-clock"></i> ${event.time}
                      </span>
                  </div>
              </div>
          `;
          eventsGrid.appendChild(card);
      }
  });
}

// Event Filtering
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      generateEventCards(button.dataset.filter);
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

// Newsletter Form Handling
const footerSubscribe = document.querySelector('.footer-subscribe');
if (footerSubscribe) {
  footerSubscribe.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = footerSubscribe.querySelector('input[type="email"]').value;
      
      // Basic email validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email || !emailPattern.test(email)) {
          alert('Please enter a valid email address');
          return;
      }

      alert('Thank you for subscribing to our newsletter!');
      footerSubscribe.reset();
  });
}

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
