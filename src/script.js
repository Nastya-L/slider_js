function gallery(target, slide) {
    const slides = document.querySelector("[data-slides]");
    const slidesItems = Array.from(slides.children);
    // Создаем DOMelevent (HTML)
    const slidePagination = document.createElement('ul');
    slidePagination.classList = "slide__pagination";

    target.appendChild(slidePagination);
    //
//
    if (slide.pagination == false) {
        slidePagination.classList.add("none");
    }
//
    let slidePaginationArray = []; // Массив кнопок
    for ( let i = 0; i < slidesItems.length; i++) {
    // Создаем DOMelevent (HTML)
        const slidePaginationItem = document.createElement('li');

        const slidePaginationButton = document.createElement('button');
        slidePaginationButton.classList = "slide__pagination__page";
        
        slidePaginationItem.appendChild(slidePaginationButton);
        slidePagination.appendChild(slidePaginationItem);

        slidePaginationButton.dataset.index = i;
    // Записываем в массив
        slidePaginationArray.push(slidePaginationButton);
        if (i == 0) {
            showSlide(i);
        }
    }
    const buttons = document.querySelector(".controls");
    // Переключение слайдов
    function slideGo(dir) {
        const curentSlide = slides.querySelector("[data-active]"); // Картинка
        let curentIndex = slidesItems.indexOf(curentSlide); // индекс активной картинки
        if (dir == "next") {
            curentIndex += 1;
            if (curentIndex >= slidesItems.length) {
                curentIndex = 0;
            }
        }
        if (dir == "prev") {
            curentIndex -= 1;
            if (curentIndex < 0) {
                curentIndex = (slidesItems.length - 1);
            }
        }
        showSlide(curentIndex);
    }
    // Нажимаем на стрелки
    buttons.addEventListener('click', (e) => {
            slideGo(e.target.dataset.button);
    })
    // Нажимаем на точки
    slidePagination.addEventListener('click', (e) => {
        let curentDot = e.target.dataset.index;
        showSlide(curentDot);
    })

    function showSlide(index) {
        const curentSlide = slides.querySelector("[data-active]"); // Картинка
        if (curentSlide != undefined) {
            let curentSlideIndex = slidesItems.indexOf(curentSlide); // индекс активной картинки
            slidePaginationArray[curentSlideIndex].classList.remove("pagination_active");
            curentSlide.removeAttribute("data-active");
        }
        slidesItems[index].dataset.active = '';
        slidePaginationArray[index].classList.add("pagination_active");
    }

    if (slide.autoPlay == true) {
        // Автопрокрутка слайдов
        let intervalId;
        setMouse({type: "mouseout"});
        function setMouse(e) {
            if(e.type==="mouseout") {
                intervalId = setInterval(function() {
                    slideGo("next");
                }, slide.autoPlaySpeed);
            }
            else if(e.type==="mouseover") {
                clearInterval(intervalId);
            }
        }
        // Наводим и убираем мышку
        target.addEventListener("mouseover", setMouse);
        target.addEventListener("mouseout", setMouse);
    }
}

// Создаем паременную и параметры, что будем передавать
const target = document.querySelector(".carousel");
const slide = {
    autoPlay: true,
    autoPlaySpeed: 1000,
    pagination: true,
}

gallery(target,slide);