// Add imports above this line
import { galleryItems } from './gallery-items.js';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);


const galleryItemsEl = document.querySelector('.gallery');
const galleryCards = createImagesGallery(galleryItems);
let instance = null;

galleryItemsEl.addEventListener('click', onImageClick);
window.addEventListener('keydown', clickOnEscape)

galleryItemsEl.insertAdjacentHTML('beforeend', galleryCards);

function createImagesGallery(images) {
    return images
    .map(({preview, original, description}) =>
         `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>
        `
    )
    .join("");
}

function onImageClick(event) {
    event.preventDefault()
    
    const clickOnImage = event.target.classList.contains('gallery__image');

    if (!clickOnImage) return;

    instance = basicLightbox.create(`
        <img src="${event.target.dataset.source}" width="800" height="600">
    `)
    instance.show()
}

function clickOnEscape (event) {
  if (event.code === 'Escape') instance.close()
}