
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  
  


  const toggleTexts = document.querySelectorAll('.toggle-text');

toggleTexts.forEach(toggleText => {
    toggleText.addEventListener('click', () => {
        const hiddenContent = toggleText.nextElementSibling;
        hiddenContent.style.display = hiddenContent.style.display === 'none' ? 'block' : 'none';
        toggleTexts.forEach(otherToggleText => {
            if (otherToggleText !== toggleText) {
                const otherHiddenContent = otherToggleText.nextElementSibling;
                otherHiddenContent.style.display = 'none';
            }
        });
    });
});
  



// Select all the GIF images
const gifImages = document.querySelectorAll('.img__project');

// Loop through each GIF image and add an event listener to restart the animation on 'load' event
gifImages.forEach(image => {
    image.addEventListener('load', function() {
        setTimeout(function() {
            image.src = image.src; // Reload the image source to restart the GIF animation
        }, 19000); // Delay to ensure the image is fully loaded before resetting
    });
});



function startCountdown() {
  var countdown = 3;
  var countdownInterval = setInterval(function () {
      document.getElementById("startButton").innerText = countdown;
      countdown--;

      if (countdown < 0) {
          clearInterval(countdownInterval);
          document.getElementById("blackScreen").style.display = "none";
      }
  }, 1000);
}




const target = {
  clicked: 0,
  currentFollowers: 90,
  btn: document.querySelector("a.btn"),
  fw: document.querySelector("span.followers")
};

const follow = () => {
  target.clicked += 1;
  target.btn.innerHTML = 'Following <i class="fas fa-user-times"></i>';

  if (target.clicked % 2 === 0) {
    target.currentFollowers -= 1;
    target.btn.innerHTML = 'Follow <i class="fas fa-user-plus"></i>';
  }
  else {
    target.currentFollowers += 1;
  }

  target.fw.textContent = target.currentFollowers;
  target.btn.classList.toggle("following");
}



class Flipper {
  constructor(node, currentTime, nextTime) {
    this.isFlipping = false;
    this.flipNode = node;
    this.frontNode = node.querySelector(".front");
    this.backNode = node.querySelector(".back");
    this.setFrontTime(currentTime);
    this.setBackTime(nextTime);
  }

  setFrontTime(time) {
    this.frontNode.dataset.number = time;
  }

  setBackTime(time) {
    this.backNode.dataset.number = time;
  }

  flipDown(currentTime, nextTime) {
    if (this.isFlipping) {
      return false;
    }
    this.isFlipping = true;
    this.setFrontTime(currentTime);
    this.setBackTime(nextTime);
    this.flipNode.classList.add("running");
    setTimeout(() => {
      this.flipNode.classList.remove("running");
      this.isFlipping = false;
      this.setFrontTime(nextTime);
    }, this.duration);
  }
}

const getTimeFromDate = (date) =>
  date
    .toTimeString()
    .slice(0, 8)
    .split(":")
    .join("");

let flips = document.querySelectorAll(".flip");
let now = new Date();
let nowTimeStr = getTimeFromDate(new Date(now.getTime() - 1000));
let nextTimeStr = getTimeFromDate(now);
let flippers = Array.from(flips).map(
  (flip, i) => new Flipper(flip, nowTimeStr[i], nextTimeStr[i])
);

setInterval(() => {
  let now = new Date();
  let nowTimeStr = getTimeFromDate(new Date(now.getTime() - 1000));
  let nextTimeStr = getTimeFromDate(now);
  for (let i = 0; i < flippers.length; i++) {
    if (nowTimeStr[i] === nextTimeStr[i]) {
      continue;
    }
    flippers[i].flipDown(nowTimeStr[i], nextTimeStr[i]);
  }
}, 1000);





// Определение кнопки и обработка событий прокрутки
var scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
}

// Функция прокрутки наверх
function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}




function toggleAccordion(header) {
  // Находим родителя заголовка (элемент .accordion-item)
  var accordionItem = header.closest('.accordion-item');

  // Находим элемент с контентом (элемент .accordion-content)
  var accordionContent = accordionItem.querySelector('.accordion-content');

  // Переключаем класс "active" для стилизации
  accordionItem.classList.toggle('active');

  // Переключаем отображение контента
  if (accordionContent.style.display === 'block') {
    accordionContent.style.display = 'none';
    header.querySelector('.accordion-icon').textContent = '+';
  } else {
    accordionContent.style.display = 'block';
    header.querySelector('.accordion-icon').textContent = '-';
  }
}






