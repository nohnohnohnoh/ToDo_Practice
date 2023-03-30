import React from "react";
import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { toDoState, IToDo } from "../atom";

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const onClickSelcetor = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: name as any };
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };

  const onClickDelete = () => {
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      return [
        ...oldToDos.slice(0, targetIndex),
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };

  return (
    <Ul>
      <LI>
        <Span>{text}</Span>
        {category !== "DOING" && (
          <>
            <Button name="DOING" onClick={onClickSelcetor}>
              Doing
            </Button>
          </>
        )}
        {category !== "TO_DO" && (
          <>
            <Button name="TO_DO" onClick={onClickSelcetor}>
              To Do
            </Button>
          </>
        )}
        {category !== "DONE" && (
          <>
            <Button name="DONE" onClick={onClickSelcetor}>
              Done
            </Button>
          </>
        )}
        <Button onClick={onClickDelete}>X</Button>
      </LI>
    </Ul>
  );
}
const Ul = styled.ul`
  width: 100%;
  height: 5%;
`;

const LI = styled.li``;

const Span = styled.span`
  font-weight: bold;
`;

const Button = styled.button`
  border: 0;
  background-color: transparent;
  cursor: pointer;
`;

export default ToDo;
