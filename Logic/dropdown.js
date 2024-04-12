// Dropdown menu
// Function to toggle dropdown menu
const toggleDropdown = function (event, dropdownId) {
    const dropdownMenu = document.getElementById(dropdownId);
    const toggleArrow = event.target.querySelector("#arrow");
// Toggle dropdown function
    dropdownMenu.classList.toggle("show");
    toggleArrow.classList.toggle("arrow");
};

//events for buttons
const handleButtonEvents = function () {
    document.querySelectorAll(".navbtn").forEach(function (btn) {
        btn.addEventListener("mouseenter", function (e) {
            e.stopPropagation();
            toggleDropdown(e, e.target.nextElementSibling.id);
        });

        btn.addEventListener("mouseleave", function (e) {
            e.stopPropagation();
            const relatedTarget = e.relatedTarget || e.toElement;
            const dropdownId = btn.nextElementSibling.id;
            const dropdownMenu = document.getElementById(dropdownId);
            const isCursorMovingToDropdown = dropdownMenu.contains(relatedTarget);

            if (!btn.contains(relatedTarget) && !isCursorMovingToDropdown) { // Check if the related target is not inside the button or the dropdown
                dropdownMenu.classList.remove("show");
                btn.querySelector("#arrow").classList.remove("arrow");
            }
        });
    });
};

// events for dropdown menus
const handleDropdownEvents = function () {
    document.querySelectorAll(".dropdown").forEach(function (dropdown) {
        dropdown.addEventListener("mouseenter", function (e) {
            e.stopPropagation();
        });

        dropdown.addEventListener("mouseleave", function (e) {
            e.stopPropagation();
            const relatedTarget = e.relatedTarget || e.toElement;
            if (!dropdown.contains(relatedTarget)) { // Check if the related target is not inside the dropdown list
                dropdown.classList.remove("show");
                dropdown.previousElementSibling.querySelector("#arrow").classList.remove("arrow");
            }
        });
    });
};

// Tab Animation
  let doctitle = document.title;
    window.addEventListener("blur", () => {  
        document.title = "Come back ☹️"
    })
    window.addEventListener("focus", () => {
        document.title = doctitle
    });

// Countdown  timer
    var  countDownDate = new Date("May  10, 2025 00:00:00").getTime();
    var x = setInterval (function() {     
    var now = new Date().getTime();
    var distance = countDownDate - now ;
    
    var  days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var  minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 *  60));
    var seconds = Math.floor(distance % (1000 * 60)  / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
  },1000);

// Redirect Paths
function Home(){window.location.href = "../index.html";}
function Licence(){window.location.href = "Licence.html";}
function Master(){window.location.href = "Master.html";}
function Contr(){window.location.href = "Contribution.html";}
function Contact(){window.location.href = "contact.html";}
function Feedback(){window.location.href = "feedback.html";}
function L1(){window.location.href = "L1.html";}
function L2(){window.location.href = "L2.html";}
function L3(){window.location.href = "L3.html";}
function Res(){window.location.href = "resources.html";}
