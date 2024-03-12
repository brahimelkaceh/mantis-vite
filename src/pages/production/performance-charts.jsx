// material-ui
import { Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import Line from 'sections/charts/sync-charts/line-chart';

// ==============================|| SAMPLE PAGE ||============================== //

const PerformanceCharts = () => (
  <MainCard title="Performances en cccourbes">
    <Line />
  </MainCard>
);

export default PerformanceCharts;
