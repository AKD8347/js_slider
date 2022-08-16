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

//Находим HTML-тег для отображения слайдов
const slides = document.getElementsByClassName("slider__item");
//Определяем HTML-тег для отображения точек, указывая что он первый в списке
const dotsContainer = document.getElementsByClassName('slider__dots')[0];

//Определяем количество точек
function addDots() {

    for (let i = 0; i < slides.length; i++) {
        //создаем тег li
        let dot = document.createElement('li');
        //добавляем ему нужный класс
        dot.classList.add('slider__dots--item');
        //добавляем тег в контейнер
        dotsContainer.appendChild(dot)
    }
}
//вызываем функцию
addDots();

// Основная функция слайдера
function showSlides(n) {
    //определяем количество слайдов
    let slides = document.getElementsByClassName("slider__item");

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }
    slides[slideIndex - 1].classList.add('active');
}
