import React, { useState, useEffect } from "react";
import ToDoModalSection from "./ToDoModalSection";
import ToDoButton from "./ToDoButton";
import { RootState, AppDispatch } from "../../Store";
import "./stylesToDo/todoModal.scss";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../../actions/PostAction";

interface ToDoModalProps {
  handleToDo: (e: React.FormEvent<HTMLButtonElement>) => void;
  type: string;
  title: string;
  content: string;
}

const ToDoModal = ({ title, type, handleToDo, content }: ToDoModalProps) => {
  const [addTitle, setAddTitle] = useState("");
  const [addContent, setAddContent] = useState("");

  const dispatch: AppDispatch = useDispatch();
  let params = { title: addTitle, content: addContent };
  const handleAddToDo = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(addPost(params));
    handleToDo(e);
  };

  const onChangeAddTilte = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setAddTitle(value);
  };

  const onChangeAddContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setAddContent(value);
  };

  return (
    <form className="toDoForm">
      <div className="toDoLogoBox">
        <header className="toDoLogo">{title}</header>
      </div>
      <ToDoModalSection
        onChangeAddTilte={onChangeAddTilte}
        onChangeAddContent={onChangeAddContent}
        type={type}
      />
      <ToDoButton
        handleAddToDo={handleAddToDo}
        type={type}
        content={content}
        handleToDo={handleToDo}
      />
    </form>
  );
};

export default ToDoModal;
