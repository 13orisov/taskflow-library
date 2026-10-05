// Task management module
const PRIORITIES = ['low', 'medium', 'high', 'urgent'];
const MAX_LABELS = 5;

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
        this.labels = [];
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

    /**
     * Add a label to the task.
     * @param {string} label - Label name
     * @returns {boolean} true if label was added
     */
    addLabel(label) {
        if (!label || this.labels.includes(label) || this.labels.length >= MAX_LABELS) {
            return false;
        }
        this.labels.push(label);
        return true;
    }
}

Task.PRIORITIES = PRIORITIES;
Task.MAX_LABELS = MAX_LABELS;

module.exports = Task;
