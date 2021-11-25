// Add imports above this line
import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const galleryItemsEl = document.querySelector('.gallery');
const galleryCards = createImagesGallery(galleryItems);

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

const lightboxGallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 300,
  animationSpeed:	500,
});