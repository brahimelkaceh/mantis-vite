import React, { useState } from 'react';
import { Card, Divider, Grid, IconButton, Stack, SvgIcon, Typography } from '@mui/material';
import { Fullscreen } from '@mui/icons-material';
import ConsommationChart from '../charts/ConsommationChart';
const Consommation = ({ data }) => {
  const [open, setOpen] = useState(false);

  return (
    <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 3, sm: 8, md: 12 }}>
      {data?.map((code, i) => (
        <Grid item xs={12} sm={4} md={4} key={i}>
          {open ? (
            // <MortaliteModal code={code} i={i} open={open} setOpen={setOpen} />
            <Typography>opened i={i}</Typography>
          ) : (
            <Card>
              <Stack flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'} pl={1}>
                <Typography color="error" variant="caption">
                  {code.lot}
                </Typography>
                <Typography color="primary" variant="body2">
                  Consommation{' '}
                </Typography>
                <IconButton color="primary" size="small" onClick={() => setOpen(true)}>
                  <SvgIcon>
                    <Fullscreen />
                  </SvgIcon>
                </IconButton>
              </Stack>
              <Divider />
              <div
                style={{
                  height: '40vh',
                  color: 'white',
                  margin: ' 5px'
                }}
              >
                <ConsommationChart show={false} code={code} i={i} />
              </div>
            </Card>
          )}
        </Grid>
      ))}
    </Grid>
  );
};

export default Consommation;
