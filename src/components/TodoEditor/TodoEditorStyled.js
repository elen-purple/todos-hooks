import styled from "styled-components";

export const Div = styled.div`
  padding: 40px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.black};
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.black};
  font-size: 24px;
  margin-bottom: 12px;
  font-weight: 400;
`;

export const Form = styled.form`
  display: flex;
  gap: 12px;
`;

export const Input = styled.input`
  background-color: ${({ theme }) => theme.colors.bg};
  width: 200px;
  padding: 0 12px;
  height: 32px;
  border: 2px solid ${({ theme }) => theme.colors.black};
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.black};
  font-family: "Montserrat", sans-serif;
  border-radius: 0;

  &::placeholder {
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const Button = styled.button`
  min-width: 32px;
  height: 32px;
  line-height: 0;
  background-color: ${({ theme }) => theme.colors.bg};
  border: 2px solid ${({ theme }) => theme.colors.black};
  &:hover {
    background-color: ${({ theme }) => theme.colors.green};
  }
`;
