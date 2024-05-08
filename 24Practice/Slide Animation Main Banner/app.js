gsap.defaults({
    ease: "power4.out",
});


gsap.set('#verticalShapes00 rect', { scaleY: 0, transformOrigin: "center" })

gsap.timeline({repeat: -1})

.to('#verticalShapes00 rect', {
    scaleY: 1,
    duration: 1.5, 
    stagger: 0.1
 }, "+=0.5")
