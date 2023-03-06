import React, { useState } from "react";
import ToDoDetailModal from "./ToDoDetailModal";
import "./stylesToDoDetail/todoDetail.scss";

const ToDoDetail = () => {
  const [ToDoDetailType, setISToDoDetailType] = useState(true);

  const handleToDoDeatilType = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setISToDoDetailType(!ToDoDetailType);
  };

  return (
    <div className="todoDetail">
      <section className="todoDetailBox">
        {ToDoDetailType ? (
          <ToDoDetailModal
            type="todoDetail"
            title="DETAIL TODO"
            content="MODIFY"
            handleToDoDeatilType={handleToDoDeatilType}
          />
        ) : (
          <ToDoDetailModal
            type="todoDetailUpdate"
            title="MODIFY TODO"
            content="MODIFY TODO"
            handleToDoDeatilType={handleToDoDeatilType}
          />
        )}
      </section>
    </div>
  );
};

export default ToDoDetail;
