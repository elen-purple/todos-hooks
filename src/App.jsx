import { useEffect, useState } from "react";
import initialTodos from "./data/todo.json";
import { TodoList } from "./components/TodoList/TodoList";
import { TodoEditor } from "./components/TodoEditor/TodoEditor";
import { nanoid } from "nanoid";
import { Info } from "./components/Info/Info";
import { Filter } from "./components/Filter/Filter";
import { GlobalStyles } from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/Theme";
import { Section, Sidebar } from "./AppStyled";
import { Author } from "./components/Author/Author";
import { setItem } from "./services/setItem";
import { getItem } from "./services/getItem";

const App = () => {
  const [todos, setTodos] = useState(
    getItem("todos") ? getItem("todos") : initialTodos
  );
  const [filter, setFilter] = useState("");

  useEffect(() => {
    if (!Object.keys(localStorage).includes("todos")) {
      setItem("todos", []);
    }
    setTodos(getItem("todos"));
  }, []);

  useEffect(() => {
    setItem("todos", todos);
  }, [todos]);

  const changeState = (e) => {
    if (e.target.dataset.action === "checkbox") {
      const myItem = e.target.parentElement.parentElement;
      const array = [...todos];
      array[
        array.indexOf(array.find((item) => item.id === myItem.id))
      ].completed = e.target.checked;
      setTodos(array);
    } else if (e.target.dataset.action === "delete") {
      const myItem = e.target.parentElement;
      const array = [...todos];
      array.splice(
        array.indexOf(array.find((item) => item.id === myItem.id)),
        1
      );
      setTodos(array);
    }
  };

  const addTask = (value) => {
    const array = [...todos];
    array.unshift({
      id: `id-${nanoid(8)}`,
      text: value,
      completed: false,
    });
    setTodos(array);
  };

  const filterTasks = (e) => {
    e.preventDefault();
    setFilter(e.target.elements.text.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Section>
        <Sidebar>
          <TodoEditor addTask={addTask} />
          <Filter filterTasks={filterTasks} />
          <Info todos={todos} />
          <Author />
        </Sidebar>
        <TodoList filter={filter} changeState={changeState} todos={todos} />
      </Section>
    </ThemeProvider>
  );
};

export default App;
