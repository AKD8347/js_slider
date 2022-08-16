// Индекс слайда по умолчанию
let slideIndex = 1;
showSlides(slideIndex);

// Увеличиваем индекс на 1, показываем следующй слайд
function plusSlide() {
    showSlides(slideIndex += 1);
}

// Уменьшяет индекс на 1, показывает предыдущий слайд
function minusSlide() {
    showSlides(slideIndex -= 1);
};

//Определяем количество точек
const slides = document.getElementsByClassName("slider__item");
const dotsContainer = document.getElementsByClassName('slider__dots')[0];


function addDots() {

    for (let i = 0; i < slides.length; i++) {
        let dot = document.createElement('li');
        dot.classList.add('slider__dots--item');
        dotsContainer.appendChild(dot)
    }

}

addDots();

// Основная функция слайдера
function showSlides(n) {
    let i;
    //определяем количество слайдов
    let slides = document.getElementsByClassName("slider__item");
    let dots = document.getElementsByClassName('slider__dots--item');
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
    console.log(dots);
    dots[slidesIndex - 1].classList.add('1');

}
