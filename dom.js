// 8. Click counter
let clicks = 0;
const counterBtn = document.getElementById("counterBtn");
counterBtn.addEventListener("click", () => {
  clicks++;
  counterBtn.textContent = `Clicked ${clicks} times`;
});

// 9. To-do list (add and remove)
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");
document.getElementById("addBtn").addEventListener("click", () => {
  const text = todoInput.value.trim();
  if (!text) return;
  const li = document.createElement("li");
  li.textContent = text + " ";
  const del = document.createElement("button");
  del.textContent = "Remove";
  del.addEventListener("click", () => li.remove());
  li.appendChild(del);
  todoList.appendChild(li);
  todoInput.value = "";
});

// 10. Live character counter
const textBox = document.getElementById("textBox");
const charCount = document.getElementById("charCount");
textBox.addEventListener("input", () => {
  charCount.textContent = `${textBox.value.length} characters`;
});