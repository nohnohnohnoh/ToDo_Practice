# Reocil을 이용한 ToDo

- Recoil의 학습 목적으로 간단한 css ui의 Recoil Todo
- Recoil을 이용해 TodoList 관리 Todo생성, Todo category, deleteTodo
- Recoil을 이용한 dark Light mode 생성.

```javascript
// atom
import { atom, selector } from "recoil";

export interface IToDo {
  text: string;
  id: number;
  category: "TO_DO" | "DOING" | "DONE";
}

export const darkMode = atom({
  key: "mode",
  default: false,
});

export const categoryState = atom({
  key: "category",
  default: "TO_DO",
});

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);
  },
});

```

```javascript
// useRecoilVaule useRecoilState useSetRecoilState
const toDos = useRecoilValue(toDoSelector);
const [category, setCategory] = useRecoilState(categoryState);
const setDark = useSetRecoilState(darkMode);
```
