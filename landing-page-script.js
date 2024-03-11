

function togglePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = (popup.style.display === "block") ? "none" : "block";
}

function submitForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    // You can handle the form submission here, for now, let's just display a message
    alert("Thank you, " + name + "! You have successfully signed up with email: " + email);
    
    // Reset the form fields and hide the popup
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("popup").style.display = "none";
}


$(document).ready(function() {
    var typingText = "Welcome to HelloFresh Chef's Table Experience!";
    var typingSpeed = 50; // Adjust typing speed (in milliseconds)
    var eraseSpeed = 30; // Adjust erase speed (in milliseconds)
    var pauseTime = 2000; // Adjust pause time between phrases (in milliseconds)
    var aboutText = "Indulge in an unforgettable culinary journey with HelloFresh Chef's Table Experience Subscription. Discover exclusive menus curated by our renowned chefs and elevate your dining experience.";

    function typeWriter(text, index, typingSpeed) {
        if (index < text.length) {
            $('.typing-text').text($('.typing-text').text() + text.charAt(index));
            index++;
            setTimeout(function() {
                typeWriter(text, index, typingSpeed);
            }, typingSpeed);
        } else {
            setTimeout(function() {
                eraseText(text, typingSpeed);
            }, pauseTime);
        }
    }

    function eraseText(text, typingSpeed) {
        var length = $('.typing-text').text().length;
        if (length > 0) {
            $('.typing-text').text($('.typing-text').text().slice(0, -1));
            setTimeout(function() {
                eraseText(text, typingSpeed);
            }, eraseSpeed);
        } else {
            $('.typing-text').text('');
            setTimeout(function() {
                typeWriter(text, 0, typingSpeed);
            }, typingSpeed);
        }
    }

    typeWriter(typingText, 0, typingSpeed);
    $('.about-paragraph').text(aboutText);
});