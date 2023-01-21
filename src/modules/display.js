const printTasks = () => {
  const array = JSON.parse(localStorage.getItem('array')) || [];
  let innerhtml = '';
  let checker = '';

  array.forEach((task) => {
    if (task.completed === false) {
      checker = '';
    } else {
      checker = 'checked';
    }

    innerhtml += `
      <div class="each-row">
      <div class="row-info">
      <input ${checker} type="checkbox" class="check" id="input${task.index}">
       <input id="${task.index}" class="task-list list" value="${task.description}"></div>
       <button  type="button" id="remove-btn${task.index}" class="row-btn material-symbols-outlined">
       do_not_disturb_on
      </button>
     </div>
     `;
  });

  const doList = document.querySelector('#do-list');

  doList.innerHTML = innerhtml;
};

export default printTasks;