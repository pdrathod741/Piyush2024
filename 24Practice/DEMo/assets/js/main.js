function myFunction(x) {
  x.classList.toggle("fa-xmark");
}


// horizantal

let scroll_tl = gsap.timeline({
  scrollTrigger: {
      trigger: '.factsContainer',
      start: "top center",
      // pin: true,
      scrub: true,
      end: "+=300",
      // markers: true,
  }
}),
  facts = [...document.querySelectorAll('.fact')]
// scroll_tl.to('.factsContainer h2', {
//   scale: 1.5,
//   duration: 1,
//   ease: "slow"
// })

scroll_tl.to(facts, {
  xPercent: -100 * (facts.length - 1),
  // scale: 0.5,
  scrollTrigger: {
      trigger: ".factsContainer_sm",
      start: "center center",
      pin: true,
      // horizontal: true,
      // pinSpacing:false,
      // markers: true,
      scrub: 1,
      snap: 1 / (facts.length - 1),
      // base vertical scrolling on how wide the container is so it feels more natural.
      // end: () => `+=${smallFactsContainer.offsetWidth}`
      end: () => `+=4320`
  }
});


// preloader

var timeline = new TimelineLite();

timeline
  .to(".box", 1, {
    height: "0",
    ease: Power4.easeIn,
    delay: "0.5",
    //   duration:.5,
  })
  .from(".hero__banner, .about__inner figure img", {
    scale: 1.1,
    // y:900,
    // delay: "0.5",
    duration: 0.8,
    ease: Power4.easeOut,
  })
  .from(".right_wrap p", {
    duration: 0.6,
    opacity: 0,
    y: 20,
    ease: "Power3.out",
    stagger: 0.5,
  })
  .from(".hero__banner h1", {
    opacity: 0,
    duration: 0.5,
    // delay:1,
    onStart: function () {
      $(".hero__banner h1").textillate({
        in: { effect: "fadeInLeft" },
      });
    },
  });






// Navbar


const ham = document.querySelector(".menu-button");
const menu = document.querySelector('.menu ul');
const links = menu.querySelectorAll('.menu ul li');


var tl = gsap.timeline({ paused: true });

tl.to(menu, {
	duration: 1,
	opacity: 1,
	height: '100vh', 
  width: '75vw', 
  x:0,
  y:0,// change this to 100vh for full-height menu
	ease: 'expo.inOut',
})
tl.from(links, {
	duration: 1,
	opacity: 0,
	x:-40,
  y:-40,
	stagger: 0.1,
	ease: 'expo.inOut',
}, "-=0.5");

tl.reverse();

ham.addEventListener('click', () => {
	tl.reversed(!tl.reversed());
});



// ?projects



// ??Tabbss

// console.clear();
// var $tabs = $(".content");
// var $buttons = $(".tab");

// $buttons.click(function() {
//   var selected = $(this).index();
//   TweenMax.to($buttons, 0.5, { opacity: 0.25 });
//   TweenMax.to(this, 0.5, { opacity: 1 });

//   TweenMax.to($tabs, 0.5, { opacity: 0, delay: 0.5 });
//   TweenMax.to($tabs.eq(selected), 0.5, { opacity: 1, delay: 0.5 });
// });



const onPageSections = document.querySelectorAll('.on-page-section');

/* Toggle On Page Sections */
let lastIndex = 0;
gsap.utils.toArray('.on-page-menu button').forEach((btn, i) => {
  btn.addEventListener('click', () => {
    const tl = gsap.timeline({ defaults: { overwrite: "auto", duration: 0.2 } });
    
    if(i !== lastIndex) {
      // Fade out last
      const lastElem = onPageSections[lastIndex];
      tl.to(lastElem, { 
        opacity: 0, 
        onComplete: () => gsap.set(lastElem, { display: "none" })
      });
      
      // Fade in new
      const newElem = onPageSections[i];
      tl.set(newElem, { display: "block", opacity: 0 });
      tl.to(newElem, { opacity: 1 });
      
      // Update our state
      lastIndex = i;
    }
  });
});

