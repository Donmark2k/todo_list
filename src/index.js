import './style.css';
import Tasks from './modules/manageTask.js';
import editTask from './modules/edit.js';

const displayContainer = document.getElementById('do-list');

// Display the book in the array
function printTasks() {
  const array = JSON.parse(localStorage.getItem('array')) || [];
  let innerhtml = '';

  array.forEach((task) => {
    innerhtml += `
    <div class="each-row">
    <div class="row-info">
    <input  type="checkbox" class="check" id="input${task.index}">
     <input id="${task.index}" class="task-list list" value="${task.description}"></div>
     <button  type="button" id="remove-btn${task.index}" class="row-btn material-symbols-outlined">
     do_not_disturb_on
    </button>
   </div>
   `;
  });

  const doList = document.querySelector('#do-list');
  const inputForm = document.getElementById('input-form');
  const description = document.getElementById('input-task');

  // Calling the event listener when the form is submitted

  inputForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const obj = new Tasks();
    obj.addTask(description.value);
    printTasks();

    description.value = '';
  });

  doList.innerHTML = innerhtml;
}

// Call the Delete function
displayContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('row-btn')) {
    const initialID = e.target.id;
    const { length } = initialID;
    const id = initialID.slice(10, length);
    const finalID = Number(id);
    const obj = new Tasks();
    obj.removeTask(finalID);
    printTasks();
  }
});

// Edit task

const array = JSON.parse(localStorage.getItem('array')) || [];
displayContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('task-list')) {
    editTask(e.target, array);
  }
});

// Calling the display function
printTasks();