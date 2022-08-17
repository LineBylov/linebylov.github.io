
const htmlNews = document.getElementById("newsContain");

/*
let news = [
{
  newsImg: "../img/galleri/DSC06837.JPG",
  imgAlt: "Gail Hailstorm",
  heading: "Ny Forwoman <br> Gail Hailstorm",
  context: "Mød vores nye Forwoman Gail, som har været en del af Excalibur i 25 år, og hjælper hvergang med at bringe vores verden til live.",
},
{
  newsImg: "../img/galleri/DSC06877.JPG",
  imgAlt: "Doofy Gilmore",
  heading: "MÅNEDENS <br> KILLER",
  context: "Her i Excalibur har vi en månedens killer, og i denne uge har Doofy fået æren af den tittel, som MÅNEDENS KILLER",
},

]

//VIS NYHEDDER

showList();

function showList() {
  htmlNews.innerHTML = "";
  for (let i = 0; i < news.length; i++){
    htmlNews.innerHTML = `
    <div class = "news-container-newsbox">
    <img src="${news[i].newsImg}" alt="${news[i].imgAlt}" class = "news-container-newsbox-img">
    <h3 class = "news-container-newsbox-heading"> ${news[i].heading} </h3>
    <p class = "news-container-newsbox-text"> ${news[i].context} </p>
    </div>
    `
  }
}
  
showList();*/

//TILFØJ

//WEB-Javascript-API-Bilopgave

//FJERN


// SLIDER
let newsSlide = document.getElementById('newsContain');
let currentnews = 0;

function nextnews(){
  if(currentnews < newsContain.length -1){
    currentnews++;
  }
  else{
    currentnews = 0;
  }
}


function prevnews(){
  if(currentnews === 0){
    currentnews = newsContain.length -1;
  }
  else{
    currentnews --;
  }
}
