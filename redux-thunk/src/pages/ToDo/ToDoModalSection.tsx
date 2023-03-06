import React, { useState, useEffect, ReactNode } from "react";
import "./stylesTodo/todoModalSection.scss";
import { useNavigate, useParams } from "react-router-dom";

interface ToDoModalSectionProps {
  onChangeAddTilte: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeAddContent: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  type: string;
}

const ToDoModalSection = ({
  onChangeAddTilte,
  onChangeAddContent,
  type,
}: ToDoModalSectionProps) => {
  const navigate = useNavigate();

  return (
    <>
      {type === "todo" && (
        <div className="todoSectionBox">
          {/* <div className="todoSectionList">
            {isSuccess &&
              getToDo.data.map(({ title, id }: ToDo) => (
                <div
                  key={id}
                  onClick={() => navigate(`/todos/${id}`)}
                  className="todoList"
                >
                  {title}
                </div>
              ))}
          </div> */}
        </div>
      )}
      {type === "addtodo" && (
        <div className="todoSectionBox">
          <div className="sectionInputBox">
            <input
              className="sectionInputTitle"
              placeholder="title을 입력해주세요"
              type="text"
              onChange={onChangeAddTilte}
            />
            <textarea
              className="sectionInputContent"
              placeholder="content를 입력해주세요"
              onChange={onChangeAddContent}
            />
          </div>
        </div>
      )}
    </>
  );
};
export default ToDoModalSection;
