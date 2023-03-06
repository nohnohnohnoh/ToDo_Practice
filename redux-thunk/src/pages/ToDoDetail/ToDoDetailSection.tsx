import axios from "axios";
import React, { useState, useEffect } from "react";
import "./stylesToDoDetail/todoDetailSection.scss";

interface ToDoDetailSectionProps {
  type: string;
  onChangeupDateTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeupDateContent: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  id: string | undefined;
}

const ToDoDetailSection = ({
  type,
  onChangeupDateTitle,
  onChangeupDateContent,
  id,
}: ToDoDetailSectionProps) => {
  // const queryClient = useQueryClient();
  // console.log(queryClient);

  return (
    <>
      {type === "todoDetail" && (
        <div className="todoDetailSectionBox">
          {/* {isSuccess && (
            <div key={id} className="todoDetailSection">
              <div className="todoDetailTitle">{getDataDetail.data.title}</div>
              <div className="todoDetailConTent">
                {getDataDetail.data.content}
              </div>
            </div>
          )} */}
        </div>
      )}

      {type === "todoDetailUpdate" && (
        <div className="todoDetailSectionBox">
          <div className="updateInputBox">
            <input
              type="text"
              className="updateTitle"
              onChange={onChangeupDateTitle}
            />
            <textarea
              className="updateContent"
              onChange={onChangeupDateContent}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ToDoDetailSection;
