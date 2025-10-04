import { Component } from "react";
import { Checkbox, Div, Item, Wrap, Text, Delete } from "./TodoItemStyled";
import { IoMdCheckmark } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

export class TodoItem extends Component {
  state = {
    checked: this.props.completed,
  };

  onConfirm = () => {
    this.setState((prevState) => {
      return { checked: !prevState.checked };
    });
  };

  render() {
    console.log(this.state.checked);
    return (
      <Item id={this.props.id}>
        <Wrap>
          <Checkbox
            type="checkbox"
            data-action="checkbox"
            checked={this.state.checked}
            onChange={this.onConfirm}
          />
          <Div $checked={this.state.checked}>
            {this.state.checked ? (
              <IoMdCheckmark size="16" fill="#1c1c1c" />
            ) : (
              <></>
            )}
          </Div>
        </Wrap>
        <Text checked={this.state.checked}>{this.props.text}</Text>
        <Delete type="button" data-action="delete">
          <IoMdClose
            size="16"
            fill="#1c1c1c"
            style={{ pointerEvents: "none" }}
          />
        </Delete>
      </Item>
    );
  }
}
