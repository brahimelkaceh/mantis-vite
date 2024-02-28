// material-ui
import { Button, FormControl, FormHelperText, Grid, InputLabel, MenuItem, Select, Stack, Typography } from '@mui/material';
import { openSnackbar } from 'api/snackbar';
import AnimateButton from 'components/@extended/AnimateButton';

// project import
import MainCard from 'components/MainCard';
import { useFormik } from 'formik';
import ReportForm from 'sections/production/report/ReportForm';
import SelectedComponents from 'sections/production/report/SelectedComponents';
import { validationSchema } from './validation-schema';

// ==============================|| SAMPLE PAGE ||============================== //

const NewReport = () => {
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
      lightOn: '',
      lightOff: '',
      flashOn: '',
      flashOff: '',
      flashDuration: '',
      lightDuration: '',
      intensite: '',
      intensIsLux: '',
      coloration: '',
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
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <MainCard>
          <Grid container>
            <Grid item xs={12}>
              <SelectedComponents />
            </Grid>
          </Grid>
        </MainCard>
      </Grid>
      <Grid item xs={12}>
        <MainCard>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <ReportForm formik={formik} />
              </Grid>
              <Grid item xs={12}>
                <Stack direction="row" justifyContent="flex-end">
                  <AnimateButton>
                    <Button variant="contained" type="submit">
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
