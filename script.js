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
      title: 'Opening Ceremony',
      time: '2:00 PM',
      description: 'Inauguration of TechFest Buxar 2025'
  },
  {
      title: 'Hackathon Kickoff',
      time: '2:30 PM',
      description: 'Begin your 24-hour coding journey'
  },
  {
      title: 'Robotics Workshop',
      time: '3:30 PM',
      description: 'Hands-on session with robotics'
  },
  {
      title: 'AI Workshop',
      time: '4:00 PM',
      description: 'Exploring AI and ML concepts'
  },
  {
      title: 'Tech Talks',
      time: '5:00 PM',
      description: 'Industry expert presentations'
  },
  {
      title: 'Project Exhibition',
      time: '6:00 PM',
      description: 'Student innovation showcase'
  },
  {
      title: 'Cultural Night',
      time: '7:00 PM',
      description: 'Entertainment and performances'
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
  const eventDate = new Date('2025-01-01T14:00:00').getTime();
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
                  <img src="https://picsum.photos/200/300?random=${event.time}" alt="${event.title}">
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
  timelineItem.innerHTML = `
      <h3>${event.title}</h3>
      <p class="time"><i class="far fa-clock"></i> ${event.time}</p>
      <p>${event.description}</p>
  `;
  timelineContainer.appendChild(timelineItem);
});

// Form Handling
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  validateForm();
});

function validateForm() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;

  // Basic validation
  if (!name || !email || !phone || !message) {
      alert('Please fill in all fields');
      return false;
  }

  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
      alert('Please enter a valid email address');
      return false;
  }

  // Phone validation
  const phonePattern = /^\d{10}$/;
  if (!phonePattern.test(phone.replace(/\D/g, ''))) {
      alert('Please enter a valid 10-digit phone number');
      return false;
  }

  // If validation passes, you can submit the form
  alert('Thank you for your message! We will get back to you soon.');
  contactForm.reset();
  return true;
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
