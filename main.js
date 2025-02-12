const menuIcon = document.querySelector(".menu-icon")
const navList = document.querySelector("ul");

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle("active");
    navList.classList.toggle("active");
    function toggleMenu() {
        document.querySelector(".nav-links").classList.toggle("active");
    }
})

    (function () {
        emailjs.init("L9BAqPWSHhojCZrPl"); // Ganti dengan User ID dari EmailJS
    })();

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah reload halaman

    emailjs.sendForm('service_ht9cggk', 'template_a3p1gur', this, 'L9BAqPWSHhojCZrPl')
        .then(function (response) {
            console.log("SUCCESS!", response);
            alert("Message sent successfully!");
        }, function (error) {
            console.log("FAILED...", error);
            alert("Failed to send message. Please try again.");
        });
});

window.addEventListener("scroll", function () {

    const content = document.querySelector(".content");


    if (window.scrollY > 50) {
        content.classList.add("blur-effect");
    } else {
        content.classList.remove("blur-effect");
    }
});



