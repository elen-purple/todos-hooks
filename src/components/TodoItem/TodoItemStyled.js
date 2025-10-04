import styled from "styled-components";

export const Item = styled.li`
  display: flex;
  width: 100%;
  max-width: 800px;
  padding: 20px 32px;
  align-items: center;
  border: 2px solid ${({ theme }) => theme.colors.black};
`;

export const Wrap = styled.div`
  width: 32px;
  height: 32px;
  position: relative;
`;

export const Checkbox = styled.input`
  width: 32px;
  height: 32px;
  opacity: 0;
  cursor: pointer;
`;

export const Div = styled.div`
  width: 32px;
  height: 32px;
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  border: 2px solid ${({ theme }) => theme.colors.black};
  background-color: ${({ $checked }) => ($checked ? `#5AC447` : `#FFFAF3`)};
  display: flex;
  align-items: center;
  justify-content: center;x
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-size: 14px;
  font-weight: 400;
  margin: 0 auto 0 20px;
`;

export const Delete = styled.button`
  border: 2px solid ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.red};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
`;
