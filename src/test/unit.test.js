/**
 * @jest-environment jsdom
 */
import Tasks from '../modules/manageTask';
import editTask from '../modules/edit.js';

// import describe from 'node/test';
const obj = new Tasks();
   

describe('Add a chore to a task', () => {
    test('Add the first task', ()=> {
    obj.addTask('Hello World');
    obj.addTask('Second World');
    const array = JSON.parse(localStorage.getItem('array')) || [];
    expect(array).toHaveLength(2);
     });

    test('Check string the list ', ()=> {
    const array = JSON.parse(localStorage.getItem('array')) || [];
    expect(array).toStrictEqual([{ description:'Hello World', index: 1,completed : false},{ description:'Second World', index: 2,completed : false}]);
     })

     test('Check string the list ', ()=> {
        obj.addTask('Sundy Saturday');
        const array = JSON.parse(localStorage.getItem('array')) || [];
        expect(array[2].description).toStrictEqual('Sundy Saturday');
         })
})

describe('Test function for delete task', () => {

    test('Remove array with the index from the array', () => {
        obj.removeTask(2);
        const array = JSON.parse(localStorage.getItem('array')) || [];
        expect(array).toHaveLength(2);
     
    })

    // test('Check the value of the deleted task', () => {
    //     const removedTask = obj.removeTask(2);
    //     expect(removedTask.description.value).toStrictEqual('Second World');
    //     })
})


// describe('Test function for the edit function',() =>  {
//     beforeEach(() => {
//         obj.addTask('Hello World');
//     });
//     test('Test for edit function' , () => {
//        let item = document.createElement('input');
//        item.id = 1;
//        item.value = 'New Description';
//        let array = JSON.parse(localStorage.getItem('array')) || [];
//        editTask(item, array);
//        expect(array[0].description).toBe('New Description');
//     })
//    });

// import clearCompletedTasks from '../modules/clear.js';

// describe('Test function for clearCompletedTasks', () => {
//     test('Check if completed tasks are removed', () => {
//         const task1 = { description: 'Task 1', completed: true };
//         const task2 = { description: 'Task 2', completed: false };
//         const task3 = { description: 'Task 3', completed: true };
//         localStorage.setItem('array', JSON.stringify([task1, task2, task3]));

//         clearCompletedTasks();

//         const array = JSON.parse(localStorage.getItem('array') || '[]');
//         expect(array).toHaveLength(1);
//         expect(array[0]).toStrictEqual(task2);
//         expect(window.location.reload).toHaveBeenCalled();
//     });
// });
import clearCompletedTasks from '../modules/clear.js';

jest.mock('../modules/clear.js', () => {
  const originalModule = jest.requireActual('../modules/clear.js');
  return {
    ...originalModule,
    __esModule: true,
    default: jest.fn(),
  };
});

describe('Test function for clear completed tasks', () => {
    let array;
    beforeEach(() => {
        array = [{ description: 'Hello World', index: 1, completed: true },
                 { description: 'Second World', index: 2, completed: false },
                 { description: 'Sundy Saturday', index: 3, completed: true }];
        localStorage.setItem('array', JSON.stringify(array));
        window.location.reload = jest.fn();
        document.getElementById = jest.fn(() => ({
            addEventListener: jest.fn()
        }));
    });

    it('filters out completed tasks from the array', () => {
        clearCompletedTasks();
        array = JSON.parse(localStorage.getItem('array'));
        expect(array).toStrictEqual([{ description: 'Second World', index: 2, completed: false }]);
    });

    it('reloads the page', () => {
        clearCompletedTasks();
        expect(window.location.reload).toHaveBeenCalled();
    });
});
