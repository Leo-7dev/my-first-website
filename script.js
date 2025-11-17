document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();
    let error = document.getElementById('error');

    if (name === '' || email === '' || message === '') {
        error.textContent = "Veuillez remplir tous les champs.";
    } else {
        error.textContent = "";
        alert("Message envoyé !");
        this.reset();
    }
});