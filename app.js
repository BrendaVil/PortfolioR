/* <--- --- --- --- --- VARIABLES --- --- --- --- ---> */
const close = document.querySelector('#close');
const next = document.querySelector('#next');
const back = document.querySelector('#back');

const images = document.querySelectorAll('#portfolio img');
const lightbox = document.querySelector('#principal-viewer');
const activeImage = document.querySelector('#img-active');
let imageIndex = 0;

/* <--- --- --- --- --- OPEN VIEWER--- --- --- --- ---> */
const openLightbox = (e) => {
    activeImage.src = e.target.src;
    lightbox.style.display = 'flex';
    imageIndex = Array.from(images).indexOf(e.target);
}

images.forEach((image) => {
    image.addEventListener('click',openLightbox);
});

/* <--- --- --- --- --- CLOSE VIEWER--- --- --- --- ---> */
close.addEventListener('click', ()=>{
    lightbox.style.display='none';
});

/* <--- --- --- --- --- NEXT IMAGE --- --- --- --- ---> */
const nextImage = () => {
    if(imageIndex=== images.length-1){
        imageIndex = -1;
    }
    activeImage.src = images[imageIndex+1].src;
    imageIndex++;
};

next.addEventListener('click', nextImage);

/* <--- --- --- --- --- BACK IMAGE --- --- --- --- ---> */

const backImage = () =>{
    activeImage.src = images[imageIndex-1].src;
    imageIndex--;
};

back.addEventListener('click',backImage);

