// TableCol.js

import React from 'react';
import { Chip, Stack, TableCell, Tooltip, Typography, useTheme } from '@mui/material';

const TableCol = ({ value, dayRow }) => {
  const theme = useTheme();

  if (typeof value === 'object') {
    if (value?.period) {
      return (
        <TableCell>
          <Tooltip
            title={
              <Stack flexDirection={'row'}>
                <Typography variant="body1" component={'span'}>
                  {value?.starts_at}
                </Typography>
                ~
                <Typography variant="body1" component={'span'}>
                  {value?.ends_at}
                </Typography>
              </Stack>
            }
          >
            <Typography variant="body1" component={'span'}>
              {value?.period}{' '}
            </Typography>
          </Tooltip>
        </TableCell>
      );
    } else if (value?.reel) {
      return (
        <TableCell>
          <Tooltip title={<Typography>Guide: {value?.guide}</Typography>}>
            <Typography>{value?.reel}</Typography>
            <Chip
              variant="outlined"
              color={value?.color == 'green' ? 'success' : value?.color == 'red' ? 'error' : 'warning'}
              label={`${value?.ecart ? value?.ecart : '--'}`}
              size="small"
              sx={{
                fontSize: 12,
                '& span': {
                  padding: 0.5
                }
              }}
            />
          </Tooltip>
        </TableCell>
      );
    } else if (value?.nbr) {
      return (
        <TableCell>
          <Typography>{value?.nbr}</Typography>
          <Chip
            label={`${value?.percenatage}%`}
            size="small"
            sx={{
              fontSize: 12,
              '& span': {
                padding: 0.5
              }
            }}
          />
        </TableCell>
      );
    } else if (value?.ponte_nbr) {
      return (
        <TableCell>
          <Typography>{value?.ponte_nbr}</Typography>
          <Chip
            variant="contained"
            color={value?.ponte_var?.color === 'green' ? 'success' : value?.color == 'red' ? 'error' : 'warning'}
            label={`${value?.ponte_var?.reel}`}
            size="small"
            sx={{
              fontSize: 12,
              '& span': {
                padding: 0.5
              }
            }}
          />
        </TableCell>
      );
    } else {
      return value?.min ? (
        <TableCell>
          <Stack flexDirection={'row'}>
            <Typography color={theme.palette.info.main}>{value?.min}°</Typography>/<Typography color={'error'}>{value?.max}°</Typography>
          </Stack>
        </TableCell>
      ) : (
        <TableCell>--</TableCell>
      );
    }
  } else if (typeof value === 'string') {
    return <TableCell>{value ? value?.replaceAll('|', ';') : '--'}</TableCell>;
  } else {
    return <TableCell>{value ? value : '--'}</TableCell>;
  }
};

export default TableCol;
