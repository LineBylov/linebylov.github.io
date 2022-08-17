let memberImages = [
    'DSC06837.jpg',
    'DSC06853.jpg',
    'DSC06874.jpg',
    'DSC06917.jpg',
    'DSC06879.jpg',
    'DSC06877.jpg',
    'DSC06878.jpg',
    'DSC06860.jpg',
    'DSC06969.jpg',
    'profilfoto.jpg',
    'profilfoto.jpg',
    'profilfoto.jpg',
];

let memberNames = [
    'Gail',
    'Bobby',
    'Greg',
    'Shorty',
    'Buffy',
    'Doofy',
    'Ray',
    'Burke',
    'Cindy',
    'Miss Man',
    'Brenda',
    'Kenny',
];

let modal = document.getElementById('modal');

function openModal(){
    modal.style.display = "grid";

    for (i = 0; i < memberImages.length; i++){
    modal.innerHTML += `<div class="member-modal-card">
    <img src="${'img/galleri/' + memberImages[i]}" alt="Medlem" class="member-modal-card-img">
    <p class="member-modal-card-text">${memberNames[i]}</p>
  </div>`}
}

function closeModal(){
    modal.style.display = "none";
}