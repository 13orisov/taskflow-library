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

describe('Task Priority', () => {
    test('should set valid priority', () => {
        const task = new Task('Test', 'Description');
        expect(task.setPriority('high')).toBe(true);
        expect(task.priority).toBe('high');
    });
});

describe('Task Priority validation', () => {
    test('should have medium priority by default', () => {
        const task = new Task('Test', 'Description');
        expect(task.priority).toBe('medium');
    });

    test('should reject invalid priority', () => {
        const task = new Task('Test', 'Description');
        expect(task.setPriority('critical')).toBe(false);
        expect(task.priority).toBe('medium');
    });

    test('should expose list of priorities', () => {
        expect(Task.PRIORITIES).toEqual(['low', 'medium', 'high', 'urgent']);
    });
});
