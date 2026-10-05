const Board = require('../src/board');
const Task = require('../src/task');

describe('Board', () => {
    test('should add only Task instances', () => {
        const board = new Board('Main');
        expect(board.addTask(new Task('A', 'a'))).toBe(true);
        expect(board.addTask({ title: 'fake' })).toBe(false);
        expect(board.getTasks()).toHaveLength(1);
    });

    test('should filter tasks by status', () => {
        const board = new Board('Main');
        const t1 = new Task('A', 'a');
        const t2 = new Task('B', 'b');
        t2.updateStatus('done');
        board.addTask(t1);
        board.addTask(t2);
        expect(board.getTasks('done')).toEqual([t2]);
        expect(board.getTasks('unknown')).toEqual([]);
    });

    test('getTasks should return a copy', () => {
        const board = new Board('Main');
        board.addTask(new Task('A', 'a'));
        board.getTasks().push('garbage');
        expect(board.getTasks()).toHaveLength(1);
    });
});
