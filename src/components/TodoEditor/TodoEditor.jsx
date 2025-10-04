import { FaPlus } from "react-icons/fa6";
import { Button, Div, Form, Input, Title } from "./TodoEditorStyled";
import { useState } from "react";

export const TodoEditor = ({ addTask }) => {
  const [value, setValue] = useState("");

  const onInput = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(addTask(e.target.elements.text.value));
    setValue("");
  };

  return (
    <Div>
      <Title>Add</Title>
      <Form onSubmit={onSubmit}>
        <label>
          <Input
            required
            value={value}
            onInput={onInput}
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
};
