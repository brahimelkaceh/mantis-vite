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
import NewBatiment from './form';

// constant
const getInitialValues = (batiment) => {
  const NewBatiment = {
    site: batiment.site_id,
    typeOf: batiment.type,
    bat_id: batiment.id
  };

  if (batiment) {
    return _.merge({}, NewBatiment, batiment);
  }

  return NewBatiment;
};

// ==============================|| CUSTOMER ADD / EDIT - FORM ||============================== //

const FormBatimentEdit = ({ batiment, closeModal, fetchBatiments }) => {
  const [loading, setLoading] = useState(true);
  const types = [
    { value: 'production', label: 'Production' },
    { value: 'poussiniere', label: 'Poussiniere' }
  ];
  const [sites, setSites] = useState([]);
  useEffect(() => {
    setLoading(false);
  }, []);

  const BatimentSchema = Yup.object().shape({
    name: Yup.string().required('nom bâtiment est requis'),
    site: Yup.string().required('le site est requis')
  });

  const formik = useFormik({
    initialValues: getInitialValues(batiment),
    validationSchema: BatimentSchema,
    enableReinitialize: true,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        if (batiment) {
          updateBatiment(values).then(() => {
            openSnackbar({
              open: true,
              message: 'Le bâtiment a été modifié avec succès!.',
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
  if (loading)
    return (
      <Box sx={{ p: 5 }}>
        <Stack direction="row" justifyContent="center">
          <CircularWithPath />
        </Stack>
      </Box>
    );
  const updateBatiment = async (data) => {
    try {
      setLoading(true);
      const response = await api.updateBatiment(data);
      if (response.status === 200) {
        openSnackbar({
          open: true,
          message: 'Le bâtiment a été modifié avec succès!',
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
          message: 'Échec de la modification de bâtiment. Veuillez réessayer',
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
        message: 'Échec de la modification de bâtiment. Veuillez réessayer',
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
            <DialogTitle>{batiment ? 'Modifier bâtiment' : ''}</DialogTitle>
            <Divider />
            <DialogContent sx={{ p: 2.5 }}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <Stack spacing={0}>
                        <InputLabel htmlFor="name">Bâtiment</InputLabel>
                        <TextField
                          fullWidth
                          id="name"
                          placeholder="Entrer nom de bâtiment"
                          {...getFieldProps('name')}
                          error={Boolean(touched.name && errors.name)}
                          helperText={touched.name && errors.name}
                        />
                      </Stack>
                    </Grid>
                    <Grid item xs={12}>
                      <Stack spacing={0}>
                        <InputLabel htmlFor="type" key="inputLabel">
                          {loading ? 'chargement...' : 'Sélectionner site'}{' '}
                        </InputLabel>
                        <FormControl fullWidth key="formControl">
                          <Select
                            id="column-hiding"
                            displayEmpty
                            name="site"
                            {...getFieldProps('site')}
                            onChange={(event) => setFieldValue('site', event.target.value)}
                            input={<OutlinedInput id="select-column-hiding" placeholder="Sort by" />}
                            renderValue={(selected) => {
                              if (!selected) {
                                return <Typography variant="subtitle1">Select Status</Typography>;
                              }

                              const selectedType = sites.find((item) => item.id === selected);
                              return <Typography variant="subtitle2">{selectedType ? selectedType.name : '--'}</Typography>;
                            }}
                            key="select"
                          >
                            {sites.map((column) => (
                              <MenuItem key={column.id} value={column.id}>
                                <ListItemText primary={column.name} />
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                        {touched.type && errors.type && (
                          <FormHelperText error id="standard-weight-helper-text-email-login" sx={{ pl: 1.75 }} key="formHelperText">
                            {errors.type}
                          </FormHelperText>
                        )}
                      </Stack>
                    </Grid>
                    <Grid item xs={12}>
                      <Stack spacing={0}>
                        <InputLabel htmlFor="type" key="inputLabel">
                          Production/Poussiniere
                        </InputLabel>
                        <FormControl fullWidth key="formControl">
                          <Select
                            id="column-hiding"
                            displayEmpty
                            name="typeOf"
                            {...getFieldProps('typeOf')}
                            onChange={(event) => setFieldValue('typeOf', event.target.value)}
                            input={<OutlinedInput id="select-column-hiding" placeholder="Sort by" />}
                            renderValue={(selected) => {
                              if (!selected) {
                                return <Typography variant="subtitle1">Select Status</Typography>;
                              }

                              const selectedType = types.find((item) => item.value === selected);
                              return <Typography variant="subtitle2">{selectedType ? selectedType.label : 'Pending'}</Typography>;
                            }}
                            key="select"
                          >
                            {types.map((column) => (
                              <MenuItem key={column.value} value={column.value}>
                                <ListItemText primary={column.label} />
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                        {touched.type && errors.type && (
                          <FormHelperText error id="standard-weight-helper-text-email-login" sx={{ pl: 1.75 }} key="formHelperText">
                            {errors.type}
                          </FormHelperText>
                        )}
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

FormBatimentEdit.propTypes = {
  site: PropTypes.object,
  closeModal: PropTypes.func
};

export default FormBatimentEdit;
