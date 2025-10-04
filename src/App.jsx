import { Component } from "react";
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

class App extends Component {
  state = {
    todos: initialTodos,
    filter: "",
  };

  changeState = (e) => {
    if (e.target.dataset.action === "checkbox") {
      const myItem = e.target.parentElement.parentElement;
      const array = [...this.state.todos];
      array[
        array.indexOf(array.find((item) => item.id === myItem.id))
      ].completed = e.target.checked;
      this.setState({ todos: array });
    } else if (e.target.dataset.action === "delete") {
      const myItem = e.target.parentElement;
      const array = [...this.state.todos];
      array.splice(
        array.indexOf(array.find((item) => item.id === myItem.id)),
        1
      );
      this.setState({ todos: array });
    }
  };

  addTask = (e) => {
    e.preventDefault();
    const array = [...this.state.todos];
    array.unshift({
      id: `id-${nanoid(8)}`,
      text: e.target.elements.text.value,
      completed: false,
    });
    this.setState({ todos: array });
  };

  filterTasks = (e) => {
    e.preventDefault();
    this.setState({ filter: e.target.elements.text.value });
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Section>
          <Sidebar>
            <TodoEditor addTask={this.addTask} />
            <Filter filterTasks={this.filterTasks} />
            <Info todos={this.state.todos} />
            <Author />
          </Sidebar>
          <TodoList
            filter={this.state.filter}
            changeState={this.changeState}
            todos={this.state.todos}
          />
        </Section>
      </ThemeProvider>
    );
  }
}

export default App;
