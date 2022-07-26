const items = document.querySelectorAll(".accordion__item");

for (let i = 0; i < items.length; i++) {
  const item = items[i];
  const button = item.querySelector(".accordion__button");
  const body = item.querySelector(".accordion__body");

  button.onclick = function () {
    button.classList.toggle("accordion__button_opened");
    body.classList.toggle("accordion__body_opened");
  };
}
