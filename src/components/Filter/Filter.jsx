import { Component } from "react";
import { IoMdSearch } from "react-icons/io";
import { Button, Div, Form, Input, Title } from "./FilterStyled";

export class Filter extends Component {
  state = {
    value: "",
  };

  onInput = (e) => {
    this.setState({ value: e.target.value });
  };

  onSubmit = (e) => {
    this.props.filterTasks(e);
  };

  render() {
    return (
      <Div>
        <Title>Search</Title>
        <Form onSubmit={this.onSubmit}>
          <label>
            <Input
              value={this.state.value}
              onInput={this.onInput}
              type="text"
              name="text"
              placeholder="Filter tasks..."
            />
          </label>
          <Button type="submit">
            <IoMdSearch
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
