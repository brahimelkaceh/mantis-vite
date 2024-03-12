import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import { Box, Chip } from '@mui/material';
import { StaticTimePicker, TimePickerToolbar } from '@mui/x-date-pickers';
import { ClockCircleFilled } from '@ant-design/icons';

export default function LightOn() {
  const [open, setOpen] = React.useState(false);
  const [lightOn, setLightOn] = React.useState('');
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function CustomToolbar(props) {
    const { classes, theme, date, isLandscape, openView, setOpenView, onCancel, onAccept, ...other } = props;
    return (
      <Box
        // Pass the className to the root element to get correct layout
        className={props.className}
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
      >
        <TimePickerToolbar {...other} ampm={false} date={date} isLandscape={isLandscape} openView={openView} setOpenView={setOpenView} />
      </Box>
    );
  }

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
        <StaticTimePicker
          orientation="landscape"
          name="lightOn"
          showViewSwitcher
          componentsProps={{ actionBar: { actions: [] } }}
          slots={{
            toolbar: CustomToolbar
          }}
          onChange={(e) => setLightOn(e)}
        />
        <DialogActions>
          <Button disabled={!lightOn} onClick={handleClose}>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export function LightOff() {
  const [open, setOpen] = React.useState(false);
  const [lightOff, setLightOff] = React.useState('');
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function CustomToolbar(props) {
    const { classes, theme, date, isLandscape, openView, setOpenView, onCancel, onAccept, ...other } = props;
    return (
      <Box
        // Pass the className to the root element to get correct layout
        className={props.className}
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
      >
        <TimePickerToolbar {...other} ampm={false} date={date} isLandscape={isLandscape} openView={openView} setOpenView={setOpenView} />
      </Box>
    );
  }

  return (
    <React.Fragment>
      <Chip
        size="small"
        label="Extinction de lumière"
        color="error"
        variant="outlined"
        onClick={handleClickOpen}
        icon={<ClockCircleFilled />}
      />
      <Dialog open={open} onClose={handleClose}>
        <StaticTimePicker
          orientation="landscape"
          name="lightOn"
          showViewSwitcher
          componentsProps={{ actionBar: { actions: [] } }}
          slots={{
            toolbar: CustomToolbar
          }}
          onChange={(e) => setLightOff(e)}
        />
        <DialogActions>
          <Button disabled={!lightOff} onClick={handleClose}>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
export function LightDure() {
  const [open, setOpen] = React.useState(false);
  const [lightDure, setLightDure] = React.useState('');
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function CustomToolbar(props) {
    const { classes, theme, date, isLandscape, openView, setOpenView, onCancel, onAccept, ...other } = props;
    return (
      <Box
        // Pass the className to the root element to get correct layout
        className={props.className}
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
      >
        <TimePickerToolbar {...other} ampm={false} date={date} isLandscape={isLandscape} openView={openView} setOpenView={setOpenView} />
      </Box>
    );
  }

  return (
    <React.Fragment>
      <Chip
        size="small"
        label="Durée de lumière"
        color="warning"
        variant="outlined"
        onClick={handleClickOpen}
        icon={<ClockCircleFilled />}
      />
      <Dialog open={open} onClose={handleClose}>
        <StaticTimePicker
          orientation="landscape"
          name="lightOn"
          showViewSwitcher
          componentsProps={{ actionBar: { actions: [] } }}
          slots={{
            toolbar: CustomToolbar
          }}
          onChange={(e) => setLightDure(e)}
        />
        <DialogActions>
          <Button disabled={!lightDure} onClick={handleClose}>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
export function FlashOn() {
  const [open, setOpen] = React.useState(false);
  const [flashOn, setFlashOn] = React.useState('');
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function CustomToolbar(props) {
    const { classes, theme, date, isLandscape, openView, setOpenView, onCancel, onAccept, ...other } = props;
    return (
      <Box
        // Pass the className to the root element to get correct layout
        className={props.className}
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
      >
        <TimePickerToolbar {...other} ampm={false} date={date} isLandscape={isLandscape} openView={openView} setOpenView={setOpenView} />
      </Box>
    );
  }

  return (
    <React.Fragment>
      <Chip size="small" label="Allumage de flash" color="info" variant="outlined" onClick={handleClickOpen} icon={<ClockCircleFilled />} />
      <Dialog open={open} onClose={handleClose}>
        <StaticTimePicker
          orientation="landscape"
          name="lightOn"
          showViewSwitcher
          componentsProps={{ actionBar: { actions: [] } }}
          slots={{
            toolbar: CustomToolbar
          }}
          onChange={(e) => setFlashOn(e)}
        />
        <DialogActions>
          <Button disabled={!flashOn} onClick={handleClose}>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
export function FlashOff() {
  const [open, setOpen] = React.useState(false);
  const [flashOff, setFlashOff] = React.useState('');
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function CustomToolbar(props) {
    const { classes, theme, date, isLandscape, openView, setOpenView, onCancel, onAccept, ...other } = props;
    return (
      <Box
        // Pass the className to the root element to get correct layout
        className={props.className}
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
      >
        <TimePickerToolbar {...other} ampm={false} date={date} isLandscape={isLandscape} openView={openView} setOpenView={setOpenView} />
      </Box>
    );
  }

  return (
    <React.Fragment>
      <Chip
        size="small"
        label="Extinction de flash"
        color="error"
        variant="outlined"
        onClick={handleClickOpen}
        icon={<ClockCircleFilled />}
      />
      <Dialog open={open} onClose={handleClose}>
        <StaticTimePicker
          orientation="landscape"
          name="lightOn"
          showViewSwitcher
          componentsProps={{ actionBar: { actions: [] } }}
          slots={{
            toolbar: CustomToolbar
          }}
          onChange={(e) => setFlashOff(e)}
        />
        <DialogActions>
          <Button disabled={!flashOff} onClick={handleClose}>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
export function FlashDure() {
  const [open, setOpen] = React.useState(false);
  const [flashDure, setFlashDure] = React.useState('');
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function CustomToolbar(props) {
    const { classes, theme, date, isLandscape, openView, setOpenView, onCancel, onAccept, ...other } = props;
    return (
      <Box
        // Pass the className to the root element to get correct layout
        className={props.className}
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
      >
        <TimePickerToolbar {...other} ampm={false} date={date} isLandscape={isLandscape} openView={openView} setOpenView={setOpenView} />
      </Box>
    );
  }

  return (
    <React.Fragment>
      <Chip size="small" label="Durée de flash" color="warning" variant="outlined" onClick={handleClickOpen} icon={<ClockCircleFilled />} />
      <Dialog open={open} onClose={handleClose}>
        <StaticTimePicker
          orientation="landscape"
          name="lightOn"
          showViewSwitcher
          componentsProps={{ actionBar: { actions: [] } }}
          slots={{
            toolbar: CustomToolbar
          }}
          onChange={(e) => setFlashDure(e)}
        />
        <DialogActions>
          <Button disabled={!flashDure} onClick={handleClose}>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
