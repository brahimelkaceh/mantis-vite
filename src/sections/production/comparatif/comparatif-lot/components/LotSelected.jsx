import { Checkbox, FormControl, InputLabel, ListItemText, MenuItem, OutlinedInput, Select } from '@mui/material';
import React from 'react';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

const LotSelected = ({ lots, lotName, setLotName, loading }) => {
  const handleChange = (event) => {
    const {
      target: { value }
    } = event;

    setLotName(typeof value === 'string' ? value.split(',') : value);
    // setLot(newSelectedLots);
  };
  return (
    <FormControl fullWidth variant="outlined" controlled>
      <InputLabel id="demo-simple-select-standard-label">Sélectionnez un LOT</InputLabel>
      <Select
        labelId="demo-simple-select-standard-label"
        disabled={loading}
        multiple
        value={lotName}
        onChange={handleChange}
        input={<OutlinedInput label="Sélectionnez les Lots" />}
        renderValue={(selected) => {
          const codeLot = lots?.filter((lot) => lot.type === 'production').filter((par) => selected.includes(par.id));
          return codeLot.map((lot, i) => <span key={i}> {`${lot.batiment} (${lot.code})`},</span>);
        }}
        MenuProps={MenuProps}
      >
        <MenuItem value="" disabled>
          <em>Sélectionnez lot</em>
        </MenuItem>
        {lots &&
          lots.map((title) => (
            <MenuItem key={title.id} value={title?.id}>
              <Checkbox checked={lotName?.includes(title.id)} />
              <ListItemText secondary={`${title.batiment} (${title.code})`} />
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
};

export default LotSelected;
