// material-ui
import { Grid, Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import { useState } from 'react';
import Line from 'sections/charts/sync-charts/line-chart';
import AltChartContainer from 'sections/production/performances/charts/chart-container/aliment/Container';
import ConsommationContainer from 'sections/production/performances/charts/chart-container/consommation/Container';
import HomogPvContainer from 'sections/production/performances/charts/chart-container/homogeneite/Container';
import MasseContainer from 'sections/production/performances/charts/chart-container/masse-oeuf/Container';
import MortaliteContainer from 'sections/production/performances/charts/chart-container/mortalite/Container';
import ProductionContainer from 'sections/production/performances/charts/chart-container/production/container';
import ChartSelectHeader from 'sections/production/performances/charts/header';

// ==============================|| SAMPLE PAGE ||============================== //

const PerformanceCharts = () => {
  const [chartName, setChartName] = useState([]);
  const [lotId, setLotId] = useState('');
  const [title, setTitle] = useState('');
  const checkboxItems = {
    Production: {
      id: '1',
      name: 'Production',
      component: <ProductionContainer title={title} id={lotId} />
    },
    ' Aliment/Oeuf': {
      id: '2',
      name: 'Aliment/Oeuf',
      component: <AltChartContainer title={title} id={lotId} />
    },
    Consommation: {
      id: '3',
      name: 'Consommations',
      component: <ConsommationContainer title={title} id={lotId} />
    },
    'Poids corporel & Homogénéité': {
      id: '4',
      name: 'Poids corporel & Homogénéité',
      component: <HomogPvContainer title={title} id={lotId} />
    },
    Mortalité: {
      id: '5',
      name: 'Mortalité',
      component: <MortaliteContainer title={title} id={lotId} />
    },
    "Masse d'oeufs": {
      id: '6',
      name: "Masse d'oeufs",
      component: <MasseContainer title={title} id={lotId} />
    }
  };

  const displaySelectedItems = () => {
    return chartName.map((itemName) => (
      <Grid xs={12} md={6} lg={4} item key={itemName}>
        {checkboxItems[itemName]?.component}
      </Grid>
    ));
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <MainCard>
          <ChartSelectHeader
            setLotId={setLotId}
            lotId={lotId}
            setTitle={setTitle}
            chartName={chartName}
            setChartName={setChartName}
            checkboxItems={checkboxItems}
          />
        </MainCard>
      </Grid>
      {chartName?.length > 0 ? displaySelectedItems() : <p></p>}
    </Grid>
  );
};

export default PerformanceCharts;
