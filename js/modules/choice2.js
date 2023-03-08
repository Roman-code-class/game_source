export function choice2() {
  window.addEventListener("load", function () {
    const countUser = document.querySelector(".count-user");
    const countComp = document.querySelector(".count-comp");
    const userField = document.querySelector(".user-field");
    const compField = document.querySelector(".comp-field");
    const play = document.querySelector(".play");
    const fields = document.querySelectorAll(".field");
    const res = document.querySelector(".results");

    let userStep,
      compStep,
      countU = 0,
      countC = 0,
      blocked = false;

    function choiceUser(e) {
      if (blocked) return;
      const target = e.target;
      if (target.classList.contains("field")) {
        userStep = target.dataset.field;
        fields.forEach((item) => item.classList.remove("active", "error"));
        target.classList.add("active");

        choiceComp();
      }
    }
    function choiceComp() {
      blocked = true;
      const rand = Math.floor(Math.random() * 3);
      compField.classList.add("blink");
      const compFields = compField.querySelectorAll(".field");

      setTimeout(() => {
        compField.classList.remove("blink");
        compStep = compFields[rand].dataset.field;
        compFields[rand].classList.add("active");
        winner();
      }, 3000);
    }
    function winner() {
      blocked = false;
      const comb = userStep + compStep;
      console.log(comb);

      switch (comb) {
        case "rr":
        case "ss":
        case "pp":
          res.innerText = "Ничья";
          break;

        case "rs":
        case "sp":
        case "pr":
          res.innerText = "Победа";
          countU++;
          countUser.innerText = countU;
          compField
            .querySelector("[data-field=" + compStep + "]")
            .classList.add("error");
          break;

        case "sr":
        case "ps":
        case "rp":
          res.innerText = "Проигрыш";
          countC++;
          countComp.innerText = countC;
          userField
            .querySelector("[data-field=" + userStep + "]")
            .classList.add("error");
          break;

        default:
          break;
      }
    }
    function playGame() {
      countU = countC = 0;
      res.innerText = "Сделайте выбор";
      countUser.innerText = "0";
      countComp.innerText = "0";
      fields.forEach((item) => item.classList.remove("active", "error"));
    }

    play.addEventListener("click", playGame);
    userField.addEventListener("click", choiceUser);
  });
}
