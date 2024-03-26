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
import { DateField, DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
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
import { enGB } from 'date-fns/locale';

// constant
const getInitialValues = (lot) => {
  const newLot = {
    site: lot.site_id,
    batiment: lot.batId,
    guideParent: lot.guide_id,
    effectifDP: lot.effectif_dp,
    birthDate: new Date(lot.birth_date)
  };

  if (lot) {
    return _.merge({}, newLot, lot);
  }

  return newLot;
};

// ==============================|| CUSTOMER ADD / EDIT - FORM ||============================== //

const FormLotEdit = ({ lot, closeModal, fetchProdLot, sites, guides }) => {
  const [loading, setLoading] = useState(true);
  const [batiments, setBatiments] = useState([]);
  const fetchProdBatiment = async (id) => {
    try {
      setLoading(true);
      const result = await api.getProdBatiments(id);

      if (result.status === 200) {
        const proudBats = result?.data?.filter((d) => d.type === 'production' && d.isEmpty);
        setBatiments(proudBats);
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
    setLoading(false);
    fetchProdBatiment(lot.site_id);
  }, []);
  const LotSchema = Yup.object().shape({
    site: Yup.string().required('site est requis'),
    batiment: Yup.string().required('bâtiment est requis'),
    guideParent: Yup.string().required('Guide est requis'),
    code: Yup.string().required('Code Lot est requis'),
    effectifDP: Yup.number()
      .typeError('Effectif logée doit être une valeur positive.')
      .min(0, 'Effectif logée doit être une valeur positive.')
      .required('Effectif logée est requis'),
    birthDate: Yup.string().required('Date naissance est requis')
  });

  const formik = useFormik({
    initialValues: getInitialValues(lot),
    validationSchema: LotSchema,
    enableReinitialize: true,
    onSubmit: async (values, { setSubmitting }) => {
      const formattedValues = {
        ...values,
        birthDate: values.birthDate.toLocaleString('en-GB').split(',')[0].replaceAll('/', '-').split('-').reverse().join('-')
      };

      try {
        if (lot) {
          updateLot(formattedValues).then(() => {
            openSnackbar({
              open: true,
              message: 'Le lot a été modifié au système avec succès.',
              variant: 'alert',
              alert: {
                color: 'success'
              }
            });
            setSubmitting(false);
            closeModal();
            fetchProdLot(lot.site_id);
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
  const updateLot = async (data) => {
    try {
      setLoading(true);
      const response = await api.updateLot(data);
      if (response.status === 200) {
        openSnackbar({
          open: true,
          message: 'Le lot a été modifié au système avec succès',
          variant: 'alert',
          alert: {
            color: 'success'
          }
        });
        setLoading(false);
        // fetchProdSite();
      }
      if (response.status !== 200) {
        openSnackbar({
          open: true,
          message: 'Échec de modification le lot; Veuillez réessayer.',
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
            <DialogTitle>{lot ? 'Modifier lot' : ''}</DialogTitle>
            <Divider />
            <DialogContent sx={{ p: 2.5 }}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
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
                            onChange={(event) => {
                              setFieldValue('site', event.target.value);
                              fetchProdBatiment(event.target.value);
                            }}
                            input={<OutlinedInput id="select-column-hiding" placeholder="Sort by" />}
                            renderValue={(selected) => {
                              if (!selected) {
                                return <Typography variant="subtitle1">Sélectionner site</Typography>;
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
                        {touched.site && errors.site && (
                          <FormHelperText error id="standard-weight-helper-text-email-login" sx={{ pl: 1.75 }} key="formHelperText">
                            {errors.site}
                          </FormHelperText>
                        )}
                      </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Stack spacing={0}>
                        <InputLabel htmlFor="type" key="inputLabel">
                          {loading ? 'chargement...' : 'Sélectionner bâtiment'}{' '}
                        </InputLabel>
                        <FormControl fullWidth key="formControl">
                          <Select
                            id="column-hiding"
                            displayEmpty
                            name="batiment"
                            {...getFieldProps('batiment')}
                            onChange={(event) => {
                              console.log(event.target.value);
                              setFieldValue('batiment', event.target.value);
                            }}
                            input={<OutlinedInput id="select-column-hiding" placeholder="Sort by" />}
                            renderValue={(selected) => {
                              if (!selected) {
                                return <Typography variant="subtitle1">Sélectionner site</Typography>;
                              }

                              const selectedType = batiments.find((item) => item.id === selected && item.isEmpty);
                              return (
                                <Typography variant="subtitle2">{selectedType ? selectedType.name : '(' + lot.batiment + ')'}</Typography>
                              );
                            }}
                            key="select"
                          >
                            {batiments.map((column) => (
                              <MenuItem key={column.id} value={column.id}>
                                <ListItemText primary={column.name} />
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                        {touched.batiment && errors.batiment && (
                          <FormHelperText error id="standard-weight-helper-text-email-login" sx={{ pl: 1.75 }} key="formHelperText">
                            {errors.batiment}
                          </FormHelperText>
                        )}
                      </Stack>
                    </Grid>

                    <Grid item xs={12}>
                      <Stack spacing={0}>
                        <InputLabel htmlFor="type" key="inputLabel">
                          {loading ? 'chargement...' : 'Sélectionner guide'}{' '}
                        </InputLabel>
                        <FormControl fullWidth key="formControl">
                          <Select
                            id="column-hiding"
                            displayEmpty
                            name="guideParent"
                            {...getFieldProps('guideParent')}
                            onChange={(event) => {
                              setFieldValue('guideParent', event.target.value);
                            }}
                            input={<OutlinedInput id="select-column-hiding" placeholder="Sort by" />}
                            renderValue={(selected) => {
                              if (!selected) {
                                return <Typography variant="subtitle1">Sélectionner guide</Typography>;
                              }

                              const selectedType = guides.find((item) => item.id === selected);
                              return <Typography variant="subtitle2">{selectedType ? selectedType.name : '--'}</Typography>;
                            }}
                            key="select"
                          >
                            {guides.map((column) => (
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
                        <InputLabel htmlFor="code">Code lot</InputLabel>
                        <TextField
                          fullWidth
                          id="code"
                          placeholder="Entrer code lot"
                          {...getFieldProps('code')}
                          error={Boolean(touched.code && errors.code)}
                          helperText={touched.code && errors.code}
                        />
                      </Stack>
                    </Grid>
                    <Grid item xs={12}>
                      <Stack spacing={0}>
                        <InputLabel htmlFor="effectifDP">Effectif logée</InputLabel>
                        <TextField
                          fullWidth
                          id="effectifDP"
                          placeholder="Entrer Effectif logée"
                          {...getFieldProps('effectifDP')}
                          error={Boolean(touched.effectifDP && errors.effectifDP)}
                          helperText={touched.effectifDP && errors.effectifDP}
                        />
                      </Stack>
                    </Grid>
                    <Grid item xs={12}>
                      <Stack spacing={0}>
                        <InputLabel htmlFor="birthDate">Date naissance</InputLabel>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                          <DesktopDatePicker
                            id="birthDate"
                            disabled
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

FormLotEdit.propTypes = {
  site: PropTypes.object,
  closeModal: PropTypes.func
};

export default FormLotEdit;
