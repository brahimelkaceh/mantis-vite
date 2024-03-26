// third-party
import { FormattedMessage } from 'react-intl';

// project-imports

// assets
import {
  BuildOutlined,
  CalendarOutlined,
  CustomerServiceOutlined,
  FileTextOutlined,
  MessageOutlined,
  ShoppingCartOutlined,
  UsergroupAddOutlined,
  AppstoreAddOutlined,
  PlusOutlined,
  LinkOutlined,
  SettingOutlined,
  DatabaseOutlined,
  HomeOutlined,
  BranchesOutlined
} from '@ant-design/icons';

// icons
const icons = {
  BuildOutlined,
  CalendarOutlined,
  CustomerServiceOutlined,
  MessageOutlined,
  ShoppingCartOutlined,
  UsergroupAddOutlined,
  AppstoreAddOutlined,
  FileTextOutlined,
  PlusOutlined,
  LinkOutlined,
  SettingOutlined,
  DatabaseOutlined,
  HomeOutlined,
  BranchesOutlined
};

// ==============================|| MENU ITEMS - SETTINGS ||============================== //

const settings = {
  id: 'group-settings',
  title: <FormattedMessage id="Paramétrage" />,
  icon: icons.SettingOutlined,
  type: 'group',
  breadcrumbs: false,
  children: [
    {
      id: 'gestion-sites',
      title: <FormattedMessage id="Paramétrage" />,
      type: 'collapse',
      icon: icons.SettingOutlined,
      children: [
        {
          id: 'gestion-sites',
          title: <FormattedMessage id="Gestion sites" />,
          type: 'item',
          url: '/production/gestion-sites',
          icon: icons.AppstoreAddOutlined,
          breadcrumbs: true
        },
        {
          id: 'gestion-lots',
          title: <FormattedMessage id="Gestion lots" />,
          type: 'item',
          url: '/production/gestion-lots',
          icon: icons.DatabaseOutlined,
          breadcrumbs: true
        },
        {
          id: 'gestion-batiments',
          title: <FormattedMessage id="Gestion bâtiments" />,
          type: 'item',
          url: '/production/gestion-batiments',
          icon: icons.HomeOutlined,
          breadcrumbs: true
        },
        {
          id: 'gestion-guides',
          title: <FormattedMessage id="Gestion guides" />,
          type: 'item',
          url: '/production/gestion-guides',
          icon: icons.BranchesOutlined,
          breadcrumbs: true
        },
        {
          id: 'gestion-utilisateurs',
          title: <FormattedMessage id="Gestion utilisateurs" />,
          type: 'item',
          url: '/production/gestion-utilisateurs',
          icon: icons.UsergroupAddOutlined,
          breadcrumbs: false
        }
      ]
    }
  ]
};

export default settings;
