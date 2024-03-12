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

// ==============================|| MENU ITEMS - PRODUCTION ||============================== //

const production = {
  id: 'group-production',
  title: <FormattedMessage id="Dashboard" />,
  icon: icons.HomeOutlined,
  type: 'group',
  url: '/production/dashboard'
};

export default production;
