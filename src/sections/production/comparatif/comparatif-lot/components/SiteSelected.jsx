import { Checkbox, FormControl, InputLabel, ListItemText, MenuItem, OutlinedInput, Select } from '@mui/material';
import React from 'react';
import { useMemo } from 'react';
import { useState } from 'react';
import UseFetchData from '../../../hooks/UseFetchData';
let base_url = 'https://farmdriver.savas.ma/api/';

const SiteSelected = ({ setSiteId }) => {
  const [siteName, setSiteName] = useState('');

  const sitesTitlesApiUrl = useMemo(() => `${base_url}get-sites-titles/`, [base_url]);
  const { data, loading, error } = UseFetchData(sitesTitlesApiUrl, 'GET');
  const handleChange = (event) => {
    setSiteId(event.target.value);
    setSiteName(event.target.value);
  };
  return (
    <FormControl fullWidth sx={{ m: 1, minWidth: 300 }}>
      <InputLabel id="demo-simple-select-label">{loading ? 'Télechargment encours...' : 'Sélectionnez un Site'}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={siteName}
        label="Sélectionnez un Site"
        onChange={handleChange}
      >
        {data?.map((site) => (
          <MenuItem value={site?.id} key={site?.id}>
            {site?.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SiteSelected;
