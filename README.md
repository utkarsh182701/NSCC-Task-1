# NSCC-Task-1
User Signup and Dashboard Application
This is a complete front-end web application for user registration, built with vanilla HTML, CSS, and JavaScript. This project features form validation, secure password hashing, and persistent data storage using the browser's localStorage. The user interface is designed to be clean, modern, and fully responsive.

Live Demo Link: https://nscctask.netlify.app

Key Features:-

User Signup Form: A clean and intuitive form for new user registration.

Comprehensive Input Validation:

Username: Cannot be empty.

Email: Must be in a valid format (checked with Regex).

Password: Must be at least 6 characters long.

Secure Password Hashing: Passwords are never stored as plain text. They are securely hashed on the client-side using the SHA-256 algorithm via the Web Crypto API before being stored.

Persistent Data Storage: User data is saved in the browser's localStorage, ensuring that registered users are remembered even after the browser is closed.

Dynamic User Dashboard: All registered users are displayed in a clean, real-time table. The dashboard updates instantly as new users are added or removed.

Delete Functionality: Users can be removed from the dashboard and localStorage with a single click.

Technologies Used:-

HTML5: For the core structure and content of the application.

CSS3: For all styling, layout, and responsiveness. Modern features like Flexbox and clip-path were used to create a professional, pixel-perfect design.

JavaScript (ES6+): For all application logic, including:

DOM Manipulation

Event Handling & Event Delegation

Client-side Validation

Web Crypto API for hashing

localStorage for data persistence

How to Run Locally:-

Clone or download the project folder.

Open the index.html file in any modern web browser.

No special setup or dependencies are required. The entire application runs on the front-end.

File Structure

/SIGNUP_PROJECT
├── index.html         // The main HTML file with the page structure.
├── aesthetics.css     // The CSS file for all styling and layout.
└── script.js          // The JavaScript file containing all application logic.


Thankyou for reading all the details.
PS: This project was made by using the major help of Google Gemini (AI agent).


