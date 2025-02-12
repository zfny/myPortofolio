const menuIcon= document.querySelector(".menu-icon")
const navList = document.querySelector("ul");

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle("active");
    navList.classList.toggle("active");
    function toggleMenu() {
        document.querySelector(".nav-links").classList.toggle("active");
    }
})
// Inisialisasi EmailJS dengan user ID Anda
emailjs.init('L9BAqPWSHhojCZrPl'); // Ganti dengan user ID Anda

document.getElementById("contact-form").addEventListener("submit", function(event){
    event.preventDefault(); // Menghentikan form dari reload halaman

    // Kirim email melalui EmailJS
    emailjs.sendForm('service_ht9cggk', 'template_a3p1gur', this, 'L9BAqPWSHhojCZrPl')
        .then(function(response) {
            console.log('Success!', response);
            alert("Message sent successfully!");
        }, function(error) {
            console.log('Failed...', error);
            alert("Failed to send message. Please try again.");
        });
});
