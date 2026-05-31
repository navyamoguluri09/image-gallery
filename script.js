// SELECT ELEMENTS

const galleryItems = document.querySelectorAll(".gallery-item");

const images = document.querySelectorAll(".gallery-item img");

const lightbox = document.querySelector(".lightbox");

const lightboxImg = document.querySelector(".lightbox-img");

const closeBtn = document.querySelector(".close");

const nextBtn = document.querySelector(".next");

const prevBtn = document.querySelector(".prev");

const filterButtons = document.querySelectorAll(".filters button");

// CURRENT IMAGE INDEX

let currentIndex = 0;

// OPEN LIGHTBOX

images.forEach((img, index) => {

  img.addEventListener("click", () => {

    currentIndex = index;

    showImage();

    lightbox.style.display = "flex";

  });

});

// SHOW IMAGE

function showImage(){

  lightboxImg.src = images[currentIndex].src;

}

// CLOSE LIGHTBOX

closeBtn.addEventListener("click", () => {

  lightbox.style.display = "none";

});

// NEXT BUTTON

nextBtn.addEventListener("click", () => {

  currentIndex++;

  if(currentIndex >= images.length){

    currentIndex = 0;

  }

  showImage();

});

// PREV BUTTON

prevBtn.addEventListener("click", () => {

  currentIndex--;

  if(currentIndex < 0){

    currentIndex = images.length - 1;

  }

  showImage();

});

// CLOSE WHEN CLICK OUTSIDE

lightbox.addEventListener("click", (e) => {

  if(e.target === lightbox){

    lightbox.style.display = "none";

  }

});

// KEYBOARD SUPPORT

document.addEventListener("keydown", (e) => {

  if(lightbox.style.display === "flex"){

    if(e.key === "ArrowRight"){

      currentIndex++;

      if(currentIndex >= images.length){

        currentIndex = 0;

      }

      showImage();

    }

    if(e.key === "ArrowLeft"){

      currentIndex--;

      if(currentIndex < 0){

        currentIndex = images.length - 1;

      }

      showImage();

    }

    if(e.key === "Escape"){

      lightbox.style.display = "none";

    }

  }

});

// FILTER FUNCTIONALITY

filterButtons.forEach(button => {

  button.addEventListener("click", () => {

    // REMOVE ACTIVE CLASS

    filterButtons.forEach(btn => {

      btn.classList.remove("active");

    });

    // ADD ACTIVE CLASS

    button.classList.add("active");

    const filter = button.getAttribute("data-filter");

    galleryItems.forEach(item => {

      if(filter === "all"){

        item.style.display = "block";

      }

      else if(item.classList.contains(filter)){

        item.style.display = "block";

      }

      else{

        item.style.display = "none";

      }

    });

  });

});