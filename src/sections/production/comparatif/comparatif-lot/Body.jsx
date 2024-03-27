import { Grid, LinearProgress } from '@mui/material';
import Mortalite from './boxes/Mortalite';
import Consommation from './boxes/Consommation';
import HomogPc from './boxes/HomogPc';
import Masse from './boxes/Masse';
import Production from './boxes/Production';

const Body = ({ data, courbeId }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        {data?.length > 0 && courbeId === 0 && <Production data={data} />}
        {data?.length > 0 && courbeId === 1 && <Mortalite data={data} />}
        {data?.length > 0 && courbeId === 2 && <Consommation data={data} />}
        {data?.length > 0 && courbeId === 3 && <HomogPc data={data} />}
        {data?.length > 0 && courbeId === 4 && <Masse data={data} />}
      </Grid>
    </Grid>
  );
};

export default Body;
