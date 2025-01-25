
document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;

    // Handle mouse events
    elem.addEventListener("mouseleave", function () {
        gsap.to(elem.querySelector("img"), {
            opacity: 0,
            ease: Power3,
            duration: 0.5,
        });
    });

    elem.addEventListener("mousemove", function (dets) {
        handleAnimation(dets, elem);
    });

    // Handle touch events
    elem.addEventListener("touchstart", function (dets) {
        var touch = dets.touches[0];
        handleAnimation(touch, elem);
    });

    elem.addEventListener("touchmove", function (dets) {
        var touch = dets.touches[0];
        handleAnimation(touch, elem);
    });

    elem.addEventListener("touchend", function () {
        gsap.to(elem.querySelector("img"), {
            opacity: 0,
            ease: Power3,
            duration: 0.5,
        });
    });

    // Function to handle animation
    function handleAnimation(dets, elem) {
        var diff = dets.clientY - elem.getBoundingClientRect().top;
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;

        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: Power3,
            top: diff,
            left: dets.clientX,
            rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
        });
    }
});





// // foreach = teeno pr ek ek br function chelega
// // or vo teeno elem hai

// // power = like speed controls

// // // getBoundingClientRect = getBoundingClientRect() is 
// // a method that returns a 
// // DOMRect object, providing 
// // information about an element's size and position in 
// // the viewport. It returns an object with properties such 
// // as x, y, width, height, top, right, bottom, and left. 
// // This method is useful for checking element visibility, 
// // calculating positions, and determining element sizes.




// // var diff = dets.clientY - elem.getBoundingClientRect().top;

// // meaning of this line  

// //  1.   dets.clientY returns the vertical position of the mouse cursor relative to the viewport.

// // 2.   elem.getBoundingClientRect().top returns the vertical position of the top edge of the HTML element (elem) relative to the viewport.

// // 3.   The difference between these two values is calculated and stored in the diff variable.

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


const inputBox = document.getElementById("inputBox");
const listfive = document.getElementById("listfive");

function addTask() {
    const inputBox = document.getElementById('inputBox');
    const list = document.getElementById('listfive');
    const maxQuestions = 5;


    if (inputBox.value.trim() !== "") {

        if (list.getElementsByTagName('li').length < maxQuestions) {

            const li = document.createElement('li');
            li.textContent = inputBox.value;


            list.appendChild(li);
            let span = document.createElement("span");
            span.innerHTML = "\u00d7";
            li.appendChild(span);

            inputBox.value = "";
        } else {

            alert("You have reached the maximum number of questions (5).");
        }
    } else {

        alert("Please enter a question before submitting.");
    }
}

listfive.addEventListener("click", function (e) {

    if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();

    }
}, false)




let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = (event) => {
    event.preventDefault(); // Prevent default behavior
    navbar.classList.toggle('open'); // Toggle navbar visibility

    // Toggle the close icon (✕)
    if (navbar.classList.contains('open')) {
        menu.textContent = '✕'; // Show close icon
    } else {
        menu.textContent = '☰'; // Show hamburger icon (optional)
    }
}


// The trim() method in JavaScript is used to remove whitespace (spaces, tabs, and newlines)
// from both the beginning and end of a string.

// const input = "   Hello, World!   ";
// console.log(input.trim()); // Output: "Hello, World!"



