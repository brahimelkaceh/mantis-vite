// project import
import applications from './applications';
import widget from './widget';
import formsTables from './forms-tables';
import chartsMap from './charts-map';
import samplePage from './sample-page';
import other from './other';
import pages from './pages';
import production from './production';
import performances from './performances';
import create_report from './create-report';
import settings from './settings';

// ==============================|| MENU ITEMS ||============================== //

const menuItems = {
  // items: [widget, applications, formsTables, chartsMap, samplePage, pages, other]
  items: [production, create_report, performances, settings]
};

export default menuItems;
