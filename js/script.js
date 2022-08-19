//Функция слайдера
function showSlider () {
    //Находим контейнер со слайдами
    let sliderContainer = document.querySelector('.slider__wrapper');
    //Находим контейнер со стрелками
    let sliderArrows = document.querySelector('.slider__arrows');
    //Находим все слайды
    let images = document.querySelectorAll('.slider__item');
    //Находим контейнер для точек
    let dots = document.querySelector('.slider__dots');

    //Функция инициализвции картинок
    initImages();
    //Функция инициализвции стрелок
    initArrows();
    //Функция инициализвции тшчек
    initDots()

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
                  //если текуший слайд первый, мы идем к последнему
                  if( activeSlide === 0) {
                      nextSlide = imgLength - 1;
                  } else {
                  //если не первое, едем к предыдущему
                      nextSlide = activeSlide - 1;
                  }
                  // nextSlide = activeSlide === 0? imgLength - 1 : activeSlide - 1;
              } else {
                  //если текуший слайд последний, мы идем к первому
                  // nextSlide = activeSlide === imgLength - 1? 0 : activeSlide + 1;
                  if (activeSlide === imgLength - 1) {
                      nextSlide = 0;
                  } else {
                      nextSlide = activeSlide + 1;
                  }

              }

              if(activeSlide === 0 && activeSlide === activeSlide - 1) {
                  nextSlide = activeSlide - 1;
              } else if (activeSlide === activeSlide - 1) {
                  nextSlide = activeSlide + 1;
              }

              //Функция переключения слайдера, в которую передаем номер акирвного слайда
              runSlider(nextSlide);
            });
        })
    }

    function initDots() {
        //при отсутсвии картинок выходим из функции
        if(!images) {
            return;
        }
        //при наличии проходим по каждому элементу
        images.forEach((img, index) => {
            //создаем верстку точки
            let dot = `<li class="slider__dots--item number-${index} ${index === 0? 'active': ''}" data-index="${index}"></li>`;
            //добавляем верстку в контейнер
            dots.innerHTML += dot;

        })

        dots.querySelectorAll('.slider__dots--item').forEach(dot =>  {
            dot.addEventListener('click', function (){
                runSlider(this.dataset.index)
                dots.querySelector('.active').classList.remove('active');
                this.classList.add('active');
            });
        })
    }

    function runSlider(number) {
        //убираем у всех изображений активный класс
        sliderContainer.querySelector('.active').classList.remove('active');
        //добавляем активный класс нужному изображению
        sliderContainer.querySelector('.number-' + number).classList.add('active');
        //убираем у всех точек активный класс
        dots.querySelector('.active').classList.remove('active');
        //добавляем активный класс нужной точке
        dots.querySelector('.number-' + number).classList.add('active');
    }
}

//при загрузке всех элементов страницы инициализируем слайдер
document.addEventListener("DOMContentLoaded", function(){
   showSlider();
});
