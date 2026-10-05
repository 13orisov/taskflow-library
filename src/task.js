// Task management module
const PRIORITIES = ['low', 'medium', 'high', 'urgent'];

class Task {
    /**
     * Create a task.
     * @param {string} title - Task title
     * @param {string} description - Task description
     */
    constructor(title, description) {
        this.id = Date.now();
        this.title = title;
        this.description = description;
        this.status = 'todo';
        this.createdAt = new Date();
        this.priority = 'medium';
    }

    /**
     * Update task status.
     * @param {string} status - 'todo' | 'in-progress' | 'done'
     */
    updateStatus(status) {
        const validStatuses = ['todo', 'in-progress', 'done'];
        if (validStatuses.includes(status)) {
            this.status = status;
        }
    }

    /**
     * Set task priority.
     * @param {string} priority - One of Task.PRIORITIES
     * @returns {boolean} true if priority was set
     */
    setPriority(priority) {
        if (PRIORITIES.includes(priority)) {
            this.priority = priority;
            return true;
        }
        return false;
    }
}

Task.PRIORITIES = PRIORITIES;

module.exports = Task;
