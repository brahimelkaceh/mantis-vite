import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  FormHelperText,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  Switch,
  TextField,
  Tooltip,
  Typography,
  RadioGroup,
  Radio,
  Autocomplete,
  Chip
} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

// third-party
import _ from 'lodash';
import * as Yup from 'yup';
import { useFormik, Form, FormikProvider } from 'formik';

// project imports
import Avatar from 'components/@extended/Avatar';
import IconButton from 'components/@extended/IconButton';
import CircularWithPath from 'components/@extended/progress/CircularWithPath';
import api from 'api/production';
import { openSnackbar } from 'api/snackbar';

// constant
const getInitialValues = (site) => {
  const newSite = {
    name: '',
    phone: ''
  };

  if (site) {
    return _.merge({}, newSite, site);
  }

  return newSite;
};

// ==============================|| CUSTOMER ADD / EDIT - FORM ||============================== //

const FormSiteEdit = ({ site, closeModal, fetchProdSite }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  const SiteSchema = Yup.object().shape({
    name: Yup.string().required('nom site est requis'),
    phone: Yup.string().required('numero télephone de site est requis')
  });

  const formik = useFormik({
    initialValues: getInitialValues(site),
    validationSchema: SiteSchema,
    enableReinitialize: true,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        console.log(values);
        if (site) {
          updateSite(values).then(() => {
            openSnackbar({
              open: true,
              message: 'Customer update successfully.',
              variant: 'alert',
              alert: {
                color: 'success'
              }
            });
            setSubmitting(false);
            closeModal();
          });
        }
      } catch (error) {
        console.error(error);
      }
    }
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps, setFieldValue } = formik;

  if (loading)
    return (
      <Box sx={{ p: 5 }}>
        <Stack direction="row" justifyContent="center">
          <CircularWithPath />
        </Stack>
      </Box>
    );
  const updateSite = async (data) => {
    try {
      setLoading(true);
      const response = await api.updateSite(data);
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
    <>
      <FormikProvider value={formik}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <DialogTitle>{site ? 'Modifier site' : ''}</DialogTitle>
            <Divider />
            <DialogContent sx={{ p: 2.5 }}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <Stack spacing={1}>
                        <InputLabel htmlFor="name">site</InputLabel>
                        <TextField
                          fullWidth
                          id="name"
                          placeholder="Entrer nom de site"
                          {...getFieldProps('name')}
                          error={Boolean(touched.name && errors.name)}
                          helperText={touched.name && errors.name}
                        />
                      </Stack>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Stack spacing={1}>
                        <InputLabel htmlFor="phone">Téléphone</InputLabel>
                        <TextField
                          fullWidth
                          id="phone"
                          placeholder="Entrer numéro de téléphone"
                          {...getFieldProps('phone')}
                          error={Boolean(touched.phone && errors.phone)}
                          helperText={touched.phone && errors.phone}
                        />
                      </Stack>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </DialogContent>
            <Divider />
            <DialogActions sx={{ p: 2.5 }}>
              <Grid container justifyContent="end" alignItems="center">
                <Grid item>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Button color="error" onClick={closeModal}>
                      Annuler
                    </Button>
                    <Button type="submit" variant="contained" disabled={isSubmitting}>
                      Modifier
                    </Button>
                  </Stack>
                </Grid>
              </Grid>
            </DialogActions>
          </Form>
        </LocalizationProvider>
      </FormikProvider>
    </>
  );
};

FormSiteEdit.propTypes = {
  site: PropTypes.object,
  closeModal: PropTypes.func
};

export default FormSiteEdit;
