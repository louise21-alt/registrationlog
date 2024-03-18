// Function to check if the password meets the criteria
function checkPassword(password) {
    // Check if the password is less than 8 characters
    if (password.length < 8) {
        return false;
    }

    // Check if the password only consists of integers
    if (/^\d+$/.test(password)) {
        return false;
    }

    // Check if the password is not a combination of uppercase and lowercase characters
    if (!(password.match(/[a-z]/) && password.match(/[A-Z]/))) {
        return false;
    }

    // If the password meets all criteria
    return true;
}

// Variable to store registered users
const registeredUsers = [];

// Register form submission event listener
document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Getting the username and password from the registration form
    const username = document.getElementById('usernameReg').value;
    const password = document.getElementById('passwordReg').value;

    // Password validation
    if (!checkPassword(password)) {
        alert("Password must be at least 8 characters long, contain both uppercase and lowercase characters, and not consist only of integers.");
        return;
    }

    // Add the user to the list of registered users
    registeredUsers.push({ username, password });

    // Registration success message
    alert("Registration successful!");

    // Show the login form
    document.querySelector('.regForm').style.display = 'none';
    document.querySelector('.logForm').style.display = 'block';
});

// Login form submission event listener
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Getting the username and password from the login form
    const enteredUsername = document.getElementById('username').value;
    const enteredPassword = document.getElementById('password').value;

    // Check if entered credentials match any registered user
    const matchedUser = registeredUsers.find(user => user.username === enteredUsername && user.password === enteredPassword);

    if (matchedUser) {
        // Login successful
        alert("Login successful!");

        // Show the welcome panel
        document.querySelector('.welcomePanel').style.display = 'block';
        document.getElementById('greeting').innerHTML = "Welcome, " + matchedUser.username + "!";

    } else {
        // Invalid credentials
        alert("Invalid credentials. Please try to register again.");

        // Reset the login form
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';

        // Reset the registration form
        const registrationForm = document.getElementById('registrationForm');
        registrationForm.reset();

        // Show the registration form again
        document.querySelector('.regForm').style.display = 'block';
        document.querySelector('.logForm').style.display = 'none';
    }
});
