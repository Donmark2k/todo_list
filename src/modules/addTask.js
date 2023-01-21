import Tasks from './manageBooks.js';

const addTask = () => {
  const inputForm = document.getElementById('input-form');
  const description = document.getElementById('input-task');
  const message = document.getElementById('message');

  inputForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (description === '') {
      document.getElementById('message').innerHTML = '*Please add a task to the list.';
      message.style.color = 'red';
    } else {
      const array = JSON.parse(localStorage.getItem('array')) || [];
      const newBook = new Tasks(description.value);
      array.push(newBook);
      array.forEach((work, i) => {
        work.index = i + 1;
      });
      localStorage.setItem('array', JSON.stringify(array));
      document.getElementById('message').innerHTML = '*New task added successfully.';
      message.style.color = 'green';
    }
    window.location.reload();
    description.value = '';
  });
};
export default addTask;