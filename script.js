
const HeroSlider = (context) => {
    const images = context.querySelectorAll("figure img");
    const prev = context.querySelector(".prev");
    const next = context.querySelector(".next");

    
    if(images.length && prev && next) {
        let currentIndex = 0;

        const updateSlide = () => {
            images.forEach((image, index) => {
                if(index === currentIndex) {
                    image.classList.add("active");
                } else {
                    image.classList.remove("active");
                }
            });
        }

        prev.addEventListener("click", (e) => {
            e.preventDefault();

            if(currentIndex) {
                currentIndex--;
            } else {
                currentIndex = images.length - 1;
            }
            updateSlide();
        });

        next.addEventListener("click", (e) => {
            e.preventDefault();

            if(currentIndex < images.length - 1) {
                currentIndex++;
            } else {
                currentIndex = 0;
            }
            updateSlide();
        });
    }
}

const hero = document.getElementById("hero");

if(hero) {
    HeroSlider(hero);
}