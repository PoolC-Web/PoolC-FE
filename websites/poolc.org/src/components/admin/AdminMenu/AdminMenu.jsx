import { withRouter } from 'react-router';
import { MENU } from '../../../constants/menus';
import { SelectedLinkButton } from '../../../styles/common/Button.styles';
import { MenuBlock, MenuItem, MenuList } from '../../../styles/common/Menu.styles';
import LinkButton from '../../common/Buttons/LinkButton';

const AdminMenu = ({ menus, location }) => {
  const currentLocation = location.pathname.replace('/admin', '');
  return (
    <MenuBlock>
      <MenuList>
        {menus.map((menu) => (
          <MenuItem key={menu.url}>
            {currentLocation === menu.url
              ? <SelectedLinkButton to={`/${MENU.ADMIN}${menu.url}`}>{menu.name}</SelectedLinkButton>
              : <LinkButton to={`/${MENU.ADMIN}${menu.url}`}>{menu.name}</LinkButton>}
          </MenuItem>
        ))}
      </MenuList>
    </MenuBlock>
  );
};

export default withRouter(AdminMenu);
