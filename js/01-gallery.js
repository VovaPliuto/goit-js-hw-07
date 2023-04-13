import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const galleryMarkup = galleryItems.reduce(
  (markup, { preview, original, description }) =>
    markup +
    `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
    </a>
</li>`,
  ""
);

gallery.insertAdjacentHTML("afterbegin", galleryMarkup);

gallery.addEventListener("click", onGalleryClick);

function onGalleryClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
  <img src="${e.target.dataset.source}" width="800" height="600">
  `);
  
  instance.show();
  
  window.addEventListener("keydown", onEscKeyPress);
  
  function onEscKeyPress(e) { 
    console.log(e.code);
    if (e.code === "Escape") { 
      instance.close();
      window.removeEventListener("keydown", onEscKeyPress);
    }
  }
}


