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

const create_report = {
  id: 'new-report',
  title: <FormattedMessage id="Saisie de données" />,
  icon: icons.FileAddOutlined,
  type: 'group',
  url: '/production/new-report'
};

export default create_report;
