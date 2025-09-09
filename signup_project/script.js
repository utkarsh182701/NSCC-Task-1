// --- Find the HTML elements we need ---
const signupForm = document.getElementById('signup-form');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const userDataBody = document.getElementById('user-data');

// --- Helper Function for Hashing ---
async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashedPassword = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashedPassword;
}

// --- Function to Display Users ---
function displayUsers() {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    userDataBody.innerHTML = '';
    users.forEach(user => {
        const row = document.createElement('tr');
        // Add a new cell for the delete button
        row.innerHTML = `
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>${user.password}</td>
            <td>
                <button class="delete-btn" data-email="${user.email}">Delete</button>
            </td>
        `;
        userDataBody.appendChild(row);
    });
}

// --- Event Listener for Form Submission ---
signupForm.addEventListener('submit', async function(event) {
    event.preventDefault();
    const username = usernameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    
    if (username === '') {
        alert('Username cannot be empty!');
        return;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert('Please enter a valid email address!');
        return;
    } else if (password.length < 6) {
        alert('Password must be at least 6 characters long!');
        return;
    }

    const hashedPassword = await hashPassword(password);
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if email already exists
    if (users.some(user => user.email === email)) {
        alert('This email is already registered!');
        return;
    }

    const newUser = {
        username: username,
        email: email,
        password: hashedPassword
    };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    alert('Signup successful!');
    signupForm.reset();
    displayUsers();
});

// --- Event Listener for Deleting Users ---
userDataBody.addEventListener('click', function(event) {
    // Check if a delete button was clicked
    if (event.target.classList.contains('delete-btn')) {
        const userEmailToDelete = event.target.dataset.email;
        let users = JSON.parse(localStorage.getItem('users')) || [];
        users = users.filter(user => user.email !== userEmailToDelete);
        localStorage.setItem('users', JSON.stringify(users));
        displayUsers();
    }
});

// --- Initial Display on Page Load ---
displayUsers();