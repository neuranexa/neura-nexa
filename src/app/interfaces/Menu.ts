export interface Menu {
    id: string;
    name: string;
    icon: string;
    description: string;
    isActive: boolean;
    isSubMenu: boolean;
    subMenus: string[];
  }