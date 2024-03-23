// material-ui
import { Button, Grid, InputLabel, MenuItem, Select, Stack, TextField } from '@mui/material';

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

/**
 * 'Enter your email'
 * yup.string Expected 0 arguments, but got 1 */
const validationSchema = yup.object({
  name: yup.string().required('nom bâtiment est requis'),
  site: yup.string().required('le site est requis')
});

// ==============================|| FORM VALIDATION - LOGIN FORMIK ||============================== //

const NewBatiment = ({ fetchBatiments }) => {
  const [loading, setLoading] = useState(false);
  const [sites, setSites] = useState([]);
  const formik = useFormik({
    initialValues: {
      name: '',
      site: '',
      typeOf: 'production'
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      createNewBatiment(values);
      resetForm();
    }
  });
  const createNewBatiment = async (data) => {
    try {
      setLoading(true);
      const response = await api.createNewBatiment(data);
      if (response.status === 200) {
        openSnackbar({
          open: true,
          message: 'Le bâtiment a été ajouté au système avec succès',
          variant: 'alert',
          alert: {
            color: 'success'
          }
        });
        setLoading(false);
        fetchBatiments();
      }
      if (response.status !== 200) {
        openSnackbar({
          open: true,
          message: 'Échec de création le bâtiment; Veuillez réessayer.',
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
        message: 'Échec de création le bâtiment; Veuillez réessayer.',
        variant: 'alert',
        alert: {
          color: 'error'
        }
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchProdSite = async () => {
    try {
      setLoading(true);
      const result = await api.getAllSites();
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
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Stack spacing={0}>
            <InputLabel htmlFor="name">Bâtiment</InputLabel>
            <TextField
              fullWidth
              id="name"
              name="name"
              placeholder="Entrer nom de bâtiment"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack spacing={0}>
            <InputLabel id="demo-simple-select-label"> {'Production/Poussiniere'}</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="typeOf"
              name="typeOf"
              value={formik?.values.typeOf || ''}
              onChange={(e) => {
                formik?.handleChange(e);
              }}
              label=""
            >
              <MenuItem value="production">
                <em>Production</em>
              </MenuItem>
              <MenuItem value="poussiniere">
                <em>Poussiniere</em>
              </MenuItem>
            </Select>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack spacing={0}>
            <InputLabel id="demo-simple-select-label"> {loading ? 'chargement...' : 'Sélectionner site'}</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="site"
              name="site"
              value={formik?.values.site || ''}
              onChange={(e) => {
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

export default NewBatiment;
