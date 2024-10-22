// Theme Switching
function toggleTheme() {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Update theme switch icon
    const themeIcon = document.querySelector('.theme-switch i');
    themeIcon.className = newTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';

    // Apply theme colors to modal
    switchTheme(newTheme);
}

function switchTheme(theme) {
    const root = document.documentElement;
    if (theme === 'dark') {
        root.style.setProperty('--modal-bg-color', '#333');
        root.style.setProperty('--text-color', '#fff');
    } else {
        root.style.setProperty('--modal-bg-color', '#fff');
        root.style.setProperty('--text-color', '#000');
    }
}

document.querySelector('.theme-switch').addEventListener('click', toggleTheme);

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.body.setAttribute('data-theme', savedTheme);
    switchTheme(savedTheme);
    const themeIcon = document.querySelector('.theme-switch i');
    themeIcon.className = savedTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
});

// Signup Popup
const signupButton = document.getElementById('signup-button');
const signupPopup = document.getElementById('signup-popup');
const closePopupButton = document.querySelector('#signup-popup .close-popup'); // Ensure this selector matches your HTML
const signupForm = document.getElementById('signup-form');
const signupMessage = document.getElementById('signup-message');

signupButton.addEventListener('click', () => {
    signupPopup.style.display = 'flex';
});

closePopupButton.addEventListener('click', () => {
    signupPopup.style.display = 'none';
});

// Close popup when clicking outside the content
signupPopup.addEventListener('click', (e) => {
    if (e.target === signupPopup) {
        signupPopup.style.display = 'none';
    }
});

// Handle signup form submission
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    // Simple validation
    if (username && email && password) {
        // Store user data in localStorage
        const userData = {
            username: username,
            email: email,
            password: password // Note: In a real application, never store passwords in plain text
        };
        localStorage.setItem('userData', JSON.stringify(userData));

        // Display success message
        signupMessage.textContent = 'Sign up successful!';
        signupMessage.style.color = 'green';
        
        // Clear form fields
        signupForm.reset();

        // Close popup after a short delay
        setTimeout(() => {
            signupPopup.style.display = 'none';
            signupMessage.textContent = '';
        }, 2000);
    } else {
        // Display error message if fields are empty
        signupMessage.textContent = 'Please fill in all fields.';
        signupMessage.style.color = 'red';
    }
});

// Event Popup
const eventItems = document.querySelectorAll('.event-item');
const eventPopup = document.getElementById('eventPopup');
const popupEventTitle = document.getElementById('popupEventTitle');
const popupEventDate = document.getElementById('popupEventDate');
const popupEventDescription = document.getElementById('popupEventDescription');

eventItems.forEach(item => {
    item.addEventListener('click', () => {
        const title = item.getAttribute('data-title');
        const date = item.getAttribute('data-date');
        const description = item.getAttribute('data-description');
        
        popupEventTitle.textContent = title;
        popupEventDate.textContent = `Date: ${date}`;
        popupEventDescription.textContent = description;
        
        eventPopup.style.display = 'flex';
    });
});

document.querySelector('#eventPopup .close-popup').addEventListener('click', () => {
    eventPopup.style.display = 'none';
});

// Sports List - Load More functionality
const loadMoreBtn = document.querySelector('.load-more-btn');
let displayedSportsCount = 5;

const sports = [
    { name: "Football", image: "img/football.jpg", description: "Kick, sprint, and score—where every goal is pure magic, and the field is your stage for epic moments!" },
    { name: "Basketball", image: "img/basketball.jpg", description: "Bounce, dribble, and shoot your way to glory—where the court is your playground, and every dunk is a slammin' victory!" },
    { name: "Volleyball", image: "img/volleyball.jpg", description: "Bump, set, and spike—where every rally is a high-flying battle, and the court is your arena for fun!." },
    { name: "Tennis", image: "img/tennis.jpg", description: "Serve, volley, and ace your way to victory—where every match is a thrilling showdown, and the court is your stage!." },
    { name: "Badminton", image: "img/badminton.jpg", description: "Smash, swing, and soar—where the shuttle flies fast and the fun never drops!" },
    { name: "Table Tennis", image: "img/table_tennis.jpg", description: "Spin, smash, and rally—where the ball zips and the fun bounces non-stop across the table!" },
    { name: "8 Ball Pool", image: "img/8_ball_pool.jpg", description: "Break, aim, and sink your way to glory—where every shot is a chance to show off your skills, and the table is your battlefield!" },
    { name: "Foosball", image: "img/foosball.jpg", description: "Spin, shoot, and score—where tiny players kick big goals, and the fun never stops spinning!" },
    { name: "Carrom", image: "img/carrom.jpg", description: "Flick, aim, and pocket your way to victory—where every strike is slick, and the queen is the crown jewel!"},
    { name: "Chess", image: "img/chess.jpg", description: "Move, strategize, and checkmate your way to victory—where every move is a battle, and the board is your battlefield!"}
];

