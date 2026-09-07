import { useLocation } from 'react-router-dom';
import styled from '@emotion/styled';
import { Menu } from '~/pages/intro/IntroPage';
import { SectionMenu } from '~/components/common/SectionMenu/SectionMenu';
import colors from '~/lib/styles/colors';
import { media } from '~/styles/responsive';
import { MENU } from '../../constants/menus';

const IntroSectionMenu = styled(SectionMenu)`
  ${media.belowWide} {
    margin-bottom: 24px;

    ul {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 4px;
      overflow: visible;
      padding: 4px;
      border: 1px solid rgba(76, 55, 34, 0.06);
      border-radius: 14px;
      background: #f6f8f7;
      box-shadow: none;
    }

    li {
      min-width: 0;

      > a {
        width: 100%;
        min-height: 44px;
        margin: 0;
        padding: 10px 8px;
        border-radius: 10px;
        font-size: 0.9rem;
        line-height: 1.2;
      }

      > a[aria-current='page'] {
        background: ${colors.mint[0]};
        box-shadow: 0 1px 2px rgba(32, 49, 43, 0.06);
      }
    }
  }

  ${media.phone} {
    margin-bottom: 16px;

    ul {
      border-radius: 0;
      border-width: 1px 0;
    }
  }
`;

const IntroMenu = ({ menus }: { menus: Menu[] }) => {
  const location = useLocation();
  const currentLocation = location.pathname.replace('/intro', '');

  return (
    <IntroSectionMenu
      items={menus.map((menu) => ({
        label: menu.name,
        to: `/${MENU.INTRO}${menu.url}`,
        active: currentLocation === menu.url,
      }))}
    />
  );
};

export default IntroMenu;
