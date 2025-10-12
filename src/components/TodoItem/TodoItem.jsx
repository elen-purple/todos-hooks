import { useState } from "react";
import { Checkbox, Div, Item, Wrap, Text, Delete } from "./TodoItemStyled";
import { IoMdCheckmark } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

export const TodoItem = ({ id, text, completed }) => {
  const [checked, setChecked] = useState(completed);

  const onConfirm = () => {
    setChecked(!checked);
  };

  return (
    <Item id={id}>
      <Wrap>
        <Checkbox
          type="checkbox"
          data-action="checkbox"
          checked={checked}
          onChange={onConfirm}
        />
        <Div $checked={checked}>
          {checked ? <IoMdCheckmark size="16" fill="#1c1c1c" /> : <></>}
        </Div>
      </Wrap>
      <Text checked={checked}>{text}</Text>
      <Delete type="button" data-action="delete">
        <IoMdClose size="16" fill="#1c1c1c" style={{ pointerEvents: "none" }} />
      </Delete>
    </Item>
  );
};
