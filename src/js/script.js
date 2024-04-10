function show() {
  const parthSlide = document
    .querySelector("#carousel__sliders")
    .getElementsByTagName("div");
  const buttonSlide = document
    .querySelector("#carousel__button")
    .getElementsByTagName("p");
  const numbersLength = parthSlide.length;
  let elem = parseInt(
    document.querySelector("#carousel").getAttribute("elem"),
    10,
  );
  const time = setInterval(() => {
    document.querySelector("#carousel").setAttribute("elem", elem);

    if (elem > 0) {
      parthSlide[elem - 1].style.left = "-600px";
      buttonSlide[elem - 1].classList.remove("active");
      parthSlide[elem].style.left = "0px";
      parthSlide[elem].style.opacity = "1";
      buttonSlide[elem].classList.add("active");

      if (parthSlide[elem - 2]) {
        parthSlide[elem - 2].style.left = "600px";
        parthSlide[elem - 2].style.opacity = "0";
        buttonSlide[elem - 2].classList.remove("active");
      } else {
        parthSlide[elem + numbersLength - 3].style.left = "600px";
        parthSlide[elem + numbersLength - 3].style.opacity = "0";
        buttonSlide[elem + numbersLength - 3].classList.remove("active");
      }
    } else {
      if (parthSlide[numbersLength - 1].style.left === "0px") {
        parthSlide[numbersLength - 1].style.left = "-600px";
        buttonSlide[numbersLength - 1].classList.remove("active");
      }

      parthSlide[elem].style.left = "0px";
      parthSlide[elem].style.opacity = "1";
      buttonSlide[elem].classList.add("active");
      parthSlide[elem + numbersLength - 3].style.left = "600px";
      parthSlide[elem + numbersLength - 3].style.opacity = "0";
      buttonSlide[elem + numbersLength - 3].classList.remove("active");
    }
    elem++;
    if (elem === numbersLength) {
      elem = 0;
    }
  }, 5000);
  document.querySelector("#carousel").timer = time;
}

function showSlide() {
  const nowSlide = parseInt(
    document.querySelector("#carousel").getAttribute("elem"),
    10,
  );
  show();
  document.querySelector("#carousel__sliders").getElementsByTagName("div")[
    nowSlide
  ].style.transition = "left 3s 0s linear";
}
function pauseSlide() {
  const time = document.querySelector("#carousel").timer;
  const nowSlide = parseInt(
    document.querySelector("#carousel").getAttribute("elem"),
    10,
  );
  document.querySelector("#carousel__sliders").getElementsByTagName("div")[
    nowSlide
  ].style.transition = "none";
  clearInterval(time);
}

function leftButtonSlide() {
  const nowSlide = parseInt(
    document.querySelector("#carousel").getAttribute("elem"),
    10,
  );
  const parthSlide = document
    .querySelector("#carousel__sliders")
    .getElementsByTagName("div");
  let leftButtonNumder = nowSlide - 1;
  if (leftButtonNumder < 0) {
    leftButtonNumder = parthSlide.length - 1;
    parthSlide[0].style.left = "600px";
    parthSlide[0].style.opacity = "0";
    parthSlide[0].style.transition = "left 3s 0s linear";
  }
  document.querySelector("#carousel").setAttribute("elem", leftButtonNumder);
  parthSlide[leftButtonNumder].style.left = "0px";
  parthSlide[leftButtonNumder].style.opacity = "1";
  parthSlide[leftButtonNumder].style.transition = "none";
  if (parthSlide[leftButtonNumder + 1]) {
    parthSlide[leftButtonNumder + 1].style.left = "600px";
    parthSlide[leftButtonNumder + 1].style.opacity = "0";
    parthSlide[leftButtonNumder + 1].style.transition = "left 3s 0s linear";
  }
}

function rightButtonSlide() {
  const nowSlide = parseInt(
    document.querySelector("#carousel").getAttribute("elem"),
    10,
  );
  const parthSlide = document
    .querySelector("#carousel__sliders")
    .getElementsByTagName("div");
  const numberSlide = parthSlide.length;
  let rightButton = nowSlide + 1;
  if (rightButton === numberSlide) {
    rightButton = 0;
    parthSlide[numberSlide - 1].style.left = "600px";
    parthSlide[numberSlide - 1].style.opacity = "0";
    parthSlide[numberSlide - 1].style.transition = "left 3s 0s linear";
  }
  document.querySelector("#carousel").setAttribute("elem", rightButton);
  parthSlide[rightButton].style.left = "0px";
  parthSlide[rightButton].style.opacity = "1";
  parthSlide[rightButton].style.transition = "none";
  if (parthSlide[rightButton - 1]) {
    parthSlide[rightButton - 1].style.left = "600px";
    parthSlide[rightButton - 1].style.opacity = "0";
    parthSlide[rightButton - 1].style.transition = "left 3s 0s linear";
  }
}

function buttonsSlide(e) {
  const idSlide = parseInt(e.target.getAttribute("id"), 10);
  const parthSlide = document
    .querySelector("#carousel__sliders")
    .getElementsByTagName("div");
  const buttonSlide = document
    .querySelector("#carousel__button")
    .getElementsByTagName("p");
  const numbersLengSlide = parthSlide.length;
  document.querySelector("#carousel").setAttribute("elem", idSlide);
  parthSlide[idSlide].style.left = "0px";
  parthSlide[idSlide].style.opacity = "1";
  parthSlide[idSlide].style.transition = "none";
  buttonSlide[idSlide].classList.add("active");

  for (let i = 0; i < idSlide; i++) {
    parthSlide[i].style.left = "600px";
    parthSlide[i].style.opacity = "0";
    parthSlide[i].style.transition = "left 3s 0s linear";
    buttonSlide[i].classList.remove("active");
  }

  for (let j = idSlide + 1; j < numbersLengSlide; j++) {
    parthSlide[j].style.left = "600px";
    parthSlide[j].style.opacity = "0";
    parthSlide[j].style.transition = "left 3s 0s linear";
    buttonSlide[j].classList.remove("active");
  }
}

function increase() {
  const elem = 0;
  document.querySelector(".carousel").setAttribute("elem", elem);
  const numberPartSlide = document
    .querySelector("#carousel__sliders")
    .getElementsByTagName("div").length;
  for (let i = 0; i < numberPartSlide; i++) {
    document.querySelector("#carousel__button").innerHTML +=
      `<p id="${i}" class="carousel__point-button"></p>`;
  }

  document
    .querySelector("#carousel")
    .addEventListener("mouseover", pauseSlide, false);
  document
    .querySelector("#carousel__button")
    .addEventListener("click", buttonsSlide, false);
  document
    .querySelector("#carousel__left")
    .addEventListener("click", leftButtonSlide, false);
  document
    .querySelector("#carousel__right")
    .addEventListener("click", rightButtonSlide, false);
  document
    .querySelector("#carousel")
    .addEventListener("mouseout", showSlide, false);
  show();
}

increase();
