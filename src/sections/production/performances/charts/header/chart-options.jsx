import * as React from 'react';
import Button from '@mui/material/Button';
import { Checkbox, FormControl, Grid, InputLabel, ListItemText, MenuItem, OutlinedInput, Select, Stack } from '@mui/material';
import { useState } from 'react';

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
export default function ChartOptions({ checkboxItems, setChartName, chartName }) {
  const handleChange = (event) => {
    const {
      target: { value }
    } = event;

    setChartName(typeof value === 'string' ? value.split(',') : value);
  };
  const [checkedItems, setCheckedItems] = useState({});
  const handleCheckboxChange = (itemId) => {
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [itemId]: !prevCheckedItems[itemId]
    }));
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-multiple-checkbox-label">Sélectionnez une courbe</InputLabel>
      <Select
        labelId="demo-multiple-checkbox-label"
        id="demo-multiple-checkbox"
        multiple
        label="Sélectionnez une courbe"
        value={chartName}
        onChange={handleChange}
        input={<OutlinedInput label="Select courbe" />}
        renderValue={(selected) => selected.join(', ')}
        MenuProps={MenuProps}
      >
        {Object.keys(checkboxItems).map((itemName) => (
          <MenuItem key={itemName} value={itemName}>
            <Checkbox checked={chartName.indexOf(itemName) > -1} onChange={() => handleCheckboxChange(itemName)} />
            <ListItemText primary={checkboxItems[itemName].name} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
