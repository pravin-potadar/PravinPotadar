function sendWhatsAppMessage() {
    // Collect form data
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    // Create the WhatsApp message
    var whatsappMessage = `Name: ${name}%0AEmail: ${email}%0ASubject: ${subject}%0AMessage: ${message}`;

    // WhatsApp URL with prefilled message
    var whatsappURL = `https://wa.me/7558765703?text=${whatsappMessage}`;

    // Open WhatsApp with the message
    window.open(whatsappURL, '_blank');
}