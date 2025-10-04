import { Div, Item, List, Title, Text } from "./AuthorStyled";

export const Author = () => {
  return (
    <Div>
      <Title>Made</Title>
      <List>
        <Item>
          <Text>on 24.08.25</Text>
        </Item>
        <Item>
          <Text>by Anna</Text>
        </Item>
      </List>
    </Div>
  );
};
