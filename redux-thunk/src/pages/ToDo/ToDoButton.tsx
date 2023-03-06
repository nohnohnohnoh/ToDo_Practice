import React, { useState } from "react";
import "./stylesToDo/todoButton.scss";
import ToDoLogOut from "./ToDoLogOut";

interface ToDoButtonProps {
  handleAddToDo: (e: React.FormEvent<HTMLButtonElement>) => void;
  type: string;
  content: string;
  handleToDo: (e: React.FormEvent<HTMLButtonElement>) => void;
}

const ToDoButton = ({
  handleAddToDo,
  type,
  content,
  handleToDo,
}: ToDoButtonProps) => {
  const [logOut, setLogOut] = useState(false);
  const typeChange = (e: React.FormEvent<HTMLButtonElement>) => {
    if (type === "todo") {
      handleToDo(e);
    } else if (type === "addtodo") {
      handleAddToDo(e);
    }
  };

  const handlemodal = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLogOut(!logOut);
  };

  return (
    <div className="todoButtonBox">
      {logOut && <ToDoLogOut handlemodal={handlemodal} />}
      <div className="todoButton">
        <button className="addTodoButton" onClick={typeChange}>
          {content}
        </button>
        {type == "todo" && (
          <button className="logOutButton" onClick={handlemodal}>
            LOG OUT
          </button>
        )}
      </div>
      <div className="todoBackBox">
        {type === "addtodo" && (
          <button onClick={handleToDo} className="backButton">
            뒤로가기
          </button>
        )}
      </div>
    </div>
  );
};

export default ToDoButton;
