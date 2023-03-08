export function choice() {
  const blockChoice = document.querySelector(".voices");
  const clickChoice = document.querySelector(".voice");
  const imgGame = Array.from(document.querySelectorAll(".voices_img"));
  const elementSelection = document.querySelector(".img_game");
  const elementSelections = document.querySelector(".rival");
  const btnGame = document.querySelector(".btn_start_game");
  const imgGameRival = Array.from(
    document.querySelectorAll(".rival_voices_img")
  );
  const resultClass = document.querySelector(".result_arr");
  const resultClass2 = document.querySelector(".result_arr2");

  // элементы
  const stoneL = document.querySelector(".stoneL ");
  const scissorsL = document.querySelector(".scissorsL ");
  const paperL = document.querySelector(".paperL ");

  const stoneR = document.querySelector(".stoneR");
  const scissorsR = document.querySelector(".scissorsR");
  const paperR = document.querySelector(".paperR");

  clickChoice.addEventListener("click", function () {
    blockChoice.style.display = "block";
  });

  // Выбор элемента
  function clickBlock() {
    imgGame.forEach((element) => {
      element.addEventListener("click", (e) => {
        imgGame.forEach((el) => {
          el.classList.remove("._active");
          blockChoice.style.display = "none";
        });
        element.classList.toggle("._active");
        const cloneImg = element.cloneNode(true);
        elementSelection.replaceChildren(cloneImg);
      });
    });
  }

  clickBlock();

  // Ответ соперника по кнопке
  // btnGame.onclick = boom;
  // function boom() {
  //   function boomArray(array) {
  //     const rival = (Math.random() * array.length) | 0;
  //     const outRival = array[rival];
  //     outRival.style.display = "block";
  //     return outRival;
  //   }
  //   const outRival = boomArray(imgGameRival);
  //   elementSelections.replaceChildren(outRival);
  // }

  function GameClick() {
    // resultClass.innerHTML = "";
    imgGame.forEach((element) => {
      element.addEventListener("click", (e) => {
        // Ответ соперника по кнопке
        btnGame.onclick = boom;
        function boom() {
          function boomArray(array) {
            const rival = (Math.random() * array.length) | 0;
            const outRival = array[rival];
            outRival.style.display = "block";
            return outRival;
          }
          const outRival = boomArray(imgGameRival);
          elementSelections.replaceChildren(outRival);
          const cloneImgResult = element.cloneNode(true);
          resultClass.replaceChildren(cloneImgResult);
          const outRivalResult = elementSelections.cloneNode(true);
          resultClass2.replaceChildren(outRivalResult);
        }
      });
    });
  }
  GameClick();
}
