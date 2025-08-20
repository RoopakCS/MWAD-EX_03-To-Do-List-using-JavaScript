# MWAD-EX_03-To-Do-List-using-JavaScript
## Date: 20-08-2025

## AIM
To create a To-do Application with all features using JavaScript.

## ALGORITHM
### STEP 1
Build the HTML structure (index.html).

### STEP 2
Style the App (style.css).

### STEP 3
Plan the features the To-Do App should have.

### STEP 4
Create a To-do application using Javascript.

### STEP 5
Add functionalities.

### STEP 6
Test the App.

### STEP 7
Open the HTML file in a browser to check layout and functionality.

### STEP 8
Fix styling issues and refine content placement.

### STEP 9
Deploy the website.

### STEP 10
Upload to GitHub Pages for free hosting.

## PROGRAM
### index.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>To Do List</title>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.0/css/all.min.css"
      integrity="sha512-DxV+EoADOkOygM4IR9yXP8Sb2qwgidEmeqAEmDKIOfPRQZOWbXCzLC6vjbZyy0vPisbH2SyW27+ddLVCN+OMzQ=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <section class="hero">
      <div class="todo-container">
        <h1>TO DO LIST</h1>
        <div class="todo-form">
          <input type="text" placeholder="Enter a task" id="input-item" />
          <button type="submit" class="input-button" onclick="addTask()">
            ADD
          </button>
        </div>
        <h2>Task List</h2>
        <ul id="list-container"></ul>
      </div>
    </section>
    <script src="script.js"></script>
  </body>
</html>
```

### style.css
```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Poppins", sans-serif;
  background-color: #131314;
  color: white;
  text-align: center;
}

/* .hero {
    margin: auto;
    height: 100vh;
    } */

.todo-container {
  width: 400px;
  margin: 0 auto;
  background-color: #131314;
  margin-top: 40px;
  padding: 20px;
  /* border: 2px solid #0033ff; */
  border-radius: 15px;
  position: relative;
  line-height: 1.5;
}

.todo-container h1 {
  font-size: 2rem;
}

.todo-container::after,
.todo-container::before {
  content: "";
  position: absolute;
  height: 100%;
  width: 100%;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  z-index: -1;
  padding: 3px;
  border-radius: 15px;
  background-image: conic-gradient(orange, blue, orange);
}

.todo-container::before {
  filter: blur(1.5rem);
  opacity: 0.5;
}

.todo-container .todo-form #input-item {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #232426;
  caret-color: white;
  outline: none;
  color: #fff;
  margin: 10px 0;
}

.todo-container .todo-form .input-button {
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.todo-container #list-container li {
  list-style: none;
}

.todo-container #list-container li input {
  border: none;
}

.todo-container #list-container li button {
  background-color: transparent;
  cursor: pointer;
  background: none;
  border: none;
}

.todo-container #list-container li button i {
  color: white;
}

.todo-container #list-container .completed {
  text-decoration: line-through;
  color: grey;
}
```

### script.js
```js
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
```
## OUTPUT
![alt text](output.png)

## RESULT
The program for creating To-do list using JavaScript is executed successfully.
