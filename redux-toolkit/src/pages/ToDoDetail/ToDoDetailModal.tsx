import React, { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import ToDoDetailButton from "./ToDoDetailButton";
import ToDoDetailSection from "./ToDoDetailSection";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, putPost } from "../../actions/PostAction";
import "../ToDoDetail/stylesToDoDetail/todoDetailModal.scss";
import { AppDispatch } from "../../Store";

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
  const dispatch: AppDispatch = useDispatch();

  let params = { title: upDateTitle, content: upDateContent };

  const handlePutToDo = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(putPost(params, id));
    navigate("/todos");
  };

  const handleDeleteToDo = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(deletePost(id));
    navigate("/todos");
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
