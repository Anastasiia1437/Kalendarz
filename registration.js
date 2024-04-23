import mysql from "mysql";

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'Baza_danych'
});

// Connect to the database
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to the database!');
});

// Get the button and form inputs
const button = document.querySelector('#submit-button');
const usernameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const repeatPasswordInput = document.querySelector('#repeat-password');

button.addEventListener('click', () => {
  const username = usernameInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;
  const repeatPassword = repeatPasswordInput.value;

  // Check if passwords match
  if (password != repeatPassword) {
    alert('Passwords do not match!');
    return;
  }

  // Check if the user already exists
  connection.query('SELECT * FROM uzytkownicy WHERE email = ?', [email], function (error, results, fields) {
    if (error) throw error;

    // If the user does not exist, insert the new user
    if (results.length === 0) {
      const user = { username: username, email: email, password: password };
      connection.query('INSERT INTO uzytkownicy SET ?', user, (err, res) => {
        if (err) throw err;
        console.log('User added to the database');
      });
    } else {
      console.log('User already exists');
    }
  });
});

// Close the connection
connection.end();