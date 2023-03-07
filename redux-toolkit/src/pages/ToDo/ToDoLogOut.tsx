import React from "react";
import { useNavigate } from "react-router-dom";
import "./stylesToDo/todoLogOut.scss";

interface ToDoLogOutProps {
  handlemodal: (e: React.FormEvent<HTMLButtonElement>) => void;
}

const ToDoLogOut = ({ handlemodal }: ToDoLogOutProps) => {
  const navigate = useNavigate();

  const handleLogOut = (e: React.FormEvent<HTMLButtonElement>) => {
    localStorage.clear();
    navigate("/auth");
  };
  return (
    <div className="todoLogOut">
      <header className="logOut">LogOut</header>
      <div className="buttonBox">
        <button onClick={handleLogOut} className="todoYes">
          YES
        </button>
        <button onClick={handlemodal} className="todoNo">
          NO
        </button>
      </div>
    </div>
  );
};

export default ToDoLogOut;
