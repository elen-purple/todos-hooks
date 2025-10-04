import styled from "styled-components";

export const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.bg};
  height: 100vh;
  display: flex;
`;

export const Sidebar = styled.div`
  overflow: auto;
  min-width: 326px;
  border-right: 2px solid ${({ theme }) => theme.colors.black};

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
