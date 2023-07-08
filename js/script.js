// ПЕРЕКЛЮЧЕНИЕ ССЫЛОК В МЕНЮ

// Получаем все элементы с классом "nav-link"
const navLinks = document.querySelectorAll(".nav__list-link");

// Функция для добавления модификатора --active к выбранной ссылке
function setActiveLink(event) {
  event.preventDefault(); // Отменяем стандартное поведение ссылки

  // Удаляем --active у всех ссылок
  navLinks.forEach((link) => {
    link.classList.remove("nav__list-link--active");
  });

  // Добавляем --active к выбранной ссылке
  event.target.classList.add("nav__list-link--active");
}

// При загрузке страницы устанавливаем активный модификатор на первую ссылку
window.addEventListener("load", function () {
  navLinks[0].classList.add("nav__list-link--active");
});

// Прикрепляем обработчик события клика к каждой ссылке
navLinks.forEach((link) => {
  link.addEventListener("click", setActiveLink);
});

// ТАЙМЕР

// Получаем все элементы с классом "art-time"
const timerElements = document.querySelectorAll(".art-time, .bid__timer");

// Создаем отдельный таймер для каждого элемента
timerElements.forEach((timerElement) => {
  // Разбиваем строку с временем на часы, минуты и секунды
  const timeParts = timerElement.innerText.split(":");
  let hours = parseInt(timeParts[0], 10);
  let minutes = parseInt(timeParts[1], 10);
  let seconds = parseInt(timeParts[2], 10);

  // Функция для обновления значения таймера
  function updateTimer() {
    // Уменьшаем секунды на 1
    seconds--;

    // Если секунды достигли 0, уменьшаем минуты на 1 и сбрасываем секунды до 59
    if (seconds < 0) {
      minutes--;
      seconds = 59;
    }

    // Если минуты достигли 0, уменьшаем часы на 1 и сбрасываем минуты до 59
    if (minutes < 0) {
      hours--;
      minutes = 59;
    }

    // Форматируем значения часов, минут и секунд для отображения
    const formattedTime = `${padZero(hours)}:${padZero(minutes)}:${padZero(
      seconds
    )}`;

    // Обновляем значение таймера на странице
    timerElement.innerText = formattedTime;

    // Если время истекло, останавливаем таймер
    if (hours === 0 && minutes === 0 && seconds === 0) {
      clearInterval(timerInterval);
    }
  }

  // Функция для добавления ведущего нуля к значениям времени
  function padZero(value) {
    return value.toString().padStart(2, "0");
  }

  // Обновляем значение таймера каждую секунду
  const timerInterval = setInterval(updateTimer, 1000);
});
