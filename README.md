User Signup and Dashboard Application
A complete front-end web application for user registration, built with vanilla HTML, CSS, and JavaScript. This project features form validation, secure password hashing, and persistent data storage. The application has been deployed and is accessible via a live link.

Live link : https://nscctask.netlify.app

Project Demo

Here is a screenshot of the final application interface:


<img width="1280" height="721" alt="Screenshot 2025-09-10 at 02 45 49" src="https://github.com/user-attachments/assets/673678ac-bfca-4f2b-bd36-315f0b36d4ec" />



<!--
INSTRUCTIONS:

Take a screenshot of your beautiful application.

Create a new folder named screenshots inside your SIGNUP_PROJECT folder.

Place your screenshot inside that folder (e.g., name it demo.png).

Replace the placeholder below with your actual screenshot path.
-->

Key Features

Modern User Interface: A clean, professional, and fully responsive UI designed to match the provided project aesthetics.

Comprehensive Input Validation:

Username: Cannot be empty.

Email: Must be in a valid format (checked with Regex).

Password: Must be at least 6 characters long.

Secure Password Hashing: Passwords are never stored as plain text. They are securely hashed on the client-side using the SHA-256 algorithm via the Web Crypto API.

Persistent Data Storage: User data is saved in the browser's localStorage, ensuring that registered users are remembered even after the browser is closed.

Dynamic User Dashboard: All registered users are displayed in a real-time table that updates instantly as new users are added or removed.

Delete Functionality: Users can be removed from the dashboard and localStorage with a single click.

Technologies Used

HTML5: For the core structure and content.

CSS3: For all styling, layout, and responsiveness, using modern features like Flexbox and clip-path.

JavaScript (ES6+): For all application logic, including DOM manipulation, client-side validation, the Web Crypto API, and localStorage.

Environment Setup

This is a purely front-end application with no complex dependencies. All you need to run it is:

A modern web browser (e.g., Google Chrome, Firefox, Safari).

A code editor (e.g., VS Code) to view the source code.

Project Structure

/SIGNUP_PROJECT
├── index.html         // The main HTML file for structure.
├── aesthetics.css     // The CSS file for all styling.
├── script.js          // The JavaScript file for all functionality.
└── README.md          // This documentation file.

