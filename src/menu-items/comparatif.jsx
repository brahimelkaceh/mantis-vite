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
  FundProjectionScreenOutlined,
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
  BranchesOutlined,
  FundProjectionScreenOutlined
};

// ==============================|| MENU ITEMS - comparatif ||============================== //

const comparatif = {
  id: 'group-comparatif',
  title: <FormattedMessage id="Comparatif" />,
  icon: icons.SettingOutlined,
  type: 'group',
  breadcrumbs: false,
  children: [
    {
      id: 'comparatif-lot',
      title: <FormattedMessage id="Comparatif/Lot" />,
      type: 'item',
      url: '/production/comparatif-lot',
      icon: icons.FundProjectionScreenOutlined,
      breadcrumbs: true
    }
  ]
};

export default comparatif;
