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

describe('Task Labels', () => {
    test('should add a label', () => {
        const task = new Task('Test', 'Description');
        expect(task.addLabel('bug')).toBe(true);
        expect(task.labels).toEqual(['bug']);
    });

    test('should not add duplicate or empty labels', () => {
        const task = new Task('Test', 'Description');
        task.addLabel('bug');
        expect(task.addLabel('bug')).toBe(false);
        expect(task.addLabel('')).toBe(false);
        expect(task.labels).toEqual(['bug']);
    });

    test('should limit labels to MAX_LABELS', () => {
        const task = new Task('Test', 'Description');
        ['a', 'b', 'c', 'd', 'e'].forEach(l => task.addLabel(l));
        expect(task.addLabel('f')).toBe(false);
        expect(task.labels).toHaveLength(Task.MAX_LABELS);
    });
});
