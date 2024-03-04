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

/**
 * 'Enter your age'
 * yup.number Expected 0 arguments, but got 1 */
const validationSchema = yup.object({
  age: yup.number().required('Age selection is required.')
});

// ==============================|| FORM VALIDATION - LOGIN FORMIK ||============================== //

const PreferencePanel = () => {
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
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
            Lots
          </Typography>{' '}
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Select id="age" name="age" value={formik.values.age} onChange={formik.handleChange}>
              <MenuItem value="" disabled>
                <em>Selectionnez Lot</em>
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
      <Grid container item xs={12} md={12} lg={4} justifyContent={isMobile ? 'start' : 'end'}>
        <LoadingButton variant="contained" color="info" loadingPosition="start" startIcon={<ArrowRightIcon />}>
          Afficher les données
        </LoadingButton>
      </Grid>
    </Grid>
  );
};

export default PreferencePanel;
