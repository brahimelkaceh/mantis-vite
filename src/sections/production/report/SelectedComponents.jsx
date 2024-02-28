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

// project imports
import MainCard from 'components/MainCard';
import AnimateButton from 'components/@extended/AnimateButton';
import { openSnackbar } from 'api/snackbar';

// third-party
import { useFormik } from 'formik';
import * as yup from 'yup';

/**
 * 'Enter your age'
 * yup.number Expected 0 arguments, but got 1 */
const validationSchema = yup.object({
  age: yup.number().required('Age selection is required.')
});

// ==============================|| FORM VALIDATION - LOGIN FORMIK ||============================== //

const SelectedComponents = () => {
  const formik = useFormik({
    initialValues: {
      age: ''
    },
    validationSchema,
    onSubmit: (values) => {
      console.log('select form submit - ', values);
      openSnackbar({
        open: true,
        message: 'Select - Submit Success',
        variant: 'alert',
        alert: {
          color: 'success'
        }
      });
    }
  });

  return (
    <Grid container spacing={2} alignItems={'end'}>
      <Grid item xs={12} md={6} lg={4}>
        <Stack spacing={1}>
          <Typography color={'GrayText'} variant="caption" gutterBottom>
            Sites
          </Typography>
          <FormControl sx={{ m: 1, mt: 0, minWidth: 120 }}>
            <Select value={formik.values.age} onChange={formik.handleChange}>
              <MenuItem value="" disabled>
                <em>Selectionnez site</em>
              </MenuItem>
              <MenuItem value={10}>Site 1</MenuItem>
              <MenuItem value={20}>Site 2</MenuItem>
              <MenuItem value={30}>Site 3</MenuItem>
            </Select>
            {formik.errors.age && (
              <FormHelperText error id="standard-weight-helper-text-email-login">
                {' '}
                {formik.errors.age}{' '}
              </FormHelperText>
            )}
          </FormControl>
        </Stack>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Stack spacing={1}>
          <Typography color={'GrayText'} variant="caption" gutterBottom>
            Bâtiments
          </Typography>{' '}
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Select id="age" name="age" value={formik.values.age} onChange={formik.handleChange}>
              <MenuItem value="">
                <em>Selectionnez bâtiment</em>
              </MenuItem>
              <MenuItem value={10}>Bâtiment 1</MenuItem>
              <MenuItem value={20}>Bâtiment 2</MenuItem>
              <MenuItem value={30}>Bâtiment 3</MenuItem>
            </Select>
            {formik.errors.age && (
              <FormHelperText error id="standard-weight-helper-text-email-login">
                {' '}
                {formik.errors.age}{' '}
              </FormHelperText>
            )}
          </FormControl>
        </Stack>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <ListItem sx={{ py: 0.5, px: 0 }}>
          <ListItemText secondary={'Rapport de :'} />
          <Typography variant="subtitle1" sx={{ color: 'warning.main' }}>
            16/02/2024
          </Typography>
        </ListItem>
        <Divider />
        <ListItem sx={{ py: 0.5, px: 0, pb: 0 }}>
          <ListItemText secondary={'Code lot :'} />
          <Typography variant="subtitle1" sx={{ color: 'warning.main' }}>
            02B1NOV22-HL-DK
          </Typography>
        </ListItem>
      </Grid>
    </Grid>
  );
};

export default SelectedComponents;
