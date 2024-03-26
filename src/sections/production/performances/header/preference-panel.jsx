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
  Divider,
  useTheme,
  useMediaQuery
} from '@mui/material';

// project imports
import MainCard from 'components/MainCard';
import AnimateButton from 'components/@extended/AnimateButton';
import { openSnackbar } from 'api/snackbar';

// third-party
import { useFormik } from 'formik';
import * as yup from 'yup';
import LoadingButton from 'components/@extended/LoadingButton';
import { HomeFilled } from '@ant-design/icons';
import { ArrowRightIcon } from '@mui/x-date-pickers';
import { useEffect, useState } from 'react';
import api from 'api/production';

/**
 * 'Enter your age'
 * yup.number Expected 0 arguments, but got 1 */
const validationSchema = yup.object({
  age: yup.number().required('Age selection is required.')
});

// ==============================|| FORM VALIDATION - LOGIN FORMIK ||============================== //
// get-prod-table-data/
const PreferencePanel = ({ fetchBilanPartialData, fetchPerformanceTable }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [loading, setLoading] = useState(false);
  const [sites, setSites] = useState([]);
  const [siteId, setSiteId] = useState('');
  const [lots, setLots] = useState([]);
  const [lotId, setLotId] = useState('');

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
    <Grid container spacing={2} alignItems={'end'}>
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
            value={lotId ?? ' '}
            disabled={loading}
            onChange={(event) => {
              setLotId(event.target.value);
              fetchBilanPartialData(event.target.value);
              fetchPerformanceTable(event.target.value);
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
    </Grid>
  );
};

export default PreferencePanel;
