// This is example of menu item without group for horizontal layout. There will be no children.

// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { ChromeOutlined, HomeOutlined, FileAddOutlined } from '@ant-design/icons';

// icons
const icons = {
  ChromeOutlined,
  HomeOutlined,
  FileAddOutlined
};

// ==============================|| MENU ITEMS - PRODUCTION ||============================== //

const production = {
  id: 'group-production',
  title: <FormattedMessage id="Production" />,
  icon: icons.HomeOutlined,
  type: 'group',
  children: [
    {
      id: 'Dashboard',
      title: <FormattedMessage id="Dashboard" />,
      type: 'item',
      url: '/production/dashboard',
      icon: icons.HomeOutlined
    },
    {
      id: 'new-report',
      title: <FormattedMessage id="Saisie de données" />,
      type: 'item',
      url: '/production/new-report',
      icon: icons.FileAddOutlined
    },
    {
      id: 'new-report',
      title: <FormattedMessage id="Saisie de données" />,
      type: 'item',
      url: '/production/new-report',
      icon: icons.FileAddOutlined
    }
  ]
};

export default production;
