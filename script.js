const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task;
    const del = document.createElement("button");
    del.textContent = "❌";
    del.onclick = () => {
      tasks.splice(index, 1);
      saveTasks();
    };
    li.appendChild(del);
    taskList.appendChild(li);
  });
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  tasks.push(taskInput.value);
  taskInput.value = "";
  saveTasks();
});

renderTasks();
