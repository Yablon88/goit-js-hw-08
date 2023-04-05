// Add imports above this line

import { galleryItems } from './gallery-items';

// Change code below this line

console.log(galleryItems);

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const paletContainer = document.querySelector('.gallery');

const images = galleryItems.map(
  image => `
    <li class="gallery__item">
        <a class="gallery__link" href="${image.original}">
             <img
            class="gallery__image"
            src="${image.preview}"          
            data-source="${image.original}"           
            alt="${image.description}"         
            />      
        </a>     
    </li>`
);

paletContainer.insertAdjacentHTML('beforeend', images.join(''));

const lightbox = new SimpleLightbox('.gallery a', {
  captionsdata: 'alt',
  captionDelay: 250,
});
