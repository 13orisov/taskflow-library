// Task board module
const Task = require('./task');

const VALID_STATUSES = ['todo', 'in-progress', 'done'];

class Board {
    /**
     * Create a board.
     * @param {string} name - Board name
     */
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }

    /**
     * Add a task to the board.
     * @param {Task} task - Task instance
     * @returns {boolean} true if task was added
     */
    addTask(task) {
        if (!(task instanceof Task)) {
            return false;
        }
        this.tasks.push(task);
        return true;
    }

    /**
     * Get tasks, optionally filtered by status.
     * @param {string} [status] - Status to filter by
     * @returns {Task[]} copy of the tasks array
     */
    getTasks(status) {
        if (status === undefined) {
            return [...this.tasks];
        }
        if (!VALID_STATUSES.includes(status)) {
            return [];
        }
        return this.tasks.filter(t => t.status === status);
    }
}

module.exports = Board;
