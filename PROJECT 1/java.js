const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstPageAnimation() {
    var tl = gsap.timeline();

    tl.from('#nav', {
        y: '-10',
        opacity: 0,
        duration: 1.2,
        ease: Expo.easeInout

    })
        .to('.boundingelem ', {
            y: '0',

            duration: 1.5,
            ease: Expo.easeInout,
            delay: -1,
            stagger: .2
            // with help of stagger every elment have spcific time
            // like fifo

            // to is it take Element form its current position and move to  new position
            // from is it take Element form spcific position and move to  its current position

        })
        .from('#herofooter', {
            y: '-10',
            opacity: 0,
            duration: 1.2,
            delay: -1,
            ease: Expo.easeInout

        })
}

function smallCircle() {
    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;
    window.addEventListener("mousemove", function (dets) {
        // clearTimeout(timeout)

        xprev = dets.clientX;
        yprev = dets.clientY;

        xscale = gsap.utils.clamp(.8, 1.2, dets.clientX - xprev)
        yscale = gsap.utils.clamp(.8, 1.2, dets.clientY - yprev)

        circleMouse(xscale, yscale)

        // timeout = setTimeout(function () {
        //     document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(1,  1)`;
        // }, 100)
    });
}

function circleMouse(xscale, yscale) {
    window.addEventListener("mousemove", function (dets) {
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(${xscale},${yscale})`;
    })
}
circleMouse();
firstPageAnimation()
smallCircle()



document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;

    elem.addEventListener("mouseleave", function (dets) {
        gsap.to(elem.querySelector("img"), {
            opacity: 0,
            ease: Power3,
            duration: 0.5,
        });
    });

    elem.addEventListener("mousemove", function (dets) {
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
    });
});


// foreach = teeno pr ek ek br function chelega
// or vo teeno elem hai

// power = like speed controls

// // getBoundingClientRect = getBoundingClientRect() is 
// a method that returns a 
// DOMRect object, providing 
// information about an element's size and position in 
// the viewport. It returns an object with properties such 
// as x, y, width, height, top, right, bottom, and left. 
// This method is useful for checking element visibility, 
// calculating positions, and determining element sizes.




// var diff = dets.clientY - elem.getBoundingClientRect().top;

// meaning of this line  

//  1.   dets.clientY returns the vertical position of the mouse cursor relative to the viewport.

// 2.   elem.getBoundingClientRect().top returns the vertical position of the top edge of the HTML element (elem) relative to the viewport.

// 3.   The difference between these two values is calculated and stored in the diff variable.
