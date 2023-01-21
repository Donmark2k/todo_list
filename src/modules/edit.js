import printTask from './display.js';

export default function editTask() {
  const displayContainer = document.getElementById('do-list');
  const array = JSON.parse(localStorage.getItem('array')) || [];
  displayContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('task-list')) {
      const item = e.target;
      item.addEventListener('focusout', () => {
        array.forEach((task) => {
          if (task.index === parseInt(item.id, 10)) {
            task.description = item.value;
            localStorage.setItem('array', JSON.stringify(array));
            printTask();
          }
        });
      });
      item.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
          array.forEach((task) => {
            if (task.index === parseInt(item.id, 10)) {
              task.description = item.value;
              localStorage.setItem('array', JSON.stringify(array));
              printTask();
            }
          });
        }
      });
    }
  });
}
