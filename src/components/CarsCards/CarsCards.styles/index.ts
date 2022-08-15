import styled from 'styled-components';

import {ICarsCardsStyledProps} from '../CarsCards.typings';

export const WrapStyled = styled.div`
  display: flex;
  border-bottom: 1px solid #606060;

  &:hover {
    background: rgba(96, 96, 96, 0.1);
  }
`;

export const CardStyled = styled.div<ICarsCardsStyledProps>`
  display: grid;
  grid-template-columns: ${props => props.gridTemplateColumns};
  gap: ${props => props.gap};
  padding: ${props => props.padding};
  align-items: center;
`;

export const ArchiveStyled = styled.div`
  cursor: pointer;
  align-self: center;
  margin-right: 50px;
  margin-left: 20px;
`;

export const DeleteStyled = styled.div`
  cursor: pointer;
  align-self: center;
  margin-left: 20px;
`;

export const PStyled = styled.p`
  font-weight: bold;
`;