document.addEventListener('DOMContentLoaded', () => {

  const followCursor = () => { // объявляем функцию followCursor
    const el = document.querySelector('.follow-cursor') // ищем элемент, который будет следовать за курсором

    window.addEventListener('mousemove', e => { // при движении курсора
      const target = e.target // определяем, где находится курсор
      if (!target) return

      if (target.closest('a')) { // если курсор наведён на ссылку
        el.classList.add('follow-cursor_active') // элементу добавляем активный класс
      } else { // иначе
        el.classList.remove('follow-cursor_active') // удаляем активный класс
      }

      el.style.left = e.pageX + 'px' // задаём элементу позиционирование слева
      el.style.top = e.pageY + 'px' // задаём элементу позиционирование сверху
    })
  }

  followCursor() // вызываем функцию followCursor

})


function openFullScreen(imageSrc) {
  var fullScreenContainer = document.getElementById('fullScreenContainer');
  var fullScreenImage = document.getElementById('fullScreenImage');

  fullScreenImage.src = imageSrc;
  fullScreenContainer.style.display = 'flex';
}

function closeFullScreen() {
  var fullScreenContainer = document.getElementById('fullScreenContainer');
  fullScreenContainer.style.display = 'none';
}


document.addEventListener('DOMContentLoaded', function () {
  const burgerIcon = document.getElementById('burger-icon');
  const nav = document.querySelector('nav');

  burgerIcon.addEventListener('click', function () {
    nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
  });
});




document.addEventListener("DOMContentLoaded", function() {
  // Создаем новый экземпляр Intersection Observer
  const observer = new IntersectionObserver(entries => {
      // Проходимся по каждой записи
      entries.forEach(entry => {
          // Если элемент в зоне видимости
          if (entry.isIntersecting) {
              // Получаем элемент, который сейчас находится в зоне видимости
              const target = entry.target;
              
              // Добавляем класс "show" к этому элементу
              target.classList.add("show");
              
              // Отключаем дальнейшее наблюдение за этим элементом, чтобы анимация запустилась только один раз
              observer.unobserve(target);
          }
      });
  });

  // Получаем все элементы, которые должны запускать анимацию при прокрутке
  const animatedElements = document.querySelectorAll(".animated");

  // Проходимся по каждому элементу и добавляем его в наблюдатель интерсекций
  animatedElements.forEach(animatedElement => {
      observer.observe(animatedElement);
  });
});



document.addEventListener("DOMContentLoaded", function() {
  // Создаем новый экземпляр Intersection Observer
  const observer = new IntersectionObserver(entries => {
      // Проходимся по каждой записи
      entries.forEach(entry => {
          // Если элемент в зоне видимости
          if (entry.isIntersecting) {
              // Получаем элемент, который сейчас находится в зоне видимости
              const target = entry.target;
              
              // Добавляем класс "show" к этому элементу
              target.classList.add("show");
              
              // Отключаем дальнейшее наблюдение за этим элементом, чтобы анимация запустилась только один раз
              observer.unobserve(target);
          }
      });
  });

  // Получаем все элементы, которые должны запускать анимацию при прокрутке
  const animatedElements = document.querySelectorAll(".animated2");

  // Проходимся по каждому элементу и добавляем его в наблюдатель интерсекций
  animatedElements.forEach(animatedElement => {
      observer.observe(animatedElement);
  });
});



document.addEventListener("DOMContentLoaded", function() {
  // Создаем новый экземпляр Intersection Observer
  const observer = new IntersectionObserver(entries => {
      // Проходимся по каждой записи
      entries.forEach(entry => {
          // Если элемент в зоне видимости
          if (entry.isIntersecting) {
              // Получаем элемент, который сейчас находится в зоне видимости
              const target = entry.target;
              
              // Добавляем класс "show" к этому элементу
              target.classList.add("show");
              
              // Отключаем дальнейшее наблюдение за этим элементом, чтобы анимация запустилась только один раз
              observer.unobserve(target);
          }
      });
  });

  // Получаем все элементы, которые должны запускать анимацию при прокрутке
  const animatedElements = document.querySelectorAll(".animated3");

  // Проходимся по каждому элементу и добавляем его в наблюдатель интерсекций
  animatedElements.forEach(animatedElement => {
      observer.observe(animatedElement);
  });
});






//menu vverh


function toggleMenu() {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('active');
}




document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const prevButton = document.querySelector(".prev-button");
  const nextButton = document.querySelector(".next-button");

  let counter = 0;
  let cardWidth;

  window.addEventListener('load', function() {
      cardWidth = document.querySelector('.card').offsetWidth;
      const cardsCount = document.querySelectorAll('.card').length;

      nextButton.addEventListener("click", function () {
          counter++;
          if (counter === cardsCount) {
              counter = 0;
          }
          carousel.style.transform = `translateX(${-cardWidth * counter}px)`;
      });

      prevButton.addEventListener("click", function () {
          counter--;
          if (counter < 0) {
              counter = cardsCount - 1;
          }
          carousel.style.transform = `translateX(${-cardWidth * counter}px)`;
      });
  });
});

