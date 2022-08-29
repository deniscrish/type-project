import { FC, useState, useRef, useEffect } from "react";
import "./TodoPage.scss";
import { ITodo } from "../../types/data";
import { TodoList } from "./TodoList";

export const TodoPage: FC = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState<ITodo[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") addTodo();
  };

  const addTodo = () => {
    console.log(`Add todo`);
    if (value) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          title: value,
          complete: false,
        },
      ]);
      setValue("");
    }
  };

  const removeTodo = (id: number): void => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const toggleTodo = (id: number): void => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo;

        return { ...todo, complete: !todo.complete };
      })
    );
  };

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  return (
    <div className="todo-page_big-block">
      <h3 style={{ margin: "1rem" }}>TodoList</h3>
      <div>
        <input
          value={value}
          onChange={handleChange}
          className="todo-page_input"
          placeholder="enter todo"
          ref={inputRef}
          onKeyDown={handleKeyDown}
        />
        <button className="todo-page_btn" onClick={addTodo}>
          Add todo
        </button>
      </div>
      <TodoList items={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
    </div>
  );
};
