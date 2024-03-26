import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import {
  Avatar,
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
import AlertLotDelete from './delete';
import LotModal from './modal';

const LotTable = ({ data, fetchProdLot, siteId, sites }) => {
  const [open, setOpen] = useState(false);
  const [lotDeleteId, setLotDeleteId] = useState(null);
  const [lotModal, setLotModal] = useState(false);
  const [selectedLot, setSelectedLot] = useState(null);

  const handleClose = () => {
    setOpen(false);
  };

  if (data?.length < 1) {
    return (
      <Typography color={'error'} textAlign={'center'}>
        Aucune donnée à afficher.{' '}
      </Typography>
    );
  }

  return (
    <TableContainer sx={{ maxHeight: 300 }}>
      <Table>
        <TableHead className="sticky-header">
          <TableRow>
            <TableCell align="left">Bâtiment</TableCell>
            <TableCell align="center">Code</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data &&
            data?.map((lot) => {
              return (
                <TableRow hover>
                  <TableCell align="center">
                    <Avatar
                      variant="rounded"
                      color="primary"
                      sx={{
                        backgroundColor: '#2196f3',
                        color: '#fff'
                      }}
                    >
                      {lot.batiment}
                    </Avatar>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="subtitle1">{lot.code ?? '--'}</Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Stack flexDirection={'row'} alignItems={'center'} justifyContent={'end'}>
                      <Tooltip title="Supprimer">
                        <IconButton
                          color="error"
                          variant="contained"
                          disabled={!lot.deletable}
                          onClick={(e) => {
                            e.stopPropagation();
                            setOpen(true);
                            setLotDeleteId(lot.id);
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
                            setLotModal(true);
                            setSelectedLot(lot);
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
      <AlertLotDelete fetchProdLot={fetchProdLot} id={lotDeleteId} open={open} handleClose={handleClose} siteId={siteId} />
      <LotModal open={lotModal} modalToggler={setLotModal} lot={selectedLot} fetchProdLot={fetchProdLot} sites={sites} />
    </TableContainer>
  );
};

export default LotTable;
