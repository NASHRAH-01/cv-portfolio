// =========================================
// THEME TOGGLE - WORKING VERSION
// =========================================
const themeToggle = document.getElementById('themeToggle');

// Check for saved theme or default to light
const savedTheme = localStorage.getItem('theme') || 'light';
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// =========================================
// MOBILE NAVIGATION
// =========================================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking on links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// =========================================
// SMOOTH SCROLL
// =========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// =========================================
// ACTIVE NAVIGATION ON SCROLL
// =========================================
const sections = document.querySelectorAll('section[id]');

function highlightNav() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightNav);

// =========================================
// NAVBAR SCROLL EFFECT
// =========================================
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// =========================================
// TYPING ANIMATION
// =========================================
const typingText = document.querySelector('.typing-text');
const words = [
    'Game Developer 🎮',
    'AI Enthusiast 🤖',
    'Problem Solver 🧩',
    'Creative Coder 💻',
    'Tech Explorer 🚀'
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }
    
    let typeSpeed = isDeleting ? 50 : 100;
    
    if (!isDeleting && charIndex === currentWord.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500;
    }
    
    setTimeout(typeEffect, typeSpeed);
}

// Start typing effect after page load
setTimeout(typeEffect, 1000);

// =========================================
// SCROLL ANIMATIONS
// =========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for scroll animation
document.querySelectorAll('.project-card, .stat-box, .skill-item, .contact-method').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// =========================================
// DOWNLOAD CV
// =========================================
document.getElementById('downloadCV').addEventListener('click', () => {
    const cvContent = `NASHRAH NAYAB UMAR
Computer Science Student | Developer | AI Enthusiast
===============================================================

CONTACT INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📧 Email: nayab76@gmail.com
📱 Phone: +92 328 6382911
💻 GitHub: github.com/Nashrah98
📍 Location: Lahore, Pakistan

===============================================================
PROFESSIONAL SUMMARY
===============================================================

Passionate Computer Science undergraduate at FAST-NUCES with 
expertise in game development, system design, and AI applications.
Demonstrated ability to build innovative solutions from concept to
deployment. Strong problem-solving skills combined with creative
coding abilities. Active contributor to tech community through
programming competitions and hackathons.

===============================================================
EDUCATION
===============================================================

Bachelor of Science in Computer Science
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
National University of Computer & Emerging Sciences (FAST-NUCES)
Lahore, Pakistan | 2022 - 2024 (Expected)

• Focus Areas: Artificial Intelligence, Software Development,
  Data Structures & Algorithms
• Relevant Coursework: AI & Machine Learning, Computer Vision,
  Object-Oriented Programming, Database Systems, Game Development

Intermediate in Computer Science (ICS - Physics Group)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Punjab College for Women Scientists, Lahore
2020 - 2022

Matriculation (Science Group)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Government Islamia Girls High School, Lahore
2018 - 2020

===============================================================
TECHNICAL SKILLS
===============================================================

Programming Languages
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Python (Advanced)          • C++ (Advanced)
• C# (Intermediate)          • JavaScript (Intermediate)
• HTML/CSS (Intermediate)    • Assembly (Beginner)

Technologies & Frameworks
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• SFML (Game Development)    • OpenCV (Computer Vision)
• Git/GitHub                 • SQL (Database Management)
• Windows Forms              • Visual Studio

Core Competencies
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Object-Oriented Programming (OOP)
• Data Structures & Algorithms
• Game Development & Design
• Computer Vision & Image Processing
• System Design & Architecture
• Problem Solving & Debugging

===============================================================
PROJECTS
===============================================================

Zakat Management System
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Technologies: C#, Windows Forms, SQL Database
• Developed comprehensive Islamic charity distribution platform
• Implemented dynamic contact management system
• Created automated calculation workflows
• Designed data persistence and retrieval mechanisms
• Built intuitive user interface for easy navigation

Pseudo Colorization Application
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Technologies: Python, OpenCV, Computer Vision
• Implemented AI-powered image colorization algorithms
• Developed grayscale to color transformation system
• Applied multiple color mapping techniques
• Optimized image processing pipeline for performance

Snake Game
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Technologies: C++, SFML Graphics Library
• Created classic Snake game with modern graphics
• Implemented smooth collision detection system
• Developed score tracking and leaderboard
• Optimized game loop for consistent performance

Tetris Game
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Technologies: C++, SFML Graphics Library
• Built full-featured Tetris implementation
• Created piece rotation mechanics
• Implemented line clearing algorithm
• Designed progressive difficulty system

Online Examination System
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Technologies: C++, SFML, Database
• Developed GUI-based examination platform
• Implemented student registration system
• Created automated grading mechanism
• Built timed assessment functionality
• Designed comprehensive result evaluation system

Phone Book Management System
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Technologies: C++, Data Structures, File I/O
• Built dynamic contact management system
• Implemented CRUD operations
• Developed efficient search algorithms
• Created data persistence mechanism

Hangman Game
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Technologies: C++, SFML Graphics Library
• Created interactive word-guessing game
• Implemented visual feedback system
• Designed multiple difficulty levels
• Built score tracking functionality

CatchAlphabets Assembly Game
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Technologies: Assembly Language, DOS/BIOS
• Developed educational game using low-level programming
• Implemented interrupt-based mechanics
• Created timing systems
• Built collision detection from scratch

===============================================================
EXPERIENCE & ACTIVITIES
===============================================================

Programming Competition Officer
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SOFTEC, FAST-NUCES | 2023 - Present
• Organize programming competitions at one of Pakistan's
  premier technology festivals
• Manage competition logistics and coordinate with participants
• Develop problem sets and judging criteria
• Engage with student developers and tech community

Hackathon Participant
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
University of Lahore | 2023
• Participated in Pakistan's largest student hackathon
• Collaborated with cross-functional teams
• Developed innovative solutions under time constraints
• Presented technical projects to judges

===============================================================
SOFT SKILLS
===============================================================

• Problem Solving & Analytical Thinking
• Team Collaboration & Leadership
• Effective Communication (Written & Verbal)
• Attention to Detail
• Quick Learning & Adaptability
• Time Management
• Creative & Innovative Thinking
• Project Management

===============================================================
LANGUAGES
===============================================================

• English (Fluent - Professional Working Proficiency)
• Urdu (Fluent - Native Language)
• Punjabi (Working Proficiency)

===============================================================
INTERESTS & HOBBIES
===============================================================

• Artificial Intelligence & Machine Learning
• Game Development & Design
• Computer Vision Applications
• Open Source Contribution
• Tech Community Building
• Competitive Programming
• Reading Tech Blogs & Research Papers
• Mentoring Fellow Students

===============================================================

REFERENCES AVAILABLE UPON REQUEST

Last Updated: February 2024
Generated from Portfolio Website
https://github.com/Nashrah98

===============================================================`;

    const blob = new Blob([cvContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Nashrah_Nayab_Umar_Resume.txt';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
    
    // Show success message
    showNotification('Resume downloaded successfully! 💜');
});

// =========================================
// CONTACT FORM
// =========================================
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Show success message
    showNotification(`Thanks for reaching out, ${name}! I'll get back to you at ${email} soon! 💌`);
    
    // Reset form
    e.target.reset();
});

