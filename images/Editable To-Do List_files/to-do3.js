
// document.addEventListener("DOMContentLoaded", () => {
//     const taskInput = document.getElementById("taskInput");
//     const addButton = document.getElementById("addButton");
//     const taskList = document.getElementById("taskList");
  

//     addButton.addEventListener("click", () => {
//       const taskText = taskInput.value.trim();
//       if (taskText) {
//         const listItem = document.createElement("li");
//         listItem.textContent = taskText;
  

//         listItem.addEventListener("click", () => {
//           listItem.classList.toggle("completed");
//         });
  
//         const deleteButton = document.createElement("button");
//         deleteButton.textContent = "Delete";
//         deleteButton.className = "delete-btn";
//         deleteButton.addEventListener("click", () => {
//           taskList.removeChild(listItem);
//         });
  
//         listItem.appendChild(deleteButton);
//         taskList.appendChild(listItem);
//         taskInput.value = "";
//       }
//     });
  

//     taskInput.addEventListener("keypress", (event) => {
//       if (event.key === "Enter") {
//         addButton.click();
//       }
//     });
//   });
  










// script.js
document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const addButton = document.getElementById("addButton");
  const taskList = document.getElementById("taskList");

  // Add a new task
  addButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
      createTask(taskText);
      taskInput.value = "";
    }
  });

  
  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addButton.click();
    }
  });

  
  function createTask(text) {
    const listItem = document.createElement("li");

    const taskSpan = document.createElement("span");
    taskSpan.textContent = text;
    taskSpan.className = "task-text";


    taskSpan.addEventListener("click", () => {
      listItem.classList.toggle("completed");
    });

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.className = "edit-btn";

    // Edit task on button click
    editButton.addEventListener("click", () => {
      const newTaskText = prompt("Edit your task:", taskSpan.textContent);
      if (newTaskText !== null && newTaskText.trim() !== "") {
        taskSpan.textContent = newTaskText.trim();
      }
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-btn";

    // Delete task on button click
    deleteButton.addEventListener("click", () => {
      taskList.removeChild(listItem);
    });

    listItem.appendChild(taskSpan);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);
  }
});




