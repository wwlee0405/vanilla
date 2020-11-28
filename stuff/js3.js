// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const title = document.querySelector("h2");
const superEventHandler = {
  resize: function () {
    title.innerHTML = "you just resized!";
    title.style.color = colors[0];
  },
  mouseenter: function () {
    title.innerHTML = "the mouse is here!";
    title.style.color = colors[1];
  },
  mouseleave: function () {
    title.innerHTML = "the mouse is gone!";
    title.style.color = colors[2];
  },
  contextmenu: function () {
    title.innerHTML = "That was a right click!";
    title.style.color = colors[3];
  }
};

function init() {
  window.addEventListener("resize", superEventHandler.resize);
  title.addEventListener("mouseenter", superEventHandler.mouseenter);
  title.addEventListener("mouseleave", superEventHandler.mouseleave);
  title.addEventListener("contextmenu", superEventHandler.contextmenu);
}

init();