// =========================================
// NOTIFICATION SYSTEM
// =========================================
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <div style="
            position: fixed;
            top: 100px;
            right: 24px;
            background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%);
            color: white;
            padding: 16px 24px;
            border-radius: 12px;
            box-shadow: 0 10px 40px rgba(139, 92, 246, 0.4);
            z-index: 10000;
            animation: slideInRight 0.3s ease;
            font-weight: 500;
        ">
            ${message}
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add notification animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// =========================================
// PARALLAX EFFECT FOR BLOBS
// =========================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const blobs = document.querySelectorAll('.blob');
    
    blobs.forEach((blob, index) => {
        const speed = 0.3 + (index * 0.15);
        blob.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// =========================================
// CHARACTER INTERACTION
// =========================================
const character = document.querySelector('.character');
if (character) {
    character.addEventListener('click', () => {
        character.style.animation = 'bounce 0.5s ease';
        setTimeout(() => {
            character.style.animation = '';
        }, 500);
    });
}

// Add bounce animation
const bounceStyle = document.createElement('style');
bounceStyle.textContent = `
    @keyframes bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-20px); }
    }
`;
document.head.appendChild(bounceStyle);

// =========================================
// CONSOLE MESSAGE
// =========================================
console.log('%c👋 Hey there, fellow developer!', 'color: #8b5cf6; font-size: 24px; font-weight: bold;');
console.log('%c💜 Thanks for checking out my portfolio!', 'color: #ec4899; font-size: 16px;');
console.log('%cBuilt with love by Nashrah Nayab Umar ✨', 'color: #6b7280; font-size: 14px;');

// =========================================
// INITIALIZE
// =========================================
console.log('✨ Portfolio loaded successfully!');