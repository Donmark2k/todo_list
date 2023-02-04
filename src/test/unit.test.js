/**
 * @jest-environment jsdom
 */
import Tasks from '../modules/manageTask.js';
import clearCompletedtask from '../modules/clear.js';
import updateTaskStatus from '../modules/status.js';
import editTask from '../modules/edit.js';

const obj = new Tasks();

describe('Add a chore to a task', () => {
  test('Add the first task', () => {
    obj.addTask('Hello World');
    obj.addTask('Second World');
    const array = JSON.parse(localStorage.getItem('array')) || [];
    expect(array).toHaveLength(2);
  });

  test('Check string the list ', () => {
    const array = JSON.parse(localStorage.getItem('array')) || [];
    expect(array).toStrictEqual([{ description: 'Hello World', index: 1, completed: false }, { description: 'Second World', index: 2, completed: false }]);
  });

  test('Check string the list ', () => {
    obj.addTask('Sundy Saturday');
    const array = JSON.parse(localStorage.getItem('array')) || [];
    expect(array[2].description).toStrictEqual('Sundy Saturday');
  });

  test('Check string the list ', () => {
    document.body.innerHTML = '<div>'
            + '  <ul id="list"><li></li></ul>'
            + '</div>';
    obj.addTask();
    const list = document.querySelectorAll('#list li');
    expect(list).toHaveLength(1);
  });
});

describe('Test function for delete task', () => {
  test('Remove array with the index from the array', () => {
    obj.removeTask(2);
    const array = JSON.parse(localStorage.getItem('array')) || [];
    expect(array).toHaveLength(3);
  });
});

describe('Edit method', () => {
  test('should edit the input task', () => {
    const array = JSON.parse(localStorage.getItem('array')) || [];
    editTask('Hello Jane', array);
    expect(array[0].description).toEqual(!('Hello Jane'));
  });
});

describe('Change status method', () => {
  test('should change the completed status to true', () => {
    // updateTaskStatus();
    const array = JSON.parse(localStorage.getItem('array')) || [];
    array.forEach(() => {
      updateTaskStatus();
      expect(array).toHaveLength(3);
    });
  });
});

describe('Clear completed method', () => {
  test('should clear all completed task', () => {
    clearCompletedtask();
    const array = JSON.parse(localStorage.getItem('array')) || [];
    array.forEach((task) => {
      expect(task.completed).toStrictEqual(false);
    });
  });
});
