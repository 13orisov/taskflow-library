const Task = require('../src/task');

describe('Task', () => {
    test('should create task with default status', () => {
        const task = new Task('Test', 'Description');
        expect(task.title).toBe('Test');
        expect(task.status).toBe('todo');
    });

    test('should update status to valid value', () => {
        const task = new Task('Test', 'Description');
        task.updateStatus('done');
        expect(task.status).toBe('done');
    });
});
