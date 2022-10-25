

import JSConfetti from "js-confetti";
import "../css/style.css";


const init = () => {
  const $form = document.querySelector("form");
  const jsConfetti = new JSConfetti()

  $form.addEventListener("submit", (event) => {
    event.preventDefault();

    jsConfetti.addConfetti({
      emojis: ['💩', '💩', '💩', '💩', '💩', '💩'],
    })
  });
}


init();