loadMoreBtn.addEventListener('click', () => {
    displayedSportsCount += 5;
    renderSports();
    if (displayedSportsCount >= sports.length) {
        loadMoreBtn.style.display = 'none';
    }
});

function renderSports() {
    const sportsList = document.getElementById('sports-list');
    sportsList.innerHTML = sports.slice(0, displayedSportsCount).map(sport => `
        <div class="sport-item">
            <img src="${sport.image}" alt="${sport.name}">
            <h3>${sport.name}</h3>
            <p>${sport.description}</p>
        </div>
    `).join('');
}

// Contact Form
const contactForm = document.getElementById('contact-form');
const contactConfirmationMessage = document.getElementById('contact-confirmation');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    const message = {
        username: formData.get('username'),
        email: formData.get('email'),
        message: formData.get('message')
    };
    
    // Simulating form submission (replace with actual submission logic)
    console.log('Form submitted:', message);
    
    contactConfirmationMessage.textContent = 'Message sent successfully!';
    contactConfirmationMessage.style.display = 'block';
    
    contactForm.reset();
    
    setTimeout(() => {
        contactConfirmationMessage.style.display = 'none';
        contactConfirmationMessage.textContent = '';
    }, 3000);
});

// User Preferences
const preferencesForm = document.getElementById('preferences-form');
const preferencesConfirmationMessage = document.getElementById('preferences-confirmation');

preferencesForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const favoriteSport = document.getElementById('favorite-sport').value;
    localStorage.setItem('favoriteSport', favoriteSport);
    
    preferencesConfirmationMessage.textContent = `Preferences saved! Your favorite sport is ${favoriteSport}.`;
    preferencesConfirmationMessage.style.display = 'block';
    
    setTimeout(() => {
        preferencesConfirmationMessage.style.display = 'none';
    }, 3000);
});

// Events data
const events = [
    {
        title: "National Kickboxing Championship",
        date: "2024-09-30",
        shortDescription: "Chitkara University's Somil Pathania Secures Silver at National Kickboxing Championship",
        fullDescription: "Chitkara University proudly celebrates the remarkable achievement of Somil Pathania, a third-year Computer Science Engineering (CSE) student, who won the Silver Medal in the 42 kg weight category at the prestigious National Kickboxing Championship (Men & Women) held in Dehradun, Uttarakhand. The championship attracted top-level competitors from across the country, making Somil’s achievement a testament to his exceptional skill, determination, and perseverance.",
        image: "img/event1.jpg" // Add the image path here
    },
    {
        title: "Badminton Tournament",
        date: "2024-09-29",
        shortDescription: "Shreya Wins Gold at Kampala International 2024 Badminton Tournament",
        fullDescription: "Shreya, a first-year BBA student at Chitkara University, has achieved a remarkable victory by securing the gold medal at the prestigious Kampala International 2024 Badminton Tournament, held in Kampala, Uganda. Her stellar performance in the tournament highlights her dedication, skill, and competitive spirit, marking a significant milestone in her burgeoning sports career.",
        image: "img/event2.jpg" // Add the image path here
    },
    {
        title: "WTT Youth Contender",
        date: "2024-09-26",
        shortDescription: "Suhana Saini Wins Gold at WTT Youth Contender in Saudi Arabia",
        fullDescription: "Suhana Saini, a third-year BBA student at Chitkara University, has brought immense pride to her institution and her country by winning a gold medal in the Under-19 Girls Singles event at the WTT Youth Contender in Dammam, Saudi Arabia. Suhana’s exceptional performance didn’t stop there, as she also secured a bronze medal in the mixed doubles category, solidifying her position as a rising star in international table tennis.",
        image: "img/event3.jpg" // Add the image path here
    }
];

