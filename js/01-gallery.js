import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const imagesMarkup = creatImagesMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', imagesMarkup);
galleryContainer.addEventListener('click', onImagesContainerClick);


function creatImagesMarkup(galleryItems) {
	const markup = galleryItems.map(({ preview, original, descr }) => {
		return `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
         alt="${descr}"
        />
        </a>
        </div>
        `;
	}).join('');
	return markup;
}


function onImagesContainerClick (evt) {
    evt.preventDefault();
    if (!evt.target.classList.contains('gallery__image')) {
        return;
    }
    const selectedImage = evt.target.dataset.source;
    
    const instance = basicLightbox.create(`
    <img src="${selectedImage}" width="800" height="600">
`)

	instance.show()

galleryContainer.addEventListener ('keydown', evt => {
    if (evt.key === 'Escape') {
        instance.close();
    }
})
  
}