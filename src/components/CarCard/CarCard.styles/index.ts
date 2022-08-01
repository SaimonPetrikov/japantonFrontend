import styled from 'styled-components';

export const CarCardStyled = styled.div`
  display: grid;
  grid-template-columns: 50px 185px 240px 280px 220px 138px 98px 111px;
  padding: 5px 15px;
  align-items: center;
  border-bottom: 1px solid #606060;

  &:hover {
    background: rgba(96, 96, 96, 0.1);
  }
`;

export const ArchiveStyled = styled.div`
cursor: pointer;  
`;

export const DeleteStyled = styled.div`
cursor: pointer;  
`;

export const PStyled = styled.p`
font-weight: bold;
`;
