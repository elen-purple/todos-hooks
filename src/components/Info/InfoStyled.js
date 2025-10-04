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

export const List = styled.ul`
  border-top: 2px solid ${({ theme }) => theme.colors.black};
  border-bottom: 2px solid ${({ theme }) => theme.colors.black};
  display: flex;
`;

export const Item = styled.li`
  padding: 12px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 122px;
  &:first-child {
    border-right: 2px solid ${({ theme }) => theme.colors.black};
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 4px;
`;

export const Num = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 4px;
`;
