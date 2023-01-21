import printTasks from './display.js';

const clearCompletedTasks = () => {
  const clearButton = document.getElementById('clear');
  clearButton.addEventListener('click', (e) => {
    e.preventDefault();
    let array = JSON.parse(localStorage.getItem('array') || '[]');
    array = array.filter((task) => task.completed === false);
    array.forEach((task, i) => { task.index = i + 1; });
    localStorage.setItem('array', JSON.stringify(array));
    printTasks();
  });
};

export default clearCompletedTasks;