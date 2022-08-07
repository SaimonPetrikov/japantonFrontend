import styled from 'styled-components';

export const CardStyled = styled.div`
  display: grid;
  grid-template-columns: 60px 211px 239px 236px 95px 163px 98px 104px 110px;
  padding: 5px 15px;
  align-items: center;
  border-bottom: 1px solid #606060;

  &:hover {
    background: rgba(96, 96, 96, 0.1);
  }
`;

export const BtnsStyled = styled.div`
  display: flex;
  gap: 28px;
  cursor: pointer;
`;
