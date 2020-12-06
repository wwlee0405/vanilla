// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  pendingList = document.querySelector(".js-pendingList"),
  finishedList = document.querySelector(".js-finishedList");

const PENDING_LS = "PENDING";
const FNISHED_LS = "FINISHED";

let pending = [];
let finished = [];

function movePending(event) {
  const li = event.target.parentNode;
  const task = finished.find((task) => {
    return task.id === li.id;
  });
  handleDelete(event);
  paintPending(task);
  saveToDos();
}

function handleDelete(event) {
  const li = event.target.parentNode;
  li.parentNode.removeChild(li);
  pending = pending.filter((task) => {
    return task.id !== li.id;
  });
  finished = finished.filter((task) => {
    return task.id !== li.id;
  });
  saveToDos();
}

function moveFinished(event) {
  const li = event.target.parentNode;
  const task = pending.find((task) => {
    return task.id === li.id;
  });
  handleDelete(event);
  paintFinished(task);
  saveToDos();
}

function paintFinished(task) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const delBtn = document.createElement("button");
  const backBtn = document.createElement("button");

  span.innerText = task.text;
  delBtn.innerText = "❌";
  backBtn.innerText = "⏪";
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(backBtn);
  li.id = task.id;
  finishedList.appendChild(li);

  delBtn.addEventListener("click", handleDelete);
  backBtn.addEventListener("click", movePending);

  finished.push(task);
  saveToDos();
}

function paintPending(task) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const delBtn = document.createElement("button");
  const movBtn = document.createElement("button");

  span.innerText = task.text;
  delBtn.innerText = "❌";
  movBtn.innerText = "✅";
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(movBtn);
  li.id = task.id;
  pendingList.appendChild(li);

  delBtn.addEventListener("click", handleDelete);
  movBtn.addEventListener("click", moveFinished);

  pending.push(task);
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(PENDING_LS, JSON.stringify(pending));
  localStorage.setItem(FNISHED_LS, JSON.stringify(finished));
}

function getTaskObj(text) {
  return {
    id: String(Date.now()),
    text
  };
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = getTaskObj(toDoInput.value);
  paintPending(currentValue);
  toDoInput.value = "";
}

function loadToPending() {
  const loadedPendig = localStorage.getItem(PENDING_LS);
  const loadedFinished = localStorage.getItem(FNISHED_LS);
  if (loadedPendig || loadedFinished) {
    const parsedPending = JSON.parse(loadedPendig);
    const parsedFinished = JSON.parse(loadedFinished);
    parsedPending.forEach(function (toDo) {
      paintPending(toDo.text);
    });
    parsedFinished.forEach(function (toDo) {
      paintFinished(toDo.text);
    });
  }
}

function init() {
  loadToPending();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