// Render events
function renderEvents() {
    const eventsList = document.getElementById('events-list');
    eventsList.innerHTML = events.map((event, index) => `
        <div class="event-item" data-index="${index}">
            <img src="${event.image}" alt="${event.title}" class="event-image" />
            <h3>${event.title}</h3>
            <p>Date: ${event.date}</p>
            <p>${event.shortDescription}</p>
            <button class="view-details" data-index="${index}">View Details</button>
        </div>
    `).join('');

    // Add click event listeners to each "View Details" button
    document.querySelectorAll('.view-details').forEach(button => {
        button.addEventListener('click', (e) => {
            const index = e.target.getAttribute('data-index');
            showEventDetails(index);
        });
    });
}

// Show event details in modal
function showEventDetails(index) {
    const event = events[index];
    document.getElementById('eventDetailImage').src = event.image;
    document.getElementById('eventDetailTitle').textContent = event.title;
    document.getElementById('eventDetailDate').textContent = `Date: ${event.date}`;
    document.getElementById('eventDetailDescription').textContent = event.fullDescription;

    const modal = document.getElementById('eventDetailModal');
    const overlay = document.getElementById('eventDetailModal-overlay');
    overlay.classList.add('show');
    modal.classList.add('show');
}

// Close modal functionality
document.querySelector('.close-modal').addEventListener('click', () => {
    const modal = document.getElementById('eventDetailModal');
    const overlay = document.getElementById('eventDetailModal-overlay');
    modal.classList.remove('show');
    overlay.classList.remove('show');
});

// Close modal when clicking outside of the modal content
window.addEventListener('click', (event) => {
    const modal = document.getElementById('eventDetailModal');
    const overlay = document.getElementById('eventDetailModal-overlay');
    if (event.target === overlay) {
        modal.classList.remove('show');
        overlay.classList.remove('show');
    }
});

// Load saved preferences and initialize page
function initializePage() {
    const savedSport = localStorage.getItem('favoriteSport');
    if (savedSport) {
        document.getElementById('favorite-sport').value = savedSport;
    }
    
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.body.setAttribute('data-theme', savedTheme);
    const themeIcon = document.querySelector('.theme-switch i');
    themeIcon.className = savedTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    
    renderSports();
    renderEvents();

    // Initialize preferences
    initializePreferences();
}

document.addEventListener('DOMContentLoaded', initializePage);

// Improve scroll animations
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        if (rect.top <= windowHeight * 0.75) {
            el.classList.add('active');
        }
    });
}

window.addEventListener('scroll', handleScrollAnimations);
window.addEventListener('load', handleScrollAnimations);

// Mobile menu toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

mobileMenuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

function initializePreferences() {
    const preferencesForm = document.getElementById('preferences-form');
    const favoriteSportSelect = document.getElementById('favorite-sport');
    const preferencesConfirmationMessage = document.getElementById('preferences-confirmation');
    const savedSport = localStorage.getItem('favoriteSport');

    // Set the saved preference if it exists
    if (savedSport) {
        favoriteSportSelect.value = savedSport;
    }

    // Add event listener for form submission
    preferencesForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const selectedSport = favoriteSportSelect.value;
        
        // Save the preference
        localStorage.setItem('favoriteSport', selectedSport);

        // Show confirmation message
        preferencesConfirmationMessage.textContent = `Preferences saved! Your favorite sport is ${selectedSport}.`;
        preferencesConfirmationMessage.style.display = 'block';
        preferencesConfirmationMessage.classList.add('preferences-saved');

        // Hide the message after 3 seconds
        setTimeout(() => {
            preferencesConfirmationMessage.style.display = 'none';
            preferencesConfirmationMessage.classList.remove('preferences-saved');
        }, 3000);
    });

    // Add event listener for select change
    favoriteSportSelect.addEventListener('change', () => {
        preferencesForm.dispatchEvent(new Event('submit'));
    });
}

document.querySelector('.load-more-btn').addEventListener('click', () => {
    // Logic to load more sports items
    console.log('Load more sports clicked');
    // Example: Fetch more items and append to the sports grid
});
