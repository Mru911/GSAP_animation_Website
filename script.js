function videoConAnimate(){
    var videocon=document.querySelector("#video-container");
var playbtn=document.querySelector("#play");
videocon.addEventListener("mouseenter",function(){
   gsap.to(playbtn,{
    scale:1,
    opacity:1,
   })


})
videocon.addEventListener("mouseleave",function(){
    gsap.to(playbtn,{
        scale:0,
        opacity:0,
       })
})
videocon.addEventListener("mousemove",function(dets){
    gsap.to(playbtn,{
        left:dets.x-70,
        top:dets.y-80
       })
})
}
videoConAnimate();
gspa.from("#page1 h1",{
    
})