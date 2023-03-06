import React, { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import ToDoDetailButton from "./ToDoDetailButton";
import ToDoDetailSection from "./ToDoDetailSection";
import "../ToDoDetail/stylesToDoDetail/todoDetailModal.scss";

interface ToDoDetailModalProps {
  type: string;
  title: string;
  content: string;
  handleToDoDeatilType: (e: React.FormEvent<HTMLButtonElement>) => void;
}

const ToDoDetailModal = ({
  type,
  title,
  content,
  handleToDoDeatilType,
}: ToDoDetailModalProps) => {
  const [upDateTitle, setUpDateTitle] = useState("");
  const [upDateContent, setUpDateContent] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const handlePutToDo = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  const handleDeleteToDo = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  const onChangeupDateTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setUpDateTitle(value);
  };

  const onChangeupDateContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setUpDateContent(value);
  };

  return (
    <form className="toDoDetailForm">
      <div className="toDoDetailLogoBox">
        <header className="toDoDetailLogo">{title}</header>
      </div>
      <ToDoDetailSection
        id={id}
        type={type}
        onChangeupDateTitle={onChangeupDateTitle}
        onChangeupDateContent={onChangeupDateContent}
      />
      <ToDoDetailButton
        id={id}
        type={type}
        content={content}
        handleToDoDeatilType={handleToDoDeatilType}
        handlePutToDo={handlePutToDo}
        handleDeleteToDo={handleDeleteToDo}
      />
    </form>
  );
};

export default ToDoDetailModal;
