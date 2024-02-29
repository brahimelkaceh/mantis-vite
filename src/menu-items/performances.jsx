// This is example of menu item without group for horizontal layout. There will be no children.

// third-party
import { FormattedMessage } from 'react-intl';

// assets
import {
  FundProjectionScreenOutlined,
  ChromeOutlined,
  HomeOutlined,
  FileAddOutlined,
  TableOutlined,
  DatabaseOutlined
} from '@ant-design/icons';

// icons
const icons = {
  ChromeOutlined,
  HomeOutlined,
  FileAddOutlined,
  TableOutlined,
  DatabaseOutlined,
  FundProjectionScreenOutlined
};

// ==============================|| MENU ITEMS - Performances ||============================== //

const performances = {
  id: 'performances',
  title: <FormattedMessage id="Performances" />,
  type: 'group',
  icon: icons.DatabaseOutlined,
  children: [
    {
      id: 'performance-table',
      title: <FormattedMessage id="Performances en chiffres" />,
      type: 'item',
      url: '/production/performance-table',
      icon: icons.TableOutlined
    },
    {
      id: 'performance-charts',
      title: <FormattedMessage id="Performances en courbes" />,
      type: 'item',
      url: '/production/performance-charts',
      icon: icons.FundProjectionScreenOutlined
    }
  ]
};

export default performances;
