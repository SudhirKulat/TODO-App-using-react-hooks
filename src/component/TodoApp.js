import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const TodoApp = () => {
  const [todoItem, setTodoItem] = React.useState([]);

  const onSubmitTodo = (item) => {
    if (item == undefined || item == null || item == '') {
      return;
    }
    const newTodoList = [item, ...todoItem];
    setTodoItem(newTodoList);
  };
  return (
    <>
      <TodoForm onSubmitTodo={onSubmitTodo} />
      <TodoList items={todoItem} />
      <button onClick={() => setTodoItem([])}>Clear List</button>
    </>
  );
};

export default TodoApp;
