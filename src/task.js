// Task management module
const MAX_LABELS = 5;

class Task {
    constructor(title, description) {
        this.id = Date.now();
        this.title = title;
        this.description = description;
        this.status = 'todo';
        this.createdAt = new Date();
        this.labels = [];
    }

    updateStatus(status) {
        const validStatuses = ['todo', 'in-progress', 'done'];
        if (validStatuses.includes(status)) {
            this.status = status;
        }
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

Task.MAX_LABELS = MAX_LABELS;

module.exports = Task;
