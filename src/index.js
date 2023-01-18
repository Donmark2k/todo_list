import './style.css';

const array = [
  {
    description: 'wake up',
    completed: true,
    index: 1,
  },

  {
    description: 'dress my bed',
    completed: true,
    index: 4,
  },

  {
    description: 'brush my teeth',
    completed: true,
    index: 2,
  },

  {
    description: 'clean the house',
    completed: true,
    index: 3,
  },
  {
    description: 'bath',
    completed: true,
    index: 2,
  },

  {
    description: 'get ready for meeting',
    completed: true,
    index: 3,
  },

];

const activities = document.getElementById('do-list');
for (let i = 0; i < array.length; i += 1) {
  activities.innerHTML += `
  
  <div class="each-row">
    <div>
    <input  type="checkbox" class="check" id="input${array[i].index}">
    <input id="${array[i].index}" class="task-item" value="${array[i].description}"></div>
    <button id="row-btn"><i class="fa-solid fa-ellipsis-vertical"></i></button>
  
</div>
      `;
}
