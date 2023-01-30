import { galleryItems } from './gallery-items.js';
// Change code below this line

// HTML Objecs
const gallery = document.querySelector('.gallery');

// Markup
const markup = galleryItems
    .map(({ preview, original, description }) => `
        <a href="${original}" class="gallery__item">
            <img src="${preview}" 
                    alt="${description}"
                    class="gallery__image"
            />
        </a>
    `)
  .join("");

gallery.innerHTML = markup;

var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
    });

console.log(galleryItems);
