// material-ui
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, Stack, TextField } from '@mui/material';

// project imports
import MainCard from 'components/MainCard';
import AnimateButton from 'components/@extended/AnimateButton';
import { openSnackbar } from 'api/snackbar';

// third-party
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useEffect, useState } from 'react';
import api from 'api/production';
import { LoadingButton } from '@mui/lab';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

/**
 * 'Enter your email'
 * yup.string Expected 0 arguments, but got 1 */
const validationSchema = yup.object({
  site: yup.string().required('site est requis'),
  batiment: yup.string().required('bâtiment est requis'),
  guide: yup.string().required('Guide est requis'),
  code: yup.string().required('Code Lot est requis'),
  effectifDP: yup
    .number()
    .typeError('Effectif logée doit être une valeur positive.')
    .min(0, 'Effectif logée doit être une valeur positive.')
    .required('Effectif logée est requis'),
  birthDate: yup.string().required('Date Mise en place est requis')
});

// ==============================|| FORM VALIDATION - LOGIN FORMIK ||============================== //

const NewLot = ({ fetchProdLot, siteId, setSiteId, sites }) => {
  const [loading, setLoading] = useState(false);
  const [batiments, setBatiments] = useState([]);
  const [guides, setGuides] = useState([]);
  const formik = useFormik({
    initialValues: {
      site: '',
      batiment: '',
      guide: '',
      code: '',
      effectifDP: 0,
      birthDate: new Date(),
      transferDate: new Date(),
      hebdoFill: false,
      reformStarted: false
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      createNewLot(values);
      resetForm();
    }
  });
  const createNewLot = async (data) => {
    try {
      setLoading(true);
      const response = await api.createNewLot(data);
      if (response.status === 200) {
        openSnackbar({
          open: true,
          message: 'Le lot a été ajouté au système avec succès',
          variant: 'alert',
          alert: {
            color: 'success'
          }
        });
        setLoading(false);
        fetchProdBatiment();
      }
      if (response.status !== 200) {
        openSnackbar({
          open: true,
          message: 'Échec de création le lot; Veuillez réessayer.',
          variant: 'alert',
          alert: {
            color: 'info'
          }
        });
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
      openSnackbar({
        open: true,
        message: 'Échec de création le lot; Veuillez réessayer.',
        variant: 'alert',
        alert: {
          color: 'error'
        }
      });
    } finally {
      setLoading(false);
    }
  };
  const fetchProdBatiment = async (id) => {
    try {
      setLoading(true);
      const result = await api.getAllBatiments(id);
      if (result.status === 200) {
        const pproudBats = result?.data?.filter((d) => d.type === 'production' && d.isEmpty);
        setBatiments(pproudBats);
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
  const fetProdActiveGuide = async () => {
    try {
      setLoading(true);
      const result = await api.getProdGuides();
      if (result.status === 200) {
        setGuides(result?.data);
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
    fetProdActiveGuide();
  }, []);

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Stack spacing={1}>
            <InputLabel id="demo-simple-select-label"> {loading ? 'chargement...' : 'Sélectionner site'}</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="site"
              name="site"
              value={formik?.values.site || ''}
              onChange={(e) => {
                fetchProdBatiment(e.target.value);
                formik?.handleChange(e);
              }}
              label=""
              error={formik.touched.site && Boolean(formik.errors.site)}
              helperText={formik.touched.site && formik.errors.site}
            >
              <MenuItem value="" disabled>
                <em>--</em>
              </MenuItem>

              {sites &&
                sites?.map((site) => (
                  <MenuItem key={site.id} value={site.id}>
                    {site.name}
                  </MenuItem>
                ))}
            </Select>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack spacing={1}>
            <InputLabel id="demo-simple-select-label"> {loading ? 'chargement...' : 'Sélectionner bâtiment'}</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="batiment"
              name="batiment"
              value={formik?.values.batiment || ''}
              onChange={(e) => {
                formik?.handleChange(e);
              }}
              label=""
              error={formik.touched.batiment && Boolean(formik.errors.batiment)}
              helperText={formik.touched.batiment && formik.errors.batiment}
            >
              <MenuItem value="" disabled>
                <em>--</em>
              </MenuItem>

              {batiments &&
                batiments?.map((batiment) => (
                  <MenuItem key={batiment.id} value={batiment.id}>
                    {batiment.name}
                  </MenuItem>
                ))}
            </Select>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack spacing={1}>
            <InputLabel id="demo-simple-select-label"> {loading ? 'chargement...' : 'Sélectionner guide'}</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="guide"
              name="guide"
              value={formik?.values.guide || ''}
              onChange={(e) => {
                formik?.handleChange(e);
              }}
              label=""
              error={formik.touched.guide && Boolean(formik.errors.guide)}
              helperText={formik.touched.guide && formik.errors.guide}
            >
              <MenuItem value="" disabled>
                <em>--</em>
              </MenuItem>

              {guides &&
                guides?.map((guide) => (
                  <MenuItem key={guide.id} value={guide.id}>
                    {guide.name}
                  </MenuItem>
                ))}
            </Select>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack spacing={1}>
            <InputLabel htmlFor="code">Code lot</InputLabel>
            <TextField
              fullWidth
              id="code"
              name="code"
              placeholder="Entrer code lot"
              value={formik.values.code}
              onChange={formik.handleChange}
              error={formik.touched.code && Boolean(formik.errors.code)}
              helperText={formik.touched.code && formik.errors.code}
            />
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack spacing={1}>
            <InputLabel htmlFor="effectifDP">Effectif logée</InputLabel>
            <TextField
              fullWidth
              id="effectifDP"
              name="effectifDP"
              placeholder="Effectif logée              "
              value={formik.values.effectifDP}
              onChange={formik.handleChange}
              error={formik.touched.effectifDP && Boolean(formik.errors.effectifDP)}
              helperText={formik.touched.effectifDP && formik.errors.effectifDP}
            />
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack spacing={1}>
            <InputLabel htmlFor="birthDate">Date Mise en place</InputLabel>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DesktopDatePicker
                id="birthDate"
                label=""
                inputFormat="MM/dd/yyyy"
                value={formik.values.birthDate}
                name="birthDate"
                onChange={(newValue) => formik.setFieldValue('birthDate', newValue)}
                error={formik.touched.birthDate && Boolean(formik.errors.birthDate)}
                helperText={formik.touched.birthDate && formik.errors.birthDate}
              />
            </LocalizationProvider>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack spacing={1}>
            <InputLabel htmlFor="transferDate">Date transfert</InputLabel>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DesktopDatePicker
                id="transferDate"
                label=""
                inputFormat="MM/dd/yyyy"
                value={formik.values.transferDate}
                name="transferDate"
                onChange={(newValue) => formik.setFieldValue('transferDate', newValue)}
                error={formik.touched.transferDate && Boolean(formik.errors.transferDate)}
                helperText={formik.touched.transferDate && formik.errors.transferDate}
              />
            </LocalizationProvider>
          </Stack>
        </Grid>

        <Grid item xs={12}>
          <Stack direction="row" justifyContent="flex-end">
            <AnimateButton>
              <LoadingButton loading={loading} variant="contained" type="submit">
                Soumettre{' '}
              </LoadingButton>
            </AnimateButton>
          </Stack>
        </Grid>
      </Grid>
    </form>
  );
};

export default NewLot;
