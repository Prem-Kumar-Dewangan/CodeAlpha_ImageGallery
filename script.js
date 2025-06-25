const buttons = document.querySelectorAll(".category");
const images = document.querySelectorAll(".image-item");

function showImages(category){
    images.forEach(img => {
        img.classList.remove("show");

        if(category === "All"){
            img.classList.add("show");
        }else if(img.classList.contains(category)){
            img.classList.add("show");
        }
    });
}

buttons.forEach(button => {
    button.addEventListener('click', function(){
        if(this.classList.contains('active')){
            this.classList.remove('active');
            showImages('none');
            return;
        }
        buttons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');

        const category = this.getAttribute('data-category');
        showImages(category);
    });
});
showImages('All')
let currentIndex = 0;
let visibleImages = [];

function openLightbox(index) {
visibleImages = Array.from(document.querySelectorAll('.image-item.show'));
currentIndex = index;
document.getElementById('lightbox-img').src = visibleImages[currentIndex].src;
document.getElementById('lightbox').style.display = 'flex';
}

function closeLightbox() {
document.getElementById('lightbox').style.display = 'none';
}

function nextImage() {
currentIndex = (currentIndex + 1) % visibleImages.length;
document.getElementById('lightbox-img').src = visibleImages[currentIndex].src;
}

function prevImage() {
currentIndex = (currentIndex - 1 + visibleImages.length) % visibleImages.length;
document.getElementById('lightbox-img').src = visibleImages[currentIndex].src;
}
images.forEach((img, index) => {
img.addEventListener('click', () => {
    if (img.classList.contains('show')) {
    const visible = Array.from(images).filter(i => i.classList.contains('show'));
    const realIndex = visible.indexOf(img);
    openLightbox(realIndex);
    }
});
});