import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import {
  Chip,
  IconButton,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography
} from '@mui/material';
import React, { useState } from 'react';
import AlertBatimentDelete from './delete';
import BatimentModal from './modal';

const BatimentTable = ({ data, fetchBatiments }) => {
  const [open, setOpen] = useState(false);
  const [batimentDeletId, setBatimentDeleteId] = useState(null);
  const [batimentModal, setBatimentModal] = useState(false);
  const [selectedBatiment, setSelectedBatiment] = useState(null);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <TableContainer sx={{ maxHeight: 345 }}>
      <Table>
        <TableHead className="sticky-header">
          <TableRow>
            <TableCell align="center">Site</TableCell>
            <TableCell align="center">Bâtiment</TableCell>
            <TableCell align="center">Type</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data &&
            data?.map((batiment) => {
              return (
                <TableRow hover>
                  <TableCell align="center">
                    <Typography variant="subtitle1">{batiment.site_name}</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="subtitle1">{batiment.name ?? '--'}</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="subtitle1">
                      <Chip
                        variant="outlined"
                        label={batiment.type?.charAt(0).toUpperCase() + batiment.type.slice(1)}
                        size="small"
                        color={batiment.type == 'production' ? 'success' : 'warning'}
                      />
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Stack flexDirection={'row'} alignItems={'center'} justifyContent={'end'}>
                      <Tooltip title="Supprimer">
                        <IconButton
                          color="error"
                          variant="contained"
                          disabled={!batiment.deletable}
                          onClick={(e) => {
                            e.stopPropagation();
                            setOpen(true);
                            setBatimentDeleteId(batiment.id);
                          }}
                        >
                          <DeleteOutlined />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Modifier">
                        <IconButton
                          color="warning"
                          variant="contained"
                          onClick={(e) => {
                            e.stopPropagation();
                            setBatimentModal(true);
                            setSelectedBatiment(batiment);
                          }}
                        >
                          <EditOutlined />
                        </IconButton>
                      </Tooltip>
                    </Stack>
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
      <AlertBatimentDelete fetchBatiments={fetchBatiments} id={batimentDeletId} open={open} handleClose={handleClose} />
      <BatimentModal open={batimentModal} modalToggler={setBatimentModal} batiment={selectedBatiment} fetchBatiments={fetchBatiments} />
    </TableContainer>
  );
};

export default BatimentTable;
