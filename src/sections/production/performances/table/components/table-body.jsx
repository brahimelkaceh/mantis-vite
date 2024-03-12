import { DownloadOutlined, EditFilled, MenuOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { Chip, Grid, IconButton, Stack, TableBody, TableCell, TableHead, TableRow, Tooltip, Typography, useTheme } from '@mui/material';
import { blue } from '@mui/material/colors';
import LoadingButton from 'components/@extended/LoadingButton';
import React from 'react';
import EditModal from './edit-modal';
import DetailsModal from './details-modal';
import RowTable from './table-row';

const TableList = ({ tableHeaders, visibleChildren }) => {
  const theme = useTheme();
  return (
    <TableBody>
      <TableRow
        sx={{
          '& .MuiTableCell-root': {
            whiteSpace: 'nowrap'
          },
          '& td': {
            py: 0.5,
            px: 1,
            borderTop: `1px solid ${theme.palette.divider}`,
            borderLeft: `1px solid ${theme.palette.grey[400]} !important`,
            borderBottom: `2px solid ${theme.palette.grey[500]} !important`,
            fontSize: 12,
            textAlign: 'center'
          }
        }}
      >
        <TableCell>
          <Stack flexDirection={'row'} alignItems={'end'} gap={1}>
            <LoadingButton size="small" color="success" variant="outlined" shape="square">
              <DownloadOutlined />
            </LoadingButton>{' '}
            <DetailsModal />
            <EditModal />
          </Stack>
        </TableCell>
        <TableCell>05/2023</TableCell>
        <TableCell>03/02</TableCell>
        <TableCell>18</TableCell>
        <TableCell>
          <Tooltip
            title={
              <Stack flexDirection={'row'}>
                <Typography variant="body1" component={'span'}>
                  14:00
                </Typography>
                ~
                <Typography variant="body1" component={'span'}>
                  20:30
                </Typography>
              </Stack>
            }
          >
            <Typography variant="body1" component={'span'}>
              14
            </Typography>
            <Typography color={'textSecondary'} variant="caption">
              h
            </Typography>{' '}
            <Typography variant="body1" component={'span'}>
              30
            </Typography>
            <Typography color={'textSecondary'} variant="caption">
              m
            </Typography>
          </Tooltip>
        </TableCell>
        <TableCell>
          <Tooltip
            title={
              <Stack flexDirection={'row'}>
                <Typography variant="body1" component={'span'}>
                  14:00
                </Typography>
                ~
                <Typography variant="body1" component={'span'}>
                  20:30
                </Typography>
              </Stack>
            }
          >
            <Typography variant="body1" component={'span'}>
              14
            </Typography>
            <Typography color={'textSecondary'} variant="caption">
              h
            </Typography>{' '}
            <Typography variant="body1" component={'span'}>
              30
            </Typography>
            <Typography color={'textSecondary'} variant="caption">
              m
            </Typography>
          </Tooltip>
        </TableCell>
        <TableCell>80%</TableCell>
        <TableCell>
          <Stack flexDirection={'row'}>
            <Typography color={theme.palette.info.main}>19.3°</Typography>/<Typography color={'error'}>20.3°</Typography>
          </Stack>
        </TableCell>
        <TableCell>
          <Typography fontWeight={'bold'} fontSize={14}>
            100 000
          </Typography>
        </TableCell>
        <TableCell>
          <Tooltip title={<Typography>Guide: 80%</Typography>}>
            <Typography>80%</Typography>
            <Chip variant="outlined" color={'success'} label={`${82}%`} size="small" />
          </Tooltip>
        </TableCell>
        <TableCell>
          <Tooltip title={<Typography>Guide: 1914</Typography>}>
            <Typography>1922</Typography>
            <Chip variant="outlined" color={'success'} label={`+${50}`} size="small" />
          </Tooltip>
        </TableCell>
        <TableCell>74.2%</TableCell>
        <TableCell>
          <Tooltip title={<Typography>Guide: 0.1%</Typography>}>
            <Typography>0.14</Typography>
            <Chip variant="outlined" color={'error'} label={`+${0.02}`} size="small" />
          </Tooltip>
        </TableCell>
        <TableCell>
          <Tooltip title={<Typography>Guide: 4.1%</Typography>}>
            <Typography>5.02</Typography>
            <Chip variant="outlined" color={'warning'} label={`${2.58}`} size="small" />
          </Tooltip>
        </TableCell>
        <TableCell>168.2</TableCell>
        <TableCell>93.4</TableCell>
        <TableCell>122.9</TableCell>
        <TableCell>
          <Tooltip title={<Typography>Guide: 110</Typography>}>
            <Typography>102</Typography>
            <Chip variant="outlined" color={'success'} label={`-${8}`} size="small" />
          </Tooltip>
        </TableCell>
        <TableCell>
          <Tooltip title={<Typography>Guide: 29.5</Typography>}>
            <Typography>30</Typography>
            <Chip variant="outlined" color={'error'} label={`+${0.5}`} size="small" />
          </Tooltip>
        </TableCell>
        <TableCell>
          <Tooltip title={<Typography>Guide: --</Typography>}>
            <Typography>1.2</Typography>
            <Chip variant="outlined" color={'info'} label={`--`} size="small" />
          </Tooltip>
        </TableCell>
        <TableCell>PDP</TableCell>
        <TableCell>
          <Typography>125 000</Typography>
          <Chip variant="filled" color={'success'} label={`168 000`} size="small" />
        </TableCell>{' '}
        <TableCell>
          <Tooltip title={<Typography>Guide: 8.9%</Typography>}>
            <Typography>7.42%</Typography>
            <Chip variant="outlined" color={'error'} label={`-${2.58}`} size="small" />
          </Tooltip>
        </TableCell>
        <TableCell>
          <Tooltip title={<Typography>Guide: 8.9%</Typography>}>
            <Typography>7.42%</Typography>
            <Chip variant="outlined" color={'error'} label={`-${2.58}`} size="small" />
          </Tooltip>
        </TableCell>
        <TableCell>
          <Tooltip title={<Typography>Guide: 8.9%</Typography>}>
            <Typography>7.42%</Typography>
            <Chip variant="outlined" color={'error'} label={`-${2.58}`} size="small" />
          </Tooltip>
        </TableCell>
        <TableCell>
          <Tooltip title={<Typography>Guide: 8.9%</Typography>}>
            <Typography>7.42%</Typography>
            <Chip variant="outlined" color={'error'} label={`-${2.58}`} size="small" />
          </Tooltip>
        </TableCell>
        <TableCell>
          <Tooltip title={<Typography>Guide: 8.9%</Typography>}>
            <Typography>7.42%</Typography>
            <Chip variant="outlined" color={'error'} label={`-${2.58}`} size="small" />
          </Tooltip>
        </TableCell>
        <TableCell>
          <Tooltip title={<Typography>Guide: 8.9%</Typography>}>
            <Typography>7.42%</Typography>
            <Chip variant="outlined" color={'error'} label={`-${2.58}`} size="small" />
          </Tooltip>
        </TableCell>
        <TableCell>
          <Typography>7.42</Typography>
          <Chip label={`-${2.58}%`} size="small" />
        </TableCell>
        <TableCell>
          <Tooltip title={<Typography>Guide: 8.9%</Typography>}>
            <Typography>7.42%</Typography>
            <Chip variant="outlined" color={'error'} label={`-${2.58}`} size="small" />
          </Tooltip>
        </TableCell>
        <TableCell>
          <Tooltip title={<Typography>Guide: 8.9%</Typography>}>
            <Typography>7.42%</Typography>
            <Chip variant="outlined" color={'error'} label={`-${2.58}`} size="small" />
          </Tooltip>
        </TableCell>
        <TableCell>
          <Tooltip title={<Typography>Guide: 8.9%</Typography>}>
            <Typography>7.42%</Typography>
            <Chip variant="outlined" color={'error'} label={`-${2.58}`} size="small" />
          </Tooltip>
        </TableCell>
        <TableCell>
          <Tooltip title={<Typography>Guide: 8.9%</Typography>}>
            <Typography>7.42%</Typography>
            <Chip variant="outlined" color={'error'} label={`-${2.58}`} size="small" />
          </Tooltip>
        </TableCell>
        <TableCell>
          <Tooltip title={<Typography>Guide: 8.9%</Typography>}>
            <Typography>7.42%</Typography>
            <Chip variant="outlined" color={'error'} label={`-${2.58}`} size="small" />
          </Tooltip>
        </TableCell>
        <TableCell>
          <Tooltip title={<Typography>Guide: 8.9%</Typography>}>
            <Typography>7.42%</Typography>
            <Chip variant="outlined" color={'error'} label={`-${2.58}`} size="small" />
          </Tooltip>
        </TableCell>
        <TableCell>
          <Tooltip title={<Typography>Guide: 8.9%</Typography>}>
            <Typography>7.42%</Typography>
            <Chip variant="outlined" color={'error'} label={`-${2.58}`} size="small" />
          </Tooltip>
        </TableCell>
      </TableRow>
      <RowTable tableHeaders={tableHeaders} visibleChildren={visibleChildren} />
    </TableBody>
  );
};

export default TableList;
