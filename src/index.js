import './style.css';
import editTask from './modules/edit.js';
import clearCompletedTasks from './modules/clear.js';
import updateTaskStatus from './modules/status.js';
import removeTask from './modules/delete.js';
import printTasks from './modules/display.js';
import addTask from './modules/addTask.js';

// Call the add task function
addTask();

// Call the Delete function
removeTask();

// Call the edit function
editTask();

// This function update the checkbox status
updateTaskStatus();

// This function clear completed task
clearCompletedTasks();

// Calling the display function
printTasks();