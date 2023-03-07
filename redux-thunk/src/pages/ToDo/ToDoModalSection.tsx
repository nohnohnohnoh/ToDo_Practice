import React, { useEffect } from "react";
import "./stylesToDo/todoModalSection.scss";
import { useNavigate, useParams } from "react-router-dom";
import { RootState, AppDispatch } from "../../Store";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../../actions/PostAction";

interface ToDoModalSectionProps {
  onChangeAddTilte: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeAddContent: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  type: string;
}

interface postModal {
  title: string;
  id: string;
}

const ToDoModalSection = ({
  onChangeAddTilte,
  onChangeAddContent,
  type,
}: ToDoModalSectionProps) => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const posts: any = useSelector((state: RootState) => state.posts.data);
  console.log("post", posts);
  useEffect(() => {
    dispatch(getPost());
  }, []);

  return (
    <>
      {type === "todo" && (
        <div className="todoSectionBox">
          <div className="todoSectionList">
            {posts &&
              posts.map(({ title, id }: postModal) => {
                return (
                  <div
                    key={id}
                    onClick={() => navigate(`/todos/${id}`)}
                    className="todoList"
                  >
                    {title}
                  </div>
                );
              })}
          </div>
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
