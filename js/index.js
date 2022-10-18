
const init = () => {
  const $form = document.querySelector("form");
  $form.addEventListener("submit", (event) => {
    event.preventDefault();
  });
}


init();