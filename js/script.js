//Функция слайдера
function showSlider () {
    //Находим контейнер со слайдами
    let sliderContainer = document.querySelector('.slider');
    //Находим контейнер со стрелками
    let sliderArrows = document.querySelector('.slider__arrows');
    //Находим все слайды
    let images = document.querySelectorAll('.slider__item');

    /*Функция инициализвции картинок*/
    initImages();
    /*Функция инициализвции стрелок*/
    initArrows();

    function initImages() {
        //при отсутсвии картинок выходим из функции
        if(!images) {
            return;
        }
        //при наличии проходим по каждому элементу
        images.forEach((img, index) => {
            //добавляем элементу атрибут data-index с индексом элемента
            img.setAttribute('data-index', index);
            //добавляем элементу класс с с индексом элемента
            img.classList.add('number-' + index);
            //если элемент первый в списке
            if (index === 0) {
                //добавляем ему уктивный класс
                img.classList.add('active');
            } else {
                //если нет - убираем уктивный класс
                img.classList.remove('active');
            }
        })
    }

    function initArrows() {
        //находим мтрелки и проходим по ним цыклом
        sliderArrows.querySelectorAll('.slider__arrow').forEach(arrow => {
            //каждому найденому элементу вешаем событие click
            arrow.addEventListener('click', function () {
              //определяем активный слайд и переводим значение в number
              let activeSlide = +sliderContainer.querySelector('.active').dataset.index;
              //определяем количество слайдов
              let imgLength = images.length;
              //в переменную nextSlide будем записывать номер следующего слайда
              let nextSlide;
              //при клике на стрелку влево
              if(arrow.classList.contains('slider__arrow--prev')) {
                  //если текуший слайд первый, мы идем к следую
                  nextSlide = activeSlide === 0? imgLength - 1 : activeSlide - 1;
              } else {
                  nextSlide = activeSlide === imgLength - 1? 0 : activeSlide + 1;
              }
              runSlider(nextSlide);
            });
        })
    }

    function runSlider(number) {
        sliderContainer.querySelector('.active').classList.remove('active');
        sliderContainer.querySelector('.number-' + number).classList.add('active');
    }
}

document.addEventListener("DOMContentLoaded", function(){
   showSlider();
});
