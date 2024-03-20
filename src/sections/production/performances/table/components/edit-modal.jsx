import { forwardRef, useEffect, useState } from 'react';

// material-ui
import {
  Avatar,
  AppBar,
  Button,
  Dialog,
  Divider,
  List,
  ListItemButton,
  ListItemAvatar,
  ListItemText,
  Slide,
  Toolbar,
  Typography,
  useTheme,
  DialogContent,
  Grid,
  Stack,
  Box,
  DialogContentText,
  DialogActions,
  CircularProgress,
  LinearProgress
} from '@mui/material';

// project import
import IconButton from 'components/@extended/IconButton';

// assets
import { CloseOutlined, EditFilled } from '@ant-design/icons';
import avatar1 from 'assets/images/users/avatar-1.png';
import avatar2 from 'assets/images/users/avatar-2.png';
import LoadingButton from 'components/@extended/LoadingButton';
import ReportForm from 'sections/production/report/ReportForm';
import { useFormik } from 'formik';
import { openSnackbar } from 'api/snackbar';
import { validationSchema } from 'pages/production/validation-schema';
import AnimateButton from 'components/@extended/AnimateButton';
import { Edit, Send } from '@mui/icons-material';
import { PopupTransition } from 'components/@extended/Transitions';
import api from 'api/production';
import MainCard from 'components/MainCard';

const Transition = forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

// ==============================|| DIALOG - FULL SCREEN ||============================== //

export default function EditModal({ id }) {
  const theme = useTheme();
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [prefilledData, setPrefilledData] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClickOpenConfirmModal = () => {
    setOpenConfirmModal(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const fetchPerformanceTable = async (id) => {
    try {
      setLoading(true);
      const result = await api.getPrefilled(id);
      if (result.status === 200) {
        console.log(result.data);
        setPrefilledData(result.data);
        setLoading(false);
      }
    } catch (error) {
      openSnackbar({
        open: true,
        message: 'Échec de récupération les données; Veuillez réessayer.',
        variant: 'alert',
        alert: {
          color: 'error'
        }
      });
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
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
      handleClose();
      setOpenConfirmModal(false);
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
    // ! Get batiment Id
    formik.setValues({
      ...formik.values,
      // id: id,
      mort: prefilledData?.mort,
      hensEliminated: prefilledData?.sujet_elimines,
      poidVif: prefilledData?.poidVif,
      homog: prefilledData?.homog,
      prod_normal: prefilledData?.prod_normal,
      prod_dj: prefilledData?.prod_dj,
      prod_blanc: prefilledData?.prod_blanc,
      prod_casse: prefilledData?.prod_casse,
      prod_feles: prefilledData?.prod_feles,
      prod_elimne: prefilledData?.prod_elimne,
      prod_liquide: prefilledData?.prod_liquide,
      alimentDist: prefilledData?.alimentDist,
      eauDist: prefilledData?.eauDist,
      pmo: prefilledData?.pmo,
      formule: prefilledData?.formule,
      temperatureInt: [prefilledData?.temperatureMin, prefilledData?.temperatureMax],
      temperatureExt: [prefilledData?.temperatureMinExt, prefilledData?.temperatureMaxExt],
      // temperatureMaxExt: prefilledData?.temperatureMaxExt,
      // lightOn: prefilledData?.lightOn,
      // lightOff: prefilledData?.lightOff,
      // flashOn: prefilledData?.flashOn,
      // flashOff: prefilledData?.flashOff,
      // flashDuration: prefilledData?.flashDuration,
      // lightDuration: prefilledData?.lightDuration,
      intensite: prefilledData?.intensite * 1,
      intensIsLux: prefilledData?.intensIsLux,
      coloration: prefilledData?.coloration,
      qty_shell: prefilledData?.coquille,
      hensReformed: prefilledData?.hensReformed,
      hensReformedFree: prefilledData?.hensReformedFree,
      hensReformedTriage: prefilledData?.hensReformedTriage,
      isKg: prefilledData?.isKg,
      price: prefilledData?.price,
      observation: prefilledData?.observation
    });
  }, [prefilledData]);

  return (
    <>
      <LoadingButton
        size="small"
        color="warning"
        variant="text"
        shape="square"
        onClick={() => {
          handleOpen();
          fetchPerformanceTable(id);
        }}
      >
        <Edit />
      </LoadingButton>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar color="inherit" sx={{ position: 'relative', boxShadow: 'none', borderBottom: `solid 2px ${theme.palette.divider}` }}>
          <Toolbar>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h5" component="div">
              Modifier le rapport
            </Typography>
            <Button
              color="error"
              sx={{
                bgcolor: theme.palette.error.main
              }}
              endIcon={<CloseOutlined />}
              variant="contained"
              onClick={handleClose}
            >
              Fermer
            </Button>
          </Toolbar>
        </AppBar>
        {loading && <LinearProgress size={18} />}
        <DialogContent>
          <form>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <ReportForm formik={formik} />
              </Grid>
              <Grid item xs={12}>
                <Stack direction="row" justifyContent="flex-end">
                  <AnimateButton>
                    <Button
                      endIcon={<Send />}
                      // disabled={!formik?.values.batiment}
                      variant="contained"
                      onClick={handleClickOpenConfirmModal}
                    >
                      Submit
                    </Button>
                  </AnimateButton>
                </Stack>
              </Grid>
            </Grid>
          </form>
        </DialogContent>
      </Dialog>
      <Dialog
        open={openConfirmModal}
        TransitionComponent={PopupTransition}
        keepMounted
        onClose={() => setOpenConfirmModal(false)}
        aria-describedby="alert-dialog-slide-description"
        sx={{
          zIndex: 100000
        }}
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
              onClick={() => setOpenConfirmModal(false)}
            >
              Annuler
            </Button>
            <Button
              color="success"
              variant="contained"
              onClick={() => {
                formik.handleSubmit();
              }}
            >
              Confirmer
            </Button>
          </DialogActions>
        </Box>
      </Dialog>{' '}
    </>
  );
}
