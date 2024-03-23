import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import {
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
import AlertCustomerDelete from 'sections/apps/customer/AlertCustomerDelete';
import AlertSiteDelete from './delete';
import { Edit } from '@mui/icons-material';
import SiteModal from './modal';

const LotTable = ({ data, fetchProdSite }) => {
  const [open, setOpen] = useState(false);
  const [siteDeleteId, setSiteDeleteId] = useState(null);
  const [siteModal, setSiteModal] = useState(false);
  const [selectedSite, setSelectedSite] = useState(null);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <TableContainer sx={{ maxHeight: 300 }}>
      <Table>
        <TableHead className="sticky-header">
          <TableRow>
            <TableCell align="center">Site</TableCell>
            <TableCell align="center"> Phone</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data &&
            data?.map((site) => {
              return (
                <TableRow hover>
                  <TableCell align="center">
                    <Typography variant="subtitle1">{site.name}</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="subtitle1">{site.phone ?? '--'}</Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Stack flexDirection={'row'} alignItems={'center'} justifyContent={'end'}>
                      {/* // <EditLot lot={lot} setRefetchData={setRefetchData} site={siteId} /> */}
                      {/* // <DeleteLot id={lot.id} setRefetchData={setRefetchData} deletable={lot.deletable} /> */}
                      <Tooltip title="Supprimer">
                        <IconButton
                          color="error"
                          variant="contained"
                          disabled={!site.deletable}
                          onClick={(e) => {
                            e.stopPropagation();
                            setOpen(true);
                            setSiteDeleteId(site.id);
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
                            setSiteModal(true);
                            setSelectedSite(site);
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
      <AlertSiteDelete fetchProdSite={fetchProdSite} id={siteDeleteId} open={open} handleClose={handleClose} />
      <SiteModal open={siteModal} modalToggler={setSiteModal} site={selectedSite} fetchProdSite={fetchProdSite} />
    </TableContainer>
  );
};

export default LotTable;
