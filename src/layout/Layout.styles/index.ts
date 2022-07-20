import styled from 'styled-components';

export const LayoutStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.black};
`;

export const ButtonsStyled = styled.div`
  display: flex;
  gap: 10px;
`;

export const ChildrenStyled = styled.div`
  width: 1140px;
`;
