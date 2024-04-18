const fs = require('fs');

// Pobierz dane z formularza
const username = document.querySelector('#username').value;
const email = document.querySelector('#email').value;
const password = document.querySelector('#password').value;

// Utwórz obiekt z danymi
const data = {
    username: username,
    email: email,
    password: password
};

// Przekonwertuj obiekt na format JSON
const jsonData = JSON.stringify(data);

// Zapisz dane do pliku
fs.writeFile('baza.json', jsonData, (err) => {
    if (err) {
        allert.error('Wystąpił błąd:', err);
    } else {
        allert.log('Dane zostały zapisane, możesz się zalogować');
    }
});