import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 60px 40px;
  overflow: auto;
  width: 100%;
  align-items: center;

  &::-webkit-scrollbar {
    width: 2px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.black};
  }
  &::-webkit-scrollbar-thumb:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.colors.black};
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-size: 20px;
  font-weight: 400;
`;
