import { Component } from "react";
import { TodoItem } from "../TodoItem/TodoItem";
import { List, Text } from "./TodoListStyled";

export class TodoList extends Component {
  render() {
    return (
      <List onClick={this.props.changeState}>
        {this.props.todos.filter((todo) =>
          todo.text.toLowerCase().includes(this.props.filter.toLowerCase())
        ).length ? (
          this.props.todos
            .filter((todo) =>
              todo.text.toLowerCase().includes(this.props.filter.toLowerCase())
            )
            .map((todo) => (
              <TodoItem
                id={todo.id}
                key={todo.id}
                text={todo.text}
                completed={todo.completed}
              />
            ))
        ) : (
          <Text>There aren't any tasks similar to your fetch.</Text>
        )}
      </List>
    );
  }
}
