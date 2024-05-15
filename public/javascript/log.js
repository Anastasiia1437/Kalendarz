function openRegistrationPage() {
    window.open("registration.html", "_blank");
}
document.getElementById('Zaloguj').addEventListener('click', function(event) {
    event.preventDefault(); // Zapobiega domyślnej akcji formularza, czyli odświeżeniu strony

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Wysyłanie danych do serwera
    fetch('baza.json', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: username, password: password }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Zalogowano pomyślnie
            console.log('Zalogowano pomyślnie');
        } else {
            // Błędne dane logowania
            console.log('Błędne dane logowania');
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});