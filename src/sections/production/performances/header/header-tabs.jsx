import PropTypes from 'prop-types';
import { useState } from 'react';

// material-ui
import { Box, Grid, Tab, Tabs, Typography } from '@mui/material';
import { BookOutlined, FileImageOutlined, SelectOutlined, UserOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import MainCard from 'components/MainCard';
import PreferencePanel from './preference-panel';
import BilanPArtiel from './bilan-partiel.jsx';

function TabPanel({ children, value, index, ...other }) {
  return (
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && <Box sx={{ pt: 2 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  value: PropTypes.number,
  index: PropTypes.number
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}
const HeaderTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid item xs={12}>
      <MainCard>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="Panel de Préférences" icon={<SelectOutlined />} iconPosition="start" {...a11yProps(0)} />
              <Tab label="Bilan Partiel" icon={<BookOutlined />} iconPosition="start" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <PreferencePanel />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <BilanPArtiel />
          </TabPanel>
        </Box>
      </MainCard>
    </Grid>
  );
};

export default HeaderTabs;
