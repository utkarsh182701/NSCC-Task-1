NSCC SRM IST - Recruitment Tasks
This repository contains the completed technical tasks for the Newton School Coding Club recruitment process. Both projects are built with vanilla HTML, CSS, and JavaScript, demonstrating a strong understanding of front-end development fundamentals.

Task 1: Signup Form & Dashboard
A fully functional, single-page application for user signup, input validation, and data management. The application securely handles user data and displays it in a clean, interactive dashboard.

🚀 Deployed Link

Live Site: https://nscctask.netlify.app

✨ Key Features

Client-Side Validation: Ensures that username, email, and password fields meet specific criteria before submission.

Secure Password Hashing: Uses the browser's built-in Web Crypto API (SHA-256) to hash passwords before storing them, ensuring user data is never stored as plain text.

Persistent Data Storage: Leverages localStorage to save user data, so it persists even after the browser is closed.

Dynamic Dashboard: All registered users are displayed in a clean, real-time table.

Delete Functionality: Includes a "delete" button for each user to remove their entry from storage, demonstrating DOM manipulation and data management.

🛠️ Tech Stack

HTML5

CSS3 (with a focus on modern, clean aesthetics)

JavaScript (ES6+)

Web Crypto API

📸 Project Demo

A preview of the application's user interface.
<img width="1116" height="722" alt="Screenshot 2025-09-12 at 00 02 17" src="https://github.com/user-attachments/assets/dd1e6a8c-7707-4800-9572-79b4fc6a6f6d" />



Task 2: Interactive Quiz App
An engaging, feature-rich quiz application that fetches questions from an external source and provides a polished user experience with animations and interactive elements.

🚀 Deployed Link

Live Site: https://nscctask2byme.netlify.app/

✨ Key Features

External Question Bank: Loads a large pool of questions from an external questions.json file using the fetch() API, simulating a real-world backend.

Randomized Questions: Shuffles the question bank and presents a random set of 5 questions each time the quiz is taken.

Full Quiz Functionality: Includes "Next," "Back," and "Re-test" buttons for a complete user experience.

Polished UI/UX: Features smooth fade-in/fade-out animations, interactive button hover effects, and a progress tracker.

High Score System: Saves the user's highest score to localStorage, encouraging replayability.

Detailed Results: Shows a full breakdown of correct and incorrect answers with clear visual icons.

🛠️ Tech Stack

HTML5

CSS3 (Flexbox, Advanced Animations, Pseudo-elements)

JavaScript (ES6+)

JSON

Fetch API

📸 Project Demo

A preview of the interactive quiz in action.
<img width="915" height="631" alt="Screenshot 2025-09-12 at 00 03 17" src="https://github.com/user-attachments/assets/7515ed66-5eb3-4902-bea4-127105624310" />

<img width="903" height="604" alt="Screenshot 2025-09-12 at 00 03 32" src="https://github.com/user-attachme<img width="722" height="725" alt="Screenshot 2025-09-12 at 00 03 45" src="https://github.com/user-attachments/assets/cf3dbaa2-069e-4e8b-8dc9-17243f4899d2" />
nts/assets/5dca7d3a-defa-466f-b61d-aeaa20feec5e" />





Environment Setup & Deployment

Running Locally

Ensure you have the Live Server extension installed in VS Code.

Right-click on the index.html file within either project folder (signup-project or quiz-app).

Select "Open with Live Server."

Deployment

Both projects were deployed using Netlify Drop, providing a live, shareable URL for easy access and review.

