import styled from 'styled-components';

export const LayoutStyled = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 50px auto;
  gap: 0;
  height: 100vh;
  grid-template-areas:
\t\t"header"
\t\t"body";
`;

export const HeaderStyled = styled.div`
  grid-area: header;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.black};
`;

export const BodyStyled = styled.div`
  grid-area: body;
  display: flex;
  justify-content: center;
`;

export const ChildrenStyled = styled.div`
  display: grid;
  grid-template-columns: 230px auto;
  grid-template-rows: 40px auto;
  grid-template-areas:
\t\t"sidebar pagesHeader"
\t\t"sidebar pagesBody";
  width: 1140px;
  gap: 50px;
`;

export const PagesHeaderStyled = styled.div`
  grid-area: pagesHeader;
`;

export const SidebarStyled = styled.div`
  grid-area: sidebar;
`;

export const PagesBodyStyled = styled.div`
  grid-area: pagesBody;
`;
