// material-ui
import { FormControl, Grid, InputLabel, LinearProgress, MenuItem, Select, Typography } from '@mui/material';
import api from 'api/production';
import { openSnackbar } from 'api/snackbar';

// project import
import MainCard from 'components/MainCard';
import { useEffect, useState } from 'react';
import NewLot from 'sections/production/settings/gestion-lots/form';
import LotTable from 'sections/production/settings/gestion-lots/table';

// ==============================|| SAMPLE PAGE ||============================== //

const GestionLots = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [sites, setSites] = useState([]);
  const [siteId, setSiteId] = useState(null);
  const fetchProdLot = async (id) => {
    try {
      setLoading(true);
      const result = await api.getLotTitles(id);
      if (result.status === 200) {
        setData(result?.data);
      }
    } catch (error) {
      openSnackbar({
        open: true,
        message: 'Échec de récupération des données; Veuillez réessayer.',
        variant: 'alert',
        alert: {
          color: 'error'
        }
      });
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  const fetchProdSite = async () => {
    try {
      setLoading(true);
      const result = await api.getProdSites();
      if (result.status === 200) {
        setSites(result?.data);
      }
    } catch (error) {
      openSnackbar({
        open: true,
        message: 'Échec de récupération des données; Veuillez réessayer.',
        variant: 'alert',
        alert: {
          color: 'error'
        }
      });
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProdSite();
  }, []);
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <MainCard title="Déclarer un lot">
          <NewLot fetchProdLot={fetchProdLot} sites={sites} setSiteId={setSiteId} siteId={siteId} />
        </MainCard>
      </Grid>
      <Grid item xs={12} md={6}>
        <MainCard
          content={false}
          title={
            <FormControl variant="outlined" fullWidth controlled>
              <InputLabel id="demo-simple-select-standard-label">{loading ? 'Chargement...' : 'Sélectionnez un Site'}</InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={siteId}
                disabled={loading}
                onChange={(e) => {
                  setSiteId(e.target.value);
                  fetchProdLot(e.target.value);
                }}
                label="sites"
              >
                <MenuItem value="" disabled>
                  <em>Sélectionnez site</em>
                </MenuItem>
                {sites &&
                  sites.map((site) => (
                    <MenuItem key={site.id} value={site.id}>
                      {site.name}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          }
        >
          {loading && <LinearProgress />}
          <Grid mb={2}></Grid>
          <LotTable data={data} fetchProdLot={fetchProdLot} sites={sites} siteId={siteId} />
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default GestionLots;
