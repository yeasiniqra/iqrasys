const slideContainer = document.querySelector(".container"),
    slide = document.querySelector(".slides"),
    nextBtn = document.getElementById("next-btn"),
    prevBtn = document.getElementById("prev-btn"),
    interval = 4000;
let slideId,
    slides = document.querySelectorAll(".slide"),
    index = 1;
const firstClone = slides[0].cloneNode(true),
    lastClone = slides[slides.length - 1].cloneNode(true);
(firstClone.id = "first-clone"), (lastClone.id = "last-clone"), slide.append(firstClone), slide.prepend(lastClone);
const slideWidth = slides[index].clientWidth;
(slide.style.transform = `translateX(${-slideWidth * index}px)`), console.log(slides);

const startSlide = () => {
  slideId = setInterval(() => {
    moveToNextSlide();
  }, interval);
};

const getSlides = () => document.querySelectorAll(".slide");

slide.addEventListener("transitionend", () => {
  (slides = getSlides())[index].id === firstClone.id && ((slide.style.transition = "none"), (index = 1), (slide.style.transform = `translateX(${-slideWidth * index}px)`)),
    slides[index].id === lastClone.id && ((slide.style.transition = "none"), (index = slides.length - 2), (slide.style.transform = `translateX(${-slideWidth * index}px)`));
});

const moveToNextSlide = () => {
  (slides = getSlides()), index >= slides.length - 1 || (index++, (slide.style.transition = "0.9s ease-out"), (slide.style.transform = `translateX(${-slideWidth * index}px)`));
};

const moveToPreviousSlide = () => {
  index <= 0 || (index--, (slide.style.transition = "0.9s ease-out"), (slide.style.transform = `translateX(${-slideWidth * index}px)`));
};


// Add pause on hover functionality
slide.addEventListener("mouseenter", () => {
  clearInterval(slideId);
  slides.forEach(slide => {
    slide.style.transition = "none";
  });
});

slide.addEventListener("mouseleave", () => {
  slides.forEach(slide => {
    slide.style.transition = "all 0.05s ease";
  });
  startSlide();
});

nextBtn.addEventListener("click", moveToNextSlide);
prevBtn.addEventListener("click", moveToPreviousSlide);

startSlide();
