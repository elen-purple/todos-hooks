import { TodoItem } from "../TodoItem/TodoItem";
import { List, Text } from "./TodoListStyled";

export const TodoList = ({ todos, changeState, filter }) => {
  return (
    <List onClick={changeState}>
      {todos.filter((todo) =>
        todo.text.toLowerCase().includes(filter.toLowerCase())
      ).length ? (
        todos
          .filter((todo) =>
            todo.text.toLowerCase().includes(filter.toLowerCase())
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
};
