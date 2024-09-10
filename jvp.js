document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const schoolName = document.getElementById('school-name').value;
    const email = document.getElementById('email').value;
    alert(`Gracias por inscribirse, ${schoolName}! Nos pondremos en contacto a través del correo ${email}.`);
});
