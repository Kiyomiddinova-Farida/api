export interface NavItem {
  id: string;
  label: string;
  icon: string;
  path: string;
  subPages?: SubPage[];
}

export interface SubPage {
  id: string;
  label: string;
  path: string;
  component: React.LazyExoticComponent<React.ComponentType<any>>;
}

export interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  onItemClick: (itemId: string) => void;
}

export interface LayoutProps {
  children: React.ReactNode;
}