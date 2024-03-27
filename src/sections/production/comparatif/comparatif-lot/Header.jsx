import * as React from 'react';
import { useState } from 'react';
import { Checkbox, FormControl, Grid, InputLabel, ListItemText, MenuItem, OutlinedInput, Select } from '@mui/material';
import api from 'api/production';
import { openSnackbar } from 'api/snackbar';
import { useEffect } from 'react';
import LotSelected from './components/LotSelected';
import ChartSelected from './components/ChartSelected';

const Header = ({ setLot, setData, setCourbeId, lotName, setLotName }) => {
  const [loading, setLoading] = useState(false);
  const [sites, setSites] = useState([]);
  const [siteId, setSiteId] = useState('');
  const [lots, setLots] = useState([]);
  const handleDeleteItem = (deletedItem) => {
    const updatedParamName = lotName.filter((name) => name !== deletedItem);
    setLotName(updatedParamName);
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
  return (
    <Grid container spacing={1} mb={1} px={1}>
      <Grid item xs={12} md={6} lg={4}>
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
      <Grid item xs={12} md={6} lg={4}>
        <LotSelected lots={lots} lotName={lotName} setLotName={setLotName} loading={loading} />{' '}
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <ChartSelected setCourbeId={setCourbeId} />
      </Grid>
    </Grid>
  );
};

export default Header;
