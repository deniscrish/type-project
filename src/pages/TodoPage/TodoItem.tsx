import { FC } from "react";
import { ITodo } from "../../types/data";

interface ITodoItem extends ITodo {
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

export const TodoItem: FC<ITodoItem> = (props) => {
  const { id, title, complete, toggleTodo, removeTodo } = props;
  return (
    <div style={{ margin: "3px" }}>
      <input
        type="checkbox"
        checked={complete}
        onChange={() => toggleTodo(id)}
      />
      {title}
      <button
        style={{
          background: "transparent",
          border: "none",
          outline: "none",
          color: "red",
          marginLeft: "5px"
        }}
        onClick={() => removeTodo(id)}
      >
        x
      </button>
    </div>
  );
};
