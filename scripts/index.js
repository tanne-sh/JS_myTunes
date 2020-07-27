import { musicPlayerInit } from "./musicPlayer.js";
import { radioPlayerInit } from "./radioPlayer.js";
import { videoPlayerInit } from "./videoPlayer.js";

const playerBtn = document.querySelectorAll(".player-btn");
const playerBlock = document.querySelectorAll(".player-block");

playerBtn.forEach((btn, i) => {
  console.log(btn);
  console.log(i);

  btn.addEventListener("click", () => {});
});

musicPlayerInit();
radioPlayerInit();
videoPlayerInit();
