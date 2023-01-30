import { galleryItems } from './gallery-items.js';
// Change code below this line

// HTML Objecs
const gallery = document.querySelector('.gallery');
gallery.addEventListener('click', createModal);

function createModal(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return;
    };
    function onEscPress(key) {
        if (key.code === 'Escape') instance.close();
    };
    const instance = basicLightbox.create(`
            <div class="modal">
                <img src="${event.target.dataset.source}">
            </div>
        `, {
        onShow: (instance) => {gallery.addEventListener('keydown', onEscPress) },
        onClose: (instance) => {gallery.removeEventListener('keydown', onEscPress) },
        }
    );
    instance.show();
    console.log(event.target.dataset.source);
};

// Markup
const markup = galleryItems
    .map(({ preview, original, description }) => `
    <div class="gallery__item">
        <a href="${original}" class="gallery__link">
            <img src="${preview}" 
                 alt="${description}"
                 data-source="${original}"
                 class="gallery__image"
            />
        </a>
    </div>
    `)
  .join("");

gallery.innerHTML = markup;



