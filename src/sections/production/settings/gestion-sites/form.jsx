// material-ui
import { Button, Grid, InputLabel, Stack, TextField } from '@mui/material';

// project imports
import MainCard from 'components/MainCard';
import AnimateButton from 'components/@extended/AnimateButton';
import { openSnackbar } from 'api/snackbar';

// third-party
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useState } from 'react';
import api from 'api/production';
import { LoadingButton } from '@mui/lab';

/**
 * 'Enter your email'
 * yup.string Expected 0 arguments, but got 1 */
const validationSchema = yup.object({
  name: yup.string().required('nom site est requis'),
  phone: yup.string().required('numéro téléphone de site est requis')
});

// ==============================|| FORM VALIDATION - LOGIN FORMIK ||============================== //

const NewSite = ({ fetchProdSite }) => {
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      longtitude: '',
      latitude: ''
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      createNewSite(values);
      resetForm();
    }
  });
  const createNewSite = async (data) => {
    try {
      setLoading(true);
      const response = await api.createNewSite(data);
      if (response.status === 200) {
        openSnackbar({
          open: true,
          message: 'Le site a été ajouté au système avec succès',
          variant: 'alert',
          alert: {
            color: 'success'
          }
        });
        setLoading(false);
        fetchProdSite();
      }
      if (response.status !== 200) {
        openSnackbar({
          open: true,
          message: 'Échec de création le site; Veuillez réessayer.',
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
        message: 'Échec de création le site; Veuillez réessayer.',
        variant: 'alert',
        alert: {
          color: 'error'
        }
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Stack spacing={1}>
            <InputLabel htmlFor="name">site</InputLabel>
            <TextField
              fullWidth
              id="name"
              name="name"
              placeholder="Entrer nom de site"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack spacing={1}>
            <InputLabel htmlFor="phone">Téléphone</InputLabel>
            <TextField
              fullWidth
              id="phone"
              name="phone"
              placeholder="Entrer numéro de téléphone"
              type="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
            />
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack spacing={1}>
            <InputLabel htmlFor="name">longtitude</InputLabel>
            <TextField
              fullWidth
              id="longtitude"
              name="longtitude"
              type="number"
              placeholder="Entrer le longtitude"
              value={formik.values.longtitude}
              onChange={formik.handleChange}
            />
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack spacing={1}>
            <InputLabel htmlFor="latitude">latitude</InputLabel>
            <TextField
              fullWidth
              id="latitude"
              name="latitude"
              type="number"
              placeholder="Entrer numéro de latitude"
              value={formik.values.latitude}
              onChange={formik.handleChange}
              error={formik.touched.latitude && Boolean(formik.errors.latitude)}
              helperText={formik.touched.latitude && formik.errors.latitude}
            />
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

export default NewSite;
