# TaskFlow API

## Classes
- `Task` - a single task (`src/task.js`)
- `Board` - a collection of tasks (`src/board.js`)

## Task Methods

### updateStatus(status)
Changes task status. Valid values: 'todo', 'in-progress', 'done'

### setPriority(priority)
Sets task priority. Valid values: 'low', 'medium', 'high', 'urgent'
Returns: boolean - true if priority was set
Default value: 'medium'. The list of valid values is available as `Task.PRIORITIES`.

### addLabel(label)
Adds a label to the task. Empty and duplicate labels are ignored.
A task can have at most 5 labels (`Task.MAX_LABELS`).
Returns: boolean - true if label was added
