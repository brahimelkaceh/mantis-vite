import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import { Chip, DialogTitle, Divider, Typography, useTheme } from '@mui/material';
import { TimeClock } from '@mui/x-date-pickers';
import { ClockCircleFilled } from '@ant-design/icons';
import { borderColor } from '@mui/system';

export default function LightOn({ formik }) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      <Chip
        size="small"
        label="Allumage de lumiére"
        color="info"
        variant="outlined"
        onClick={handleClickOpen}
        icon={<ClockCircleFilled />}
      />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: 1.5
          }}
        >
          <Typography variant="caption" component={'span'}>
            Allumage de lumiére {'    '}
          </Typography>
          <Typography variant="subtitle1" component={'span'}>
            {formik?.values.lightOn &&
              `${formik?.values?.lightOn?.getHours().toString().padStart(2, '0')}:${formik?.values.lightOn
                .getMinutes()
                .toString()
                .padStart(2, '0')}`}
          </Typography>
        </DialogTitle>
        <Divider />
        <TimeClock
          value={formik?.values.lightOn}
          orientation="landscape"
          name="lightOn"
          showViewSwitcher
          ampm={false}
          onChange={(e) => formik?.setFieldValue('lightOn', e)}
        />
        <Divider />

        <DialogActions>
          <Button
            size="small"
            variant="outlined"
            color="error"
            sx={{
              color: theme.palette.error.dark,
              borderColor: theme.palette.error.main
            }}
            onClick={() => {
              handleClose();
              formik?.setFieldValue('lightOn', null);
            }}
          >
            Annuler
          </Button>
          <Button
            size="small"
            variant="contained"
            disabled={!formik?.values.lightOn}
            onClick={() => {
              handleClose();
            }}
          >
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export function LightOff({ formik }) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      <Chip
        size="small"
        label="Extinction de lumiére"
        color="error"
        sx={{
          color: theme.palette.error.dark,
          borderColor: theme.palette.error.main
        }}
        variant="outlined"
        onClick={handleClickOpen}
        icon={<ClockCircleFilled />}
      />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: 1.5
          }}
        >
          <Typography variant="caption" component={'span'}>
            Extinction de lumiére {'    '}
          </Typography>
          <Typography variant="subtitle1" component={'span'}>
            {formik?.values.lightOff &&
              `${formik?.values.lightOff.getHours().toString().padStart(2, '0')}:${formik?.values.lightOff
                .getMinutes()
                .toString()
                .padStart(2, '0')}`}
          </Typography>
        </DialogTitle>
        <Divider />
        <TimeClock
          value={formik?.values.lightOff}
          orientation="landscape"
          name="lightOff"
          showViewSwitcher
          ampm={false}
          onChange={(e) => {
            formik?.setFieldValue('lightOff', e);
          }}
        />
        <Divider />
        <DialogActions>
          <Button
            size="small"
            variant="outlined"
            color="error"
            sx={{
              color: theme.palette.error.dark,
              borderColor: theme.palette.error.main
            }}
            onClick={() => {
              handleClose();
              formik?.setFieldValue('lightOff', null);
            }}
          >
            Annuler
          </Button>
          <Button
            variant="contained"
            size="small"
            disabled={!formik?.values.lightOff}
            onClick={() => {
              handleClose();
            }}
          >
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export function LightDure({ formik }) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Chip
        size="small"
        label="Durée de lumiére"
        color="warning"
        variant="outlined"
        onClick={handleClickOpen}
        icon={<ClockCircleFilled />}
      />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: 1.5
          }}
        >
          <Typography variant="caption" component={'span'}>
            Durée de lumiére {'    '}
          </Typography>
          <Typography variant="subtitle1" component={'span'}>
            {formik?.values.lightDuration &&
              `${formik?.values.lightDuration.getHours().toString().padStart(2, '0')}:${formik?.values.lightDuration
                .getMinutes()
                .toString()
                .padStart(2, '0')}`}
          </Typography>
        </DialogTitle>
        <Divider />
        <TimeClock
          value={formik?.values.lightDuration}
          orientation="landscape"
          name="lightDuration"
          showViewSwitcher
          ampm={false}
          onChange={(e) => {
            formik?.setFieldValue('lightDuration', e);
          }}
        />
        <Divider />
        <DialogActions>
          <Button
            size="small"
            variant="outlined"
            color="error"
            sx={{
              color: theme.palette.error.dark,
              borderColor: theme.palette.error.main
            }}
            onClick={() => {
              handleClose();
              formik?.setFieldValue('lightDuration', null);
            }}
          >
            Annuler
          </Button>
          <Button
            variant="contained"
            size="small"
            disabled={!formik?.values.lightDuration}
            onClick={() => {
              handleClose();
            }}
          >
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export function FlashOn({ formik }) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Chip size="small" label="Allumage de flash" color="info" variant="outlined" onClick={handleClickOpen} icon={<ClockCircleFilled />} />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: 1.5
          }}
        >
          <Typography variant="caption" component={'span'}>
            Allumage de flash {'    '}
          </Typography>
          <Typography variant="subtitle1" component={'span'}>
            {formik?.values.flashOn &&
              `${formik?.values.flashOn.getHours().toString().padStart(2, '0')}:${formik?.values.flashOn
                .getMinutes()
                .toString()
                .padStart(2, '0')}`}
          </Typography>
        </DialogTitle>
        <Divider />
        <TimeClock
          value={formik?.values.flashOn}
          orientation="landscape"
          name="flashOn"
          showViewSwitcher
          ampm={false}
          onChange={(e) => {
            formik?.setFieldValue('flashOn', e);
          }}
        />
        <Divider />
        <DialogActions>
          <Button
            size="small"
            variant="outlined"
            color="error"
            sx={{
              color: theme.palette.error.dark,
              borderColor: theme.palette.error.main
            }}
            onClick={() => {
              handleClose();
              formik?.setFieldValue('flashOn', null);
            }}
          >
            Annuler
          </Button>
          <Button
            variant="contained"
            size="small"
            disabled={!formik?.values.flashOn}
            onClick={() => {
              handleClose();
            }}
          >
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export function FlashOff({ formik }) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Chip
        size="small"
        label="Extinction de flash"
        color="error"
        sx={{
          color: theme.palette.error.dark,
          borderColor: theme.palette.error.main
        }}
        variant="outlined"
        onClick={handleClickOpen}
        icon={<ClockCircleFilled />}
      />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: 1.5
          }}
        >
          <Typography variant="caption" component={'span'}>
            Extinction de flash {'    '}
          </Typography>
          <Typography variant="subtitle1" component={'span'}>
            {formik?.values.flashOff &&
              `${formik?.values.flashOff.getHours().toString().padStart(2, '0')}:${formik?.values.flashOff
                .getMinutes()
                .toString()
                .padStart(2, '0')}`}
          </Typography>
        </DialogTitle>
        <Divider />
        <TimeClock
          value={formik?.values.flashOff}
          orientation="landscape"
          name="flashOff"
          showViewSwitcher
          ampm={false}
          onChange={(e) => {
            formik?.setFieldValue('flashOff', e);
          }}
        />
        <Divider />
        <DialogActions>
          <Button
            size="small"
            variant="outlined"
            color="error"
            sx={{
              color: theme.palette.error.dark,
              borderColor: theme.palette.error.main
            }}
            onClick={() => {
              handleClose();
              formik?.setFieldValue('flashOn', null);
            }}
          >
            Annuler
          </Button>
          <Button
            variant="contained"
            size="small"
            disabled={!formik?.values.flashOn}
            onClick={() => {
              handleClose();
            }}
          >
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export function FlashDure({ formik }) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Chip size="small" label="Duré de flash" color="warning" variant="outlined" onClick={handleClickOpen} icon={<ClockCircleFilled />} />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: 1.5
          }}
        >
          <Typography variant="caption" component={'span'}>
            Duré de flash {'    '}
          </Typography>
          <Typography variant="subtitle1" component={'span'}>
            {formik?.values?.flashDuration &&
              `${formik?.values?.flashDuration?.getHours().toString().padStart(2, '0')}:${formik?.values.flashDuration
                .getMinutes()
                .toString()
                .padStart(2, '0')}`}
          </Typography>
        </DialogTitle>
        <Divider />
        <TimeClock
          value={formik?.values.flashDuration}
          orientation="landscape"
          name="flashDuration"
          showViewSwitcher
          ampm={false}
          onChange={(e) => {
            formik?.setFieldValue('flashDuration', e);
          }}
        />
        <Divider />
        <DialogActions>
          <Button
            size="small"
            variant="outlined"
            color="error"
            sx={{
              color: theme.palette.error.dark,
              borderColor: theme.palette.error.main
            }}
            onClick={() => {
              handleClose();
              formik?.setFieldValue('flashDuration', null);
            }}
          >
            Annuler
          </Button>
          <Button
            variant="contained"
            size="small"
            disabled={!formik?.values.flashDuration}
            onClick={() => {
              handleClose();
            }}
          >
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
