import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./stylesToDoDetail/todoDetailButton.scss";

interface ToDoDetailButtonProps {
  type: string;
  content: string;
  id: string | undefined;
  handleToDoDeatilType: (e: React.FormEvent<HTMLButtonElement>) => void;
  handlePutToDo: (e: React.FormEvent<HTMLButtonElement>) => void;
  handleDeleteToDo: (e: React.FormEvent<HTMLButtonElement>) => void;
}

const ToDoDetailButton = ({
  type,
  content,
  id,
  handleToDoDeatilType,
  handlePutToDo,
  handleDeleteToDo,
}: ToDoDetailButtonProps) => {
  const navigate = useNavigate();

  const handleModify = (e: React.FormEvent<HTMLButtonElement>) => {
    if (type === "todoDetail") {
      handleToDoDeatilType(e);
    } else if (type === "todoDetailUpdate") {
      handlePutToDo(e);
    }
  };

  const backNavigate = (e: React.FormEvent<HTMLButtonElement>) => {
    if (type === "todoDetail") {
      navigate("/todos");
    } else if (type === "todoDetailUpdate") {
      handleToDoDeatilType(e);
    }
  };

  return (
    <div className="todoDetailButtonBox">
      <div className="todoDetailButton">
        <button className="updateButton" onClick={handleModify}>
          {content}
        </button>
        {type === "todoDetail" && (
          <button className="deleteButton" onClick={handleDeleteToDo}>
            DELETE
          </button>
        )}
      </div>
      <div className="todoDetailBackBox">
        <button className="backButton" onClick={backNavigate}>
          뒤로가기
        </button>
      </div>
    </div>
  );
};

export default ToDoDetailButton;
