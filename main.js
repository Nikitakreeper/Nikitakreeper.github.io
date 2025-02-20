var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<div class="' + className + '"></div>';
      },
    },
  });




document.addEventListener("DOMContentLoaded", function() {
  new Swiper(".swiper-container", {
      slidesPerView: 1,
      spaceBetween: 50,
      pagination: {
          el: ".swiper-pagination",
          clickable: true,
      },
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      },
      breakpoints: {
          768: {
              slidesPerView: 2,
              spaceBetween: 30
          }
      }
  });
});

document.addEventListener("DOMContentLoaded", function() {
  if (window.innerWidth <= 768) {
      new Swiper(".swiper-container", {
          loop: true,
          pagination: {
              el: ".swiper-pagination",
              clickable: true,
          },
      });
  }
});

var swiper = new Swiper(".showcaseSwiper", {
  slidesPerView: "auto",
  spaceBetween: 0, 
  centeredSlides: false, 
});

document.getElementById("openBurger").addEventListener("click", function () {
  let burgerMenu = document.getElementById("burgerMenu");
  let overlay = document.getElementById("overlay");
  if (burgerMenu.style.display === "flex") {
      burgerMenu.style.display = "none";
      overlay.style.display = "none";
  } else {
      burgerMenu.style.display = "flex";
      overlay.style.display = "flex";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const formInputs = document.querySelectorAll(".inputs input");
  const submitButton = document.querySelector(".button");

  submitButton.addEventListener("click", function () {
    let isValid = true;

    formInputs.forEach((input) => {
      const errorMessage = input.nextElementSibling;

      if (errorMessage && errorMessage.classList.contains("error-message")) {
        errorMessage.remove();
      }

      input.classList.remove("error");

      let message = "";

      if (input.classList.contains("name") || input.classList.contains("secondname")) {
        if (!/^[А-Яа-яЁёA-Za-z]+$/.test(input.value.trim())) {
          alert("Введите корректное имя/фамилию без цифр и символов!");
        }
      } else if (input.classList.contains("number")) {
        if (!/^\+7\d{10}$/.test(input.value.trim())) {
          alert("Введите корректный номер в формате +7XXXXXXXXXX");
        }
      } else if (input.classList.contains("field")) {
        if (input.value.trim() === "") {
          alert("Поле не должно быть пустым!");
        }
      }

      if (message) {
        isValid = false;
        input.classList.add("error");
        const errorSpan = document.createElement("span");
        errorSpan.classList.add("error-message");
        errorSpan.textContent = message;
        input.insertAdjacentElement("afterend", errorSpan);
      }
    });

    if (isValid) {
      alert("Форма успешно отправлена!");
    }
  });
});

