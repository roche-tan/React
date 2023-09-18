import { TodoItem } from "./TodoItem";

export function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="list">
      {todos.length === 0 && "No todos"} {/* short circuiting*/}
      {todos.map((todo) => {
        return (
          <TodoItem
            // id={todo.id}
            // completed={todo.completed}
            // title={todo.title}
            {...todo} //is the same as the above
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
}
