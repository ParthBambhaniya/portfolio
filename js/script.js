const themeBtn = document.getElementById("themeBtn");

// Load saved theme
if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark-mode");
    themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
}

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
        localStorage.setItem("theme","dark");
    }else{
        themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
        localStorage.setItem("theme","light");
    }

});

// Scroll to Top Button

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function(){

    if(window.scrollY > 200){
        topBtn.style.display = "block";
    }else{
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", function(){

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});

// Scroll to Top Button End


document.getElementById("contactForm").addEventListener("submit", function(event){

    event.preventDefault();

    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    })
    .then(function () {
        alert("Message sent successfully!");
        document.getElementById("contactForm").reset();
    })
    .catch(function (error) {
        alert("Failed to send message.");
        console.log(error);
    });

});

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    alert("Message Sent Successfully!");

    this.reset();
});
