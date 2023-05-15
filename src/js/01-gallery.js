import SimpleLightbox from 'simplelightbox';
//console.log(SimpleLightbox);
// Add imports above this line
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const mapImages = galleryItems
  .map(
    img => `<li><a class="gallery__item" href="${img.original}">
<img class="gallery__image" src="${img.preview}" alt="${img.description}" />
</a></li>`
  )
  .join('');
gallery.insertAdjacentHTML('afterbegin', mapImages);
const galleryInst = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: '250',
});
gallery.addEventListener('click', event => {
  event.preventDefault();
});
