import React, { useState } from "react";
import ToDoModal from "./ToDoModal";
import "./stylesToDo/todo.scss";

const ToDo = () => {
  const [isToDoType, setISToDoType] = useState(true);

  const handleToDo = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setISToDoType(!isToDoType);
  };

  return (
    <div className="todo">
      <section className="todoBox">
        {isToDoType ? (
          <ToDoModal
            handleToDo={handleToDo}
            type="todo"
            title="TODO"
            content="ADD TODO"
          />
        ) : (
          <ToDoModal
            handleToDo={handleToDo}
            type="addtodo"
            title="ADD TODO"
            content="CREATE TODO"
          />
        )}
      </section>
    </div>
  );
};

export default ToDo;
