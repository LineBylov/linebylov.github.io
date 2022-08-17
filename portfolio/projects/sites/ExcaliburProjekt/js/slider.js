let slides = [
    'DSC06825.jpg',
    'DSC06826.jpg',
    'DSC06828.jpg',
    'DSC06829.jpg',
    'DSC06832.jpg',
    'DSC06834.jpg',
    'DSC06835.jpg',
];

let imageSlider = document.getElementById('slides');
let currentImgIndex = 0;
document.getElementById('slides').innerHTML = `<img src="img/galleri/${slides[currentImgIndex]}" class="gallery-container-slider-img"/>`;

function nextSlide() {
    if(currentImgIndex < slides.length -1){
        currentImgIndex++;
    }
    else{
        currentImgIndex = 0;
    }
    document.getElementById('slides').innerHTML = `<img src="img/galleri/${slides[currentImgIndex]}" class="gallery-container-slider-img"/>`;

    //console.log(currentImgIndex);
}

function prevSlide() {
    if (currentImgIndex === 0){
        currentImgIndex = slides.length -1;
    }
    else{
        currentImgIndex--;
    }
    document.getElementById('slides').innerHTML = `<img src="img/galleri/${slides[currentImgIndex]}" class="gallery-container-slider-img"/>`;

    //console.log(currentImgIndex);
}