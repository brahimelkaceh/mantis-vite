import PropTypes from 'prop-types';

// material-ui
import { Button, Dialog, DialogContent, Stack, Typography } from '@mui/material';

// project import
import Avatar from 'components/@extended/Avatar';
import { PopupTransition } from 'components/@extended/Transitions';

import { deleteCustomer } from 'api/customer';
import { openSnackbar } from 'api/snackbar';

// assets
import { DeleteFilled } from '@ant-design/icons';
import api from 'api/production';

// ==============================|| CUSTOMER - DELETE ||============================== //

export default function AlertLotDelete({ id, open, handleClose, fetchProdSite }) {
  const deletehandler = async () => {
    const response = await api.deleteSite(id);
    if (response.status !== 200) {
      openSnackbar({
        open: true,
        message: 'La suppression du site a échoué. Veuillez réessayer.',
        anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
        variant: 'alert',
        alert: {
          color: 'error'
        }
      });
    } else {
      openSnackbar({
        open: true,
        message: 'Le site a été supprimé avec succès.',
        anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
        variant: 'alert',
        alert: {
          color: 'success'
        }
      });
      fetchProdSite();
    }
    handleClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      keepMounted
      TransitionComponent={PopupTransition}
      maxWidth="xs"
      aria-labelledby="column-delete-title"
      aria-describedby="column-delete-description"
    >
      <DialogContent sx={{ mt: 2, my: 1 }}>
        <Stack alignItems="center" spacing={3.5}>
          <Avatar color="error" sx={{ width: 72, height: 72, fontSize: '1.75rem' }}>
            <DeleteFilled />
          </Avatar>
          <Stack spacing={2}>
            <Typography variant="h4" align="center">
              Êtes-vous sûr(e) de vouloir supprimer cet élément ?{' '}
            </Typography>
            <Typography align="center">Cette action ne peut pas être annulée.</Typography>
          </Stack>

          <Stack direction="row" spacing={2} sx={{ width: 1 }}>
            <Button fullWidth onClick={handleClose} color="secondary" variant="outlined">
              Annuler
            </Button>
            <Button fullWidth color="error" variant="contained" onClick={deletehandler} autoFocus>
              Supprimer
            </Button>
          </Stack>
        </Stack>
      </DialogContent>
    </Dialog>
  );
}

AlertLotDelete.propTypes = {
  id: PropTypes.any,
  title: PropTypes.any,
  open: PropTypes.bool,
  handleClose: PropTypes.func
};
