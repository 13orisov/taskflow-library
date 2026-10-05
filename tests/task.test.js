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
