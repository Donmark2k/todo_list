import printTasks from './display.js';

export default function removeTask() {
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('row-btn')) {
      const id = Number(e.target.id.slice(10));
      let array = JSON.parse(localStorage.getItem('array')) || [];
      array = array.filter((task) => task.index !== id);
      array.forEach((task, i) => { task.index = i + 1; });
      localStorage.setItem('array', JSON.stringify(array));
      printTasks();
    }
  });
}
