import TodoList from '../modules/list';
import TodoItem from '../modules/todo';

describe('TodoList', () => {
    let todoList;

    beforeEach(() => {
        todoList = TodoList('My Todo List');
    });

    test('should create a new todo list with a name', () => {
        expect(todoList.name).toBe('My Todo List');
        expect(todoList.todos).toEqual([]);
    });

    test('should add a todo item to the list', () => {
        const todo = TodoItem('Test Title', 'Test Description', '2023-12-31', true);
        todoList.addTodo(todo);
        expect(todoList.getTodos()).toContain(todo);
    });

    test('should remove a todo item from the list by title', () => {
        const todo1 = TodoItem('Test Title1', 'Test Description', '2023-12-31', true);
        const todo2 = TodoItem('Test Title', 'Test Description', '2023-12-31', true);
        todoList.addTodo(todo1);
        todoList.addTodo(todo2);
        todoList.removeTodo('Test Title1');
        expect(todoList.getTodos()).not.toContain(todo1);
        expect(todoList.getTodos()).toContain(todo2);
    });

    test('should retrieve all todo items from the list', () => {
        const todo1 = TodoItem('Test Title', 'Test Description', '2023-12-31', true);
        const todo2 = TodoItem('Test Title', 'Test Description', '2023-12-31', true);
        todoList.addTodo(todo1);
        todoList.addTodo(todo2);
        expect(todoList.getTodos()).toEqual([todo1, todo2]);
    });
});