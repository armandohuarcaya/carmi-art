import { NbMenuItem } from '@nebular/theme';

export interface AppMenuItem extends NbMenuItem {
  roles?: string[];
  children?: AppMenuItem[];
}
