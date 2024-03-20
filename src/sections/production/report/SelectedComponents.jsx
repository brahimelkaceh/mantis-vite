// material-ui
import {
  Button,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  Select,
  Stack,
  MenuItem,
  ListItem,
  ListItemText,
  Typography,
  Divider
} from '@mui/material';

import api from 'api/production';
import { openSnackbar } from 'api/snackbar';
import { useEffect, useState } from 'react';

const SelectedComponents = ({ setLastRep, setBatimentId }) => {
  const [sites, setSites] = useState([]);
  const [lots, setLots] = useState([]);
  const [lotId, setLotId] = useState('');
  const [siteId, setSiteId] = useState('');
  const [nextSendData, setNextSendData] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchProdSite = async () => {
    try {
      setLoading(true);
      const result = await api.getProdSites();
      if (result.status === 200) {
        setSites(result?.data);
        setLoading(false);
      }
    } catch (error) {
      openSnackbar({
        open: true,
        message: 'Échec de récupération les données; Veuillez réessayer.',
        variant: 'alert',
        alert: {
          color: 'error'
        }
      });
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchProdSite();
  }, []);
  const fetchLotData = async (id) => {
    try {
      setLoading(true);
      const result = await api.getLotTitles(id);
      if (result.status === 200) {
        setLots(result.data);
        setLoading(false);
      }
    } catch (error) {
      openSnackbar({
        open: true,
        message: 'Échec de récupération les lots; Veuillez réessayer.',
        variant: 'alert',
        alert: {
          color: 'error'
        }
      });
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const fetchNextSendData = async (id) => {
    try {
      setLoading(true);
      const result = await api.getProudNext(id);
      if (result.status === 200) {
        setNextSendData(result.data);
        setLoading(false);
        // console.log('next send : ', result?.data.lotId);
        setBatimentId(result?.data.lotId);
        setLastRep(result?.data?.last_rep);
      }
    } catch (error) {
      openSnackbar({
        open: true,
        message: 'Échec de récupération les données; Veuillez réessayer.',
        variant: 'alert',
        alert: {
          color: 'error'
        }
      });
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Grid container spacing={2} alignItems={'end'}>
      <Grid item xs={12} md={6} lg={4}>
        <Stack spacing={1}>
          <Typography color={'GrayText'} variant="caption" gutterBottom>
            Sites
          </Typography>
          <FormControl sx={{ m: 1, mt: 0, minWidth: 120 }}>
            <Select
              value={siteId}
              disabled={loading}
              onChange={(e) => {
                setSiteId(e.target.value);
                fetchLotData(e.target.value);
              }}
            >
              <MenuItem value="" disabled>
                <em>Selectionnez site</em>
              </MenuItem>
              {sites?.map((site, i) => (
                <MenuItem key={site.id} value={site.id}>
                  {site.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Stack>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Stack spacing={1}>
          <Typography color={'GrayText'} variant="caption" gutterBottom>
            Bâtiments
          </Typography>{' '}
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Select
              value={lotId ?? ' '}
              onChange={(e) => {
                setLotId(e.target.value);
                fetchNextSendData(e.target.value);
              }}
            >
              <MenuItem value="" disabled>
                <em>Selectionnez bâtiment</em>
              </MenuItem>
              {lots?.map((lot, i) => (
                <MenuItem key={lot.id} value={lot.id}>
                  <Typography component={'span'}>{lot.batiment}</Typography>
                  <Typography color={'gray'} pl={1} variant="caption" component={'span'}>
                    ({lot.code})
                  </Typography>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Stack>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <ListItem sx={{ py: 0.5, px: 0 }}>
          <ListItemText secondary={'Rapport de :'} />
          <Typography variant="subtitle1" sx={{ color: 'warning.main' }}>
            {nextSendData?.nextDate}
          </Typography>
        </ListItem>
        <Divider />
        <ListItem sx={{ py: 0.5, px: 0, pb: 0 }}>
          <ListItemText secondary={'Code lot :'} />
          <Typography variant="subtitle1" sx={{ color: 'warning.main' }}>
            {nextSendData?.lot_code}
          </Typography>
        </ListItem>
      </Grid>
    </Grid>
  );
};

export default SelectedComponents;
