import { Component } from "react";
import { Div, Item, List, Title, Text, Num } from "./InfoStyled";

export class Info extends Component {
  render() {
    return (
      <Div>
        <Title>Stats</Title>
        <List>
          <Item>
            <Text>Tasks</Text>
            <Num>{this.props.todos.length}</Num>
          </Item>
          <Item>
            <Text>Completed</Text>
            <Num>
              {this.props.todos.filter((item) => item.completed).length}
            </Num>
          </Item>
        </List>
      </Div>
    );
  }
}
