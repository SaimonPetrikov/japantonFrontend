import styled from 'styled-components';
import {motion} from 'framer-motion';

import {IMenuStyledProps} from '../Menu.typings';

export const MenuStyled = styled.div`
  margin-top: 15px;
`;

export const CategoryStyled = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const FirstLvlStyled = styled.a<IMenuStyledProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-right: 15px;
  cursor: pointer;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  border-radius: 4px;
  height: 40px;
  padding: 8px 13px 8px 35px;
  background: ${props => props.backgroundColor};
  color: ${props => props.textColor};

  &:hover {
    background: ${props => (props.shouldHover ? '#60606019' : '#409DDA')};
    color: ${props => (props.shouldHover ? 'black' : 'white')};
  }
`;

export const FirstLvlItemStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 19px;
  width: 134px;
`;

export const FirstLvlMenuIconStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 27px;
`;

export const SecondLvlCategoryStyled = styled(motion.ul)`
  list-style: none;
  margin-left: 20px;
  gap: 15px;
`;

export const SecondLvlStyled = styled.a<IMenuStyledProps>`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-right: 15px;
  cursor: pointer;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  border-radius: 4px;
  height: 40px;
  padding: 8px 13px 8px 35px;
  color: ${props => props.textColor};

  &:hover {
    color: #459ED8;
  }
`;
