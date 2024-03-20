// material-ui
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
  useTheme
} from '@mui/material';
import { openSnackbar } from 'api/snackbar';
import AnimateButton from 'components/@extended/AnimateButton';

// project import
import MainCard from 'components/MainCard';
import { useFormik } from 'formik';
import ReportForm from 'sections/production/report/ReportForm';
import SelectedComponents from 'sections/production/report/SelectedComponents';
import { validationSchema } from './validation-schema';
import { useEffect, useState } from 'react';
import api from 'api/production';
import { Send } from '@mui/icons-material';
import { PopupTransition } from 'components/@extended/Transitions';

// ==============================|| SAMPLE PAGE ||============================== //

const NewReport = () => {
  const theme = useTheme();
  const [lastRep, setLastRep] = useState([]);
  const [batimentId, setBatimentId] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const fetchPoussLot = async () => {
    try {
      const result = await api.getProdSites();
      if (result.status === 200) {
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchPoussLot();
  }, []);
  const formik = useFormik({
    initialValues: {
      batiment: '',
      mort: '',
      hensEliminated: '',
      poidVif: '',
      homog: '',
      prod_normal: '',
      prod_dj: '',
      prod_blanc: '',
      prod_casse: '',
      prod_feles: '',
      prod_elimne: '',
      prod_liquide: '',
      alimentDist: '',
      eauDist: '',
      pmo: '',
      formule: '',
      temperatureMin: '',
      temperatureMax: '',
      temperatureMinExt: '',
      temperatureMaxExt: '',
      temperatureInt: [15, 32],
      temperatureExt: [20, 40],
      lightOn: new Date(),
      lightOff: new Date(),
      flashOn: new Date(),
      flashOff: new Date(),
      flashDuration: new Date(),
      lightDuration: new Date(),
      intensite: '',
      intensIsLux: '',
      coloration: 3,
      qty_shell: '',
      hensReformed: '',
      hensReformedFree: '',
      hensReformedTriage: '',
      isKg: false,
      price: '',
      observation: ''
    },

    validationSchema: validationSchema, // pass the Yup schema here
    onSubmit: (values) => {
      values.temperatureMin = values.temperatureInt[0];
      values.temperatureMax = values.temperatureInt[1];
      values.temperatureMinExt = values.temperatureExt[0];
      values.temperatureMaxExt = values.temperatureExt[1];
      delete values.temperatureInt;
      delete values.temperatureExt;
      values.lightOn = `${values.lightOn.getHours().toString().padStart(2, '0')}:${values.lightOn
        .getMinutes()
        .toString()
        .padStart(2, '0')}`;
      values.lightOff = `${values.lightOff.getHours().toString().padStart(2, '0')}:${values.lightOff
        .getMinutes()
        .toString()
        .padStart(2, '0')}`;
      values.lightDuration = `${values.lightDuration.getHours().toString().padStart(2, '0')}:${values.lightDuration
        .getMinutes()
        .toString()
        .padStart(2, '0')}`;
      values.flashOn = `${values.flashOn.getHours().toString().padStart(2, '0')}:${values.flashOn
        .getMinutes()
        .toString()
        .padStart(2, '0')}`;
      values.flashOff = `${values.flashOff.getHours().toString().padStart(2, '0')}:${values.flashOff
        .getMinutes()
        .toString()
        .padStart(2, '0')}`;
      values.flashDuration = `${values.flashDuration.getHours().toString().padStart(2, '0')}:${values.flashDuration
        .getMinutes()
        .toString()
        .padStart(2, '0')}`;
      console.log('select form submit - ', values);

      openSnackbar({
        open: true,
        message: 'Submit Success',
        variant: 'alert',
        alert: {
          color: 'success'
        }
      });
    }
  });
  useEffect(() => {
    formik.initialValues;
    formik.setValues({
      ...formik.values,
      batiment: batimentId,
      formule: lastRep?.formule || '',
      // lightOn: lastRep?.lumiere_alum || '',
      // lightOff: lastRep?.lumiere_extin || '',
      // lightDuration: lastRep?.lumiere_durr || '',
      // flashOn: lastRep?.flash_alum || '',
      // flashOff: lastRep?.flash_extin || '',
      // flashDuration: lastRep?.flash_durr || '',
      qty_shell: lastRep?.qty_coquille || '',
      // coloration: lastRep?.coloration || '',
      intensIsLux: lastRep?.intensIsLux || false,
      intensite: lastRep?.intensite || '',
      pmo: lastRep?.pmo || ''
    });
  }, [lastRep]);
  return (
    <Grid container spacing={2}>
      <Dialog
        open={open}
        TransitionComponent={PopupTransition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <Box sx={{ p: 1, py: 1.5 }}>
          <DialogContent>
            <DialogContentText variant="h1" id="alert-dialog-slide-description">
              Êtes-vous sûr de vouloir soumettre le formulaire ?{' '}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              variant="outlined"
              sx={{
                color: theme.palette.error.dark
              }}
              color="error"
              onClick={handleClose}
            >
              Annuler
            </Button>
            <Button color="success" variant="contained" onClick={handleClose}>
              Confirmer
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
      <Grid item xs={12}>
        <MainCard>
          <Grid container>
            <Grid item xs={12}>
              <SelectedComponents setLastRep={setLastRep} setBatimentId={setBatimentId} />
            </Grid>
          </Grid>
        </MainCard>
      </Grid>
      <Grid item xs={12}>
        <MainCard>
          <form>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <ReportForm formik={formik} />
              </Grid>
              <Grid item xs={12}>
                <Stack direction="row" justifyContent="flex-end">
                  <AnimateButton>
                    <Button endIcon={<Send />} disabled={!formik.values.batiment} variant="contained" onClick={handleClickOpen}>
                      Submit
                    </Button>
                  </AnimateButton>
                </Stack>
              </Grid>
            </Grid>
          </form>
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default NewReport;
