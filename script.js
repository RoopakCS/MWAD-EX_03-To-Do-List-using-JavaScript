const inputBox = document.getElementById("input-item");
const listContainer = document.getElementById("list-container");

function addTask() {
  const task = inputBox.value.trim();
  if (!task) {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `
            <label>
              <input type="checkbox" />
              <span>${task}</span>
            </label>
            <button class="edit-btn"><i class="fa fa-edit"></i></button>
            <button class="delete-btn"><i class="fa fa-trash"></i></button>`;

  listContainer.appendChild(li);

  inputBox.value = "";

  const checkBox = li.querySelector("input");
  const taskSpan = li.querySelector("span");
  const editBtn = li.querySelector(".edit-btn");
  console.log(editBtn);
  const deleteBtn = li.querySelector(".delete-btn");

  checkBox.addEventListener("click", () => {
    li.classList.toggle("completed", checkBox.checked);
  });

  editBtn.addEventListener("click", (e) => {
    const update = prompt("Edit task:", taskSpan.textContent);
    if (update !== null) {
      taskSpan.textContent = update;
      li.classList.remove("completed");
    }
  });

  deleteBtn.addEventListener("click", () => {
    if (confirm("Are you sure you want to delete this task?")) {
      li.remove();
    }
  });
}
