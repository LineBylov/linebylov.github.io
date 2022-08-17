// TROLL
let images = [
    'troll1.png',
    'troll1.png',
    'troll1.png',
    'troll2.png',
    'troll2.png',
    'troll2.png',
    'troll3.png',
    'troll3.png',
    'troll3.png',
    'troll2.png',
    'troll2.png',
    'troll2.png',
];
 

let scrollCycle = 0;
window.addEventListener('scroll', () => {

    if(scrollCycle < images.length - 1) {
        scrollCycle++;
     
    } else {
        scrollCycle = 0;
    }

    document.getElementById('container').innerHTML = `<img src="img/${images[scrollCycle]}" class="troll"/>`

});

// CHICKEN
let chickenImg = [
    'Chick1.png',
    'Chick2.png',
    'Chick3.png',
    'Chick4.png',
    'Chick5.png',
    'Chick6.png',
];

let currentChick = 0;
document.getElementById('chicken').innerHTML = `<img src="img/Chicken/${chickenImg[currentChick]}" class="eventImg"/>`

function nextChick(){
    if(currentChick >= chickenImg.length -1){
        currentChick = 0;
    }
    else{
        currentChick++;
    }

    document.getElementById('chicken').innerHTML = `<img src="img/Chicken/${chickenImg[currentChick]}" class="eventImg"/>`
}
setInterval(nextChick, 200);
nextChick();

//CAT
let catImg = [
    'Cat1.png',
    'Cat2.png',
    'Cat3.png',
    'Cat4.png',
    'Cat5.png',
    'Cat6.png',
    'Cat7.png',
    'Cat8.png',
];
/*
let currentCat = 0;
document.getElementById('cat').innerHTML = `<img src="img/Cat/${catImg[currentCat]}" class="eventImg"/>`

function nextChick(){
    if(currentCat >= catImg.length -1){
        currentCat = 0;
    }
    else{
        currentCat++;
    }

    document.getElementById('cat').innerHTML = `<img src="img/Cat/${chickenImg[currentChick]}" class="eventImg"/>`
}
setInterval(nextCat, 200);
nextCat();*/

//FLYING RAT
let ratImg = [
    'rat1.png',
    'rat2.png',
    'rat3.png',
    'rat4.png',
];