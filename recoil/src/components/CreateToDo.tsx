import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { toDoState } from "../atom";
import styled from "styled-components";

interface IForm {
  toDo: string;
}

function CreateToDo() {
  const [toDoValue, setToDoValue] = useState("");
  const setToDos = useSetRecoilState(toDoState);
  const submitValid = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setToDos((oldToDos) => [
      { text: toDoValue, id: Date.now(), category: "TO_DO" },
      ...oldToDos,
    ]);
    setToDoValue("");
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setToDoValue(value);
  };

  return (
    <Form onSubmit={submitValid}>
      <Input
        value={toDoValue}
        onChange={onChange}
        placeholder="ToDo를 작성해주세요"
      />
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Input = styled.input`
  width: 500px;
  height: 50px;
  font-size: 23px;
`;

export default CreateToDo;
