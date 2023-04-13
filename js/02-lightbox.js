import { galleryItems } from "./gallery-items.js";

// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const galleryMarkup = galleryItems.reduce(
  (markup, { preview, original, description }) => {
    markup += `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${original}"
      alt="${description}"
    />
    </a>
</li>`;
    return markup;
  },
  ""
);

gallery.insertAdjacentHTML("afterbegin", galleryMarkup);

const lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionSelector: "img",
  captionData: "attr",
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});


