var tl=gsap.timeline()


tl.from("#nav",{
    opacity:0,
    delay:1
})

tl.from("#nav h1, #nav h4, #nav h3", {
    y:-80,
    delay:1,
    duration:1,
    opacity:0
})

tl.from("#left h1",{
    x:-100,
    delay:1,
    opacity:0,
    stagger:0.5
})


tl.from("#right img",{
    scale:3,
    opacity:0,
    duration:1
})



gsap.from("#page2 .box",{
    scale:0,
    opacity:0,
    duaration:1,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#page2 .box",
        scroller:"body",
        markers:true,
        start:"top 70%"
    }

})