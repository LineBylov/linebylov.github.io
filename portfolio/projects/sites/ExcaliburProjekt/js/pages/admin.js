let modal = document.getElementById('adminGalleryModal');
let btn = document.getElementById('adminGalleryBtn');

function adminModalOpen(){
modal.style.display = 'flex';
btn.style.display = 'none';
}

function adminModalClose(){
    modal.style.display = 'none';
    btn.style.display = 'block';
}


let newsModal = document.getElementById('newsModalOpen');
let newsBtn = document.getElementById('adminNewsBtn');

function newsModalOpen(){
    newsModal.style.display = 'flex';
    newsBtn.style.display = 'none';
}
function newsModalClose(){
    newsModal.style.display = 'none';
    newsBtn.style.display = 'block';
}