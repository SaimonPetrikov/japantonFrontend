import {FC} from 'react';

import { HeaderStyled } from './HeaderPage.styles';
import {IHeaderPageProps} from './HeaderPage.typings';


const HeaderPage: FC<IHeaderPageProps> = ({children}) => {
  return (
    <HeaderStyled>{children}</HeaderStyled>
  );
};

export default HeaderPage;
