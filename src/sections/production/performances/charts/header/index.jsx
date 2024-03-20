import { Button, FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ChartOptions from './chart-options';
import api from 'api/production';
import { openSnackbar } from 'api/snackbar';

const ChartSelectHeader = ({ setTitle, checkboxItems, setChartName, chartName, setLotId, lotId }) => {
  const [lots, setLots] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sites, setSites] = useState([]);
  const [siteId, setSiteId] = useState('');

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

  const fetchLotData = async (id) => {
    try {
      setLoading(true);
      const result = await api.getLotTitles(id);
      if (result.status === 200) {
        setLots(result.data);
      }
    } catch (error) {
      openSnackbar({
        open: true,
        message: 'Échec de récupération des lots; Veuillez réessayer.',
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
  const filterTitles = (id) => {
    const filterTitle = lots?.filter((title) => title.id === id);
    setTitle(filterTitle[0].code);
  };
  return (
    <Grid container spacing={1} mb={1} alignItems={'center'}>
      <Grid item xs={12} md={6} lg={3.5}>
        <FormControl variant="outlined" fullWidth controlled>
          <InputLabel id="demo-simple-select-standard-label">{loading ? 'Chargement...' : 'Sélectionnez un Site'}</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={siteId}
            disabled={loading}
            onChange={(e) => {
              setSiteId(e.target.value);
              fetchLotData(e.target.value);
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
      </Grid>
      <Grid item xs={12} md={6} lg={3.5}>
        <FormControl fullWidth variant="outlined" controlled>
          <InputLabel id="demo-simple-select-standard-label">Sélectionnez un LOT</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={lotId ?? ' '}
            disabled={loading}
            onChange={(event) => {
              setLotId(event.target.value);
              filterTitles(event.target.value);
            }}
            label="Age"
          >
            <MenuItem value="" disabled>
              <em>Sélectionnez lot</em>
            </MenuItem>
            {lots &&
              lots.map((title) => (
                <MenuItem key={title.id} value={title?.id}>
                  {title?.batiment} ({title.code})
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12} lg={4}>
        <ChartOptions chartName={chartName} setChartName={setChartName} checkboxItems={checkboxItems} />
      </Grid>
      <Grid item xs={12} md={1}>
        <Button
          variant="outlined"
          onClick={() => {
            setChartName([]);
          }}
        >
          réinitialiser
        </Button>
      </Grid>
    </Grid>
  );
};

export default ChartSelectHeader;
