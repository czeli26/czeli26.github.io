document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector("nav ul");
    const navLinks = document.querySelectorAll("nav ul li a");
    const contactForm = document.getElementById("contact-form");

    // Hamburger Menu Functionality
    hamburger.addEventListener("click", function () {
        if (!navMenu.classList.contains("active")) {
            navMenu.classList.add("active");
        }
    });

    // Toggle menu when clicking the hamburger icon
    hamburger.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevent click from triggering document event
        navMenu.classList.toggle("active");
    });

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            navMenu.classList.remove("active");
        });
    });

    // Close menu when clicking outside of it
    document.addEventListener("click", function (event) {
        if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
            navMenu.classList.remove("active");
        }
    });

    // Contact Form Submission with EmailJS
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent default form submission

            emailjs.sendForm("service_4d2ol7n", "template_65tkaqp", contactForm, "G4G29PKiWmWM74bNL")
                .then(function () {
                    alert("Message sent successfully!");
                    contactForm.reset();
                })
                .catch(function (error) {
                    alert("Failed to send message. Please try again later.");
                    console.error("EmailJS Error:", error);
                });
        });
    }
});
