/**
 * @jest-environment jsdom
 */
import Tasks from '../modules/manageTask';
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

