import { v4 as uuidv4 } from 'uuid';

export class TodoList {
  constructor() {
    // creates an array of objects to operate with
    this.todos = [];
  }

  addTodo(task, deadline, category, completed = false) {
    // imprtant not to have id as a parameter of a function here!
    // program does not care of the names, only about the order of params
    const todo = {
      id: uuidv4(), // Generate a unique ID
      task,
      deadline,
      category,
      completed
    };
    this.todos.push(todo);
  }

  getTodos() {
    return this.todos;
  }

  updateTodoStatus(id, completed) {
    const todo = this.todos.find(todo => todo.id === id);
    if (todo) {
      todo.completed = completed;
    }
  }

  removeTodo(id) {
    // use filter to remove todo with specified id from an array
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
}
