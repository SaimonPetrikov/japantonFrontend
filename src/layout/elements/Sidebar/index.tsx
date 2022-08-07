import {Menu} from '../../../components/Menu';
import SidebarLogo from '../../../assets/icons/Sidebar/Sidebar.icons/logo.png';
import UserAvatar from '../../../assets/icons/Sidebar/Sidebar.icons/userAvatar.png';
import {AuthResponse} from '../../../store/slices/Auth/authActionCreators/auth.typings';
import {useTypedSelector} from '../../../hooks/useTypedSelector';

import {SidebarStyled, LogoStyled, UserMail, UserName, UserStyled} from './Sidebar.styles';

export const Sidebar = (): JSX.Element => {
  const {payload} = useTypedSelector(state => state.auth);

  return (
    <SidebarStyled>
      <LogoStyled src={SidebarLogo} alt="Sidebar Logo" />
      <UserStyled>
        <img src={UserAvatar} alt="User Avatar"/>
        <div>
          <UserName>{(payload as AuthResponse).user.name}</UserName>
          <UserMail>{(payload as AuthResponse).user.email}</UserMail>
        </div>
      </UserStyled>
      <Menu />
    </SidebarStyled>
  );
};

export default Sidebar;
