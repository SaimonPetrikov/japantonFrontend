import styled from 'styled-components';

import {ICarsStyledProps} from '../Cars.typings';

export const SelectionStyled = styled.div<ICarsStyledProps>`
  display: flex;
  justify-content: ${props => props.justifyContent};
  gap: 20px;
  margin-bottom: ${props => props.marginBottom};
`;

export const ItemStyled = styled.div`
  margin-top: 20px;
`;

export const ItemsHeadStyled = styled.div<ICarsStyledProps>`
  display: grid;
  grid-template-columns: ${props => props.gridTemplateColumns};
  background: rgba(69, 158, 216, 0.1);
  border-radius: 4px 4px 0 0;
  padding: 5px 15px;
`;

export const ItemCardStyled = styled.div`
  display: flex;
  gap: 10px;
`;

export const HeadersStyled = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #232323;
`;

export const SeparateLineStyled = styled.div`
  border-left: 2px solid #232323;
`;

export const ItemFieldsStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const BtnsStyled = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 20px;
`;

export const AddBtnStyled = styled.div`
  margin: 20px 0;
`;

export const UploadBtnsStyled = styled.div`
  display: flex;
  gap: 20px;
  margin: 20px 0;
`;

export const ChecksStyled = styled.div`
  display: flex;
  margin: 20px 0;
  gap: 60px;
`;

export const checkStyles = {
  color: '#606060',
  margin: 0
};
