const slider = document.querySelector(".slider");
const list = document.querySelector(".list");
const thumbnail = document.querySelector(".thumbnail");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const loadingBar = document.querySelector(".loading-bar");

// autoplay slider
let runAutoplay = setTimeout(() => {
  next.click();
}, 8000);

next.addEventListener("click", () => {
  initSlider("next");
});

prev.addEventListener("click", () => {
  initSlider("prev");
});

const initSlider = (type) => {
  const sliderItems = list.querySelectorAll(".item");
  const thumbnailItems = thumbnail.querySelectorAll(".item");

  if (type === "next") {
    list.appendChild(sliderItems[0]);
    thumbnail.appendChild(thumbnailItems[0]);
    slider.classList.add("next");
  } else {
    const lastItemPosition = sliderItems.length - 1;
    list.prepend(sliderItems[lastItemPosition]);
    thumbnail.prepend(thumbnailItems[lastItemPosition]);
    slider.classList.add("prev");
  }

  setTimeout(() => {
    slider.classList.remove("next");
    slider.classList.remove("prev");
  }, 2000);

  clearTimeout(runAutoplay);
  runAutoplay = setTimeout(() => {
  next.click();
}, 8000);
};
