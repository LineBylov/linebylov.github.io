let load = document.getElementById("loading");
function loading(){
  load.style.display = 'none';
}
let tl = gsap.timeline({repeat: 5});

tl.from(".circle", {duration: 1, opacity: 0, ease:"bounce", y: 250, stagger: 0.25},"+=1")

tl.to(".circle", {duration: 1, x: 300, stagger: 0.25})
tl.to(".circle", {duration: 1, x: -400, stagger: 0.25})
tl.to(".fall", {duration: 1, y: 200, ease:"bounce", backgroundColor:"#db4a4a"})
tl.to(".copy", {backgroundColor:"#db4a4a"})
tl.to(".line", {duration: 1, x: 240, backgroundColor:"#a03a6d"})
tl.to(".copy", {backgroundColor:"#a03a6d"})
tl.to(".fly", { duration: 1, ease: "circ", x: 100, y: -150, backgroundColor: "skyblue" })
tl.to(".fly, .copy", {backgroundColor: "skyblue" })
tl.to(".fly", { duration: .5, ease: "circ", x: 350, y: -100})
tl.to(".float", { duration: 1, ease: "circ", y: -70, backgroundColor:"#1c81a8"})
tl.to(".copy", {backgroundColor:"#1c81a8"})
tl.to(".disapear", { duration: 1, opacity: 0})
tl.to(".float", {x:0})

tl.to(".line", {duration: 1, width: 600, height: 600, x: 500, backgroundColor: "hotpink", zIndex: 20})

tl.to(".fall, .copy, .fly, .float", {duration: .5, opacity: 0})
tl.to(".line", {duration: 1, width: 0, height: 0})
