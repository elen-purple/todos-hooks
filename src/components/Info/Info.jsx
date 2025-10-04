import { Div, Item, List, Title, Text, Num } from "./InfoStyled";

export const Info = ({ todos }) => {
  return (
    <Div>
      <Title>Stats</Title>
      <List>
        <Item>
          <Text>Tasks</Text>
          <Num>{todos.length}</Num>
        </Item>
        <Item>
          <Text>Completed</Text>
          <Num>{todos.filter((item) => item.completed).length}</Num>
        </Item>
      </List>
    </Div>
  );
};
