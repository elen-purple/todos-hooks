import { Component } from "react";
import { FaPlus } from "react-icons/fa6";

import { Button, Div, Form, Input, Title } from "./TodoEditorStyled";

export class TodoEditor extends Component {
  state = {
    value: "",
  };

  onInput = (e) => {
    this.setState({ value: e.target.value });
  };

  onSubmit = (e) => {
    this.props.addTask(e);
    this.setState({ value: "" });
  };

  render() {
    return (
      <Div>
        <Title>Add</Title>
        <Form onSubmit={this.onSubmit}>
          <label>
            <Input
              required
              value={this.state.value}
              onInput={this.onInput}
              type="text"
              name="text"
              placeholder="Make a todo task..."
            />
          </label>
          <Button type="submit">
            <FaPlus
              size="16px"
              fill="#1c1c1c"
              style={{ pointerEvents: "none" }}
            />
          </Button>
        </Form>
      </Div>
    );
  }
}
