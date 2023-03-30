import { useRecoilValue, useRecoilState, useSetRecoilState } from "recoil";
import { toDoSelector, categoryState } from "../atom";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";
import styled from "styled-components";
import { darkMode } from "../atom";

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const setDark = useSetRecoilState(darkMode);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value);
  };
  const darkOnclick = () => {
    setDark((prev) => !prev);
  };
  return (
    <ToDoListBox>
      <ToDoLoGo>
        <CreateToDo />
      </ToDoLoGo>
      <DarkButton onClick={darkOnclick}>Change Mode</DarkButton>
      <ToDoBox>
        <Select value={category} onInput={onInput}>
          <Option value="TO_DO">To Do</Option>
          <Option value="DOING">Doing</Option>
          <Option value="DONE">Done</Option>
        </Select>
        {toDos?.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ToDoBox>
    </ToDoListBox>
  );
}

const ToDoListBox = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.bgColor};
`;
const ToDoLoGo = styled.div`
  text-align: center;
`;

const DarkButton = styled.button`
  border: 0;
  background-color: transparent;
  cursor: pointer;
  position: fixed;
  right: 25%;
  color: pink;
`;

const ToDoBox = styled.div`
  width: 30%;
  height: 80%;
  margin-top: 2%;
  box-shadow: 4px 5px 10px rgb(0 0 0 / 50%);
  border-radius: 20px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
`;

const Select = styled.select`
  width: 100px;
  padding: 0.8em 0.5em;
  border: 1px solid #999;
  border-radius: 0px;
  position: fixed;
  top: 5%;
  left: 80%;
  transform: translate(-5%, -80%);
`;
const Option = styled.option``;
export default ToDoList;
