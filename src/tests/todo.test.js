import TodoItem from '../modules/todo';

describe('TodoItem', () => {
    let todo;

    beforeEach(() => {
        todo = TodoItem('Test Title', 'Test Description', '2023-12-31', true);
    });

    test('should create a new todo item with given properties', () => {
        expect(todo.title).toBe('Test Title');
        expect(todo.description).toBe('Test Description');
        expect(todo.dueDate).toBe('2023-12-31');
        expect(todo.priority).toBe(true);
        expect(todo.isComplete).toBe(false);
    });

    test('should toggle completion status', () => {
        todo.toggleCompletion();
        expect(todo.isComplete).toBe(true);
        todo.toggleCompletion();
        expect(todo.isComplete).toBe(false);
    });

    test('should toggle priority status', () => {
        todo.toggleImportant();
        expect(todo.priority).toBe(false);
        todo.toggleImportant();
        expect(todo.priority).toBe(true);
    });

    test('should edit the title', () => {
        todo.editTitle('New Title');
        expect(todo.title).toBe('New Title');
    });

    test('should edit the description', () => {
        todo.editDescription('New Description');
        expect(todo.description).toBe('New Description');
    });

    test('should edit the due date', () => {
        todo.editDueDate('2024-01-01');
        expect(todo.dueDate).toBe('2024-01-01');
    });
});