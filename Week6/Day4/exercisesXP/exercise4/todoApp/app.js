import { TodoList } from './todo.js';

const myTodoList = new TodoList();
myTodoList.addTodo('Learn Node.js', '2024-09-20', 'Education');
myTodoList.addTodo('Build a to-do app', '2024-09-25', 'Project');
console.log(myTodoList.getTodos());
myTodoList.updateTodoStatus(myTodoList.getTodos()[0].id, true);
console.log(myTodoList.getTodos());
myTodoList.removeTodo(myTodoList.getTodos()[0].id);
console.log(myTodoList.getTodos());
