// External JavaScript

// Example AJAX request
$.ajax({
    url: 'data.json',
    dataType: 'json',
    success: function (data) {
        console.log(data);
    },
    error: function (error) {
        console.error('Error fetching data:', error);
    }
});

// Example using variables and if statement
let isAdmin = false;

if (isAdmin) {
    console.log('You are an admin.');
} else {
    console.log('You are not an admin.');
}

// Example using a function
function greet(name) {
    console.log('Hello, ' + name + '!');
}

greet('John');


// Example form validation using regular expressions
$('#loginForm').submit(function (event) {
    event.preventDefault();

    let username = $('#username').val();
    let password = $('#password').val();

    // Implement your own validation logic here
    if (username == "Admin" && password == "password") {
        console.log('Login successful');
        alert("Welcome " + username);
    } else {
        console.log('Invalid username or password');
        alert("Invalid User Name or Password!");
    }
});

$('#signupForm').submit(function (event) {
    event.preventDefault();

    let newUsername = $('#newUsername').val();
    let newPassword = $('#newPassword').val();
    let confirmPassword = $('#confirmPassword').val();

    // Implement your own validation logic here

    if (newPassword != confirmPassword) {
        alert("Password doesn't much!");
    }
    else if (isStrongPassword(newPassword) && newPassword === confirmPassword) {
        console.log('Signup successful');
        alert("Welcome, " + newUsername + "! you successfully signed up")
    }
    else {
        console.log('Invalid registration information');
        alert("Invalid credentials")
    }
});

function isStrongPassword(password) {
    // At least 8 characters long, with at least one uppercase letter, one lowercase letter, and one special character
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+<>?/]).{8,}$/;

    return strongPasswordRegex.test(password);
}

