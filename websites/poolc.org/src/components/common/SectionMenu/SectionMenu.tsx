import { ReactNode } from 'react';
import LinkButton from '~/components/common/Buttons/LinkButton';
import { SelectedLinkButton } from '~/styles/common/Button.styles';
import { MenuBlock, MenuItem, MenuList } from '~/styles/common/Menu.styles';

export type SectionMenuItem = {
  label: ReactNode;
  to: string;
  active?: boolean;
};

type SectionMenuProps = {
  items: SectionMenuItem[];
  loading?: boolean;
  loadingFallback?: ReactNode;
  className?: string;
};

export const SectionMenu = ({ items, loading = false, loadingFallback = null, className }: SectionMenuProps) => (
  <MenuBlock className={className}>
    <MenuList>
      {loading && loadingFallback}
      {!loading &&
        items.map((item) => <MenuItem key={item.to}>{item.active ? <SelectedLinkButton aria-current="page" to={item.to}>{item.label}</SelectedLinkButton> : <LinkButton to={item.to}>{item.label}</LinkButton>}</MenuItem>)}
    </MenuList>
  </MenuBlock>
);
