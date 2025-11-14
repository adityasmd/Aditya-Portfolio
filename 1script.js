const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function firstpageanime(){
    var tl = gsap.timeline();

    tl.from("#nav",{
        y: -10,
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut

    })
    .to(".boundingelem",{
        y: 0,
        ease: Expo.easeInOut,
        duration: 2,
        stagger: .2
    })
     tl.from("#herofooter",{
        y: -10,
        opacity: 0,
        duration: 1
        ,
        ease: Expo.easeInOut

    })
    
}
function minicirclemove(){
    window.addEventListener("mousemove", function(dets){
   document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`
    })
}
minicirclemove();
firstpageanime();