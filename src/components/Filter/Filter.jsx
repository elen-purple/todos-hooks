import { IoMdSearch } from "react-icons/io";
import { Button, Div, Form, Input, Title } from "./FilterStyled";
import { useState } from "react";

export const Filter = ({ filterTasks }) => {
  const [value, setValue] = useState("");

  const onInput = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    filterTasks(e);
  };

  return (
    <Div>
      <Title>Search</Title>
      <Form onSubmit={onSubmit}>
        <label>
          <Input
            value={value}
            onInput={onInput}
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
};
