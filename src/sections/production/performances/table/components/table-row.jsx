import React, { Fragment, useState } from 'react';
// import TableCell from './TableCell';
import { IconButton, Stack, TableCell, TableRow, useTheme } from '@mui/material';
import TableCol from './table-col';
import { Delete, Download, Edit, KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import EditModal from './edit-modal';
import LoadingButton from 'components/@extended/LoadingButton';
import DeleteModal from './delete-modal';
import { ThemeMode } from 'config';
import DetailsModal from './details-modal';
import api from 'api/pdf';
import { openSnackbar } from 'api/snackbar';
// import EditModal from '../modals/EditModal';
// import DeleteModal from '../modals/DeleteModal';

const RowTable = ({ row, tableHeaders, visibleChildren, fetchPerformanceTable }) => {
  const theme = useTheme();
  const [selectedRow, setSelectedRow] = useState(null);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [pdfLoading, setPdfLoading] = useState(false);

  const showDetails = (rowId) => {
    setSelectedRow(selectedRow === rowId ? null : rowId);
  };
  const handleWeekPdfClick = async (id, age) => {
    try {
      setPdfLoading(true);
      await api.productionWeekPdf(id, age);
      openSnackbar({
        open: true,
        message: 'PDF téléchargé avec succès !',
        variant: 'alert',
        alert: {
          color: 'success'
        }
      });
    } catch (error) {
      console.error('Error:', error);
      openSnackbar({
        open: true,
        message: 'Échec du téléchargement du PDF. Veuillez réessayer plus tard.',
        variant: 'alert',
        alert: {
          color: 'error'
        }
      });
    } finally {
      setPdfLoading(false); // Set loading to false when the fetch is complete
    }
  };
  return (
    <Fragment>
      {/* {selectedId && <EditModal setOpen={setOpen} open={open} id={selectedId} />} */}
      {selectedRow === row.id &&
        row.data.map((dayRow, i) => (
          <TableRow
            key={i}
            sx={{
              '& .MuiTableCell-root': {
                whiteSpace: 'nowrap',
                backgroundColor: theme.palette.mode === ThemeMode.DARK ? '#75680a78' : '#fef39fbd'
              },
              '& td': {
                py: 0.5,
                px: 1,
                borderTop: `1px solid ${theme.palette.divider}`,
                borderLeft: `1px solid ${theme.palette.grey[300]} !important`,
                borderBottom: `2px solid ${theme.palette.grey[400]} !important`,
                fontSize: 14,
                textAlign: 'center'
              }
            }}
          >
            {tableHeaders.map((header) => {
              return header.children.map((child, childIndex) => {
                if (visibleChildren[header.parent].includes(child.key)) {
                  const cent_mort_sem = 'cent_mort_sem';
                  dayRow[cent_mort_sem] = dayRow['nbr_mort_jour'];
                  const cent_mort_cuml = 'cent_mort_cuml';
                  dayRow[cent_mort_cuml] = dayRow['nbr_mort_sem'];
                  const noppp_cuml_sem = 'noppp_cuml_sem';
                  dayRow[noppp_cuml_sem] = dayRow['noppp_cuml_jr'];
                  const noppd_cuml_sem = 'noppd_cuml_sem';
                  dayRow[noppd_cuml_sem] = dayRow['noppd_cuml_jr'];
                  const ic_cuml = 'ic_cuml';
                  dayRow[ic_cuml] = dayRow['ic'];
                  const alt_oeuf = 'alt_oeuf';
                  dayRow[alt_oeuf] = dayRow['alt_oeuf_jr'];
                  const alt_oeuf_cuml = 'alt_oeuf_cuml';
                  dayRow[alt_oeuf_cuml] = dayRow['alt_oeuf_jr_cuml'];
                  const value = dayRow[child.key];

                  // console.log(visibleChildren);
                  if (child.key === 'isWeek') {
                    return (
                      <TableCell key={childIndex}>
                        <Stack flexDirection={'row'} gap={1} justifyContent={'end'}>
                          {dayRow?.deletable && (
                            <DeleteModal id={dayRow.id} lotId={row.lot_id} fetchPerformanceTable={fetchPerformanceTable} />
                          )}

                          {dayRow.id && <EditModal id={dayRow.id} />}
                        </Stack>
                      </TableCell>
                    );
                  } else {
                    return <TableCol value={value} key={childIndex} dayRow={dayRow} />;
                  }
                } else {
                  return null;
                }
              });
            })}
          </TableRow>
        ))}
      <TableRow
        sx={{
          '& .MuiTableCell-root': {
            whiteSpace: 'nowrap',
            backgroundColor: selectedRow === row.id ? (theme.palette.mode === ThemeMode.DARK ? '#e7c26459' : '#ffc941') : ''
          },
          '& td': {
            py: 0.5,
            px: 1,
            borderTop: `1px solid ${theme.palette.divider}`,
            borderLeft: `1px solid ${theme.palette.grey[200]} !important`,
            borderBottom: `2px solid ${theme.palette.grey[300]} !important`,
            fontSize: 14,
            textAlign: 'center'
          }
        }}
      >
        <TableCell>
          <LoadingButton
            size="small"
            color="success"
            variant="text"
            shape="square"
            loading={pdfLoading}
            onClick={() => {
              handleWeekPdfClick(row.lot_id, row?.calendrier?.age);
            }}
          >
            <Download />
          </LoadingButton>
          <DetailsModal id={row?.lot_id} age={row?.calendrier?.age} />

          <IconButton color="primary" size="small" onClick={() => showDetails(row.id)}>
            {selectedRow === row.id ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>
        {tableHeaders.slice(1).map((header) => {
          return header.children.map((child, childIndex) => {
            if (visibleChildren[header.parent].includes(child.key)) {
              const value = row[child.key];
              return <TableCol value={value} key={childIndex} />;
            }
            return null;
          });
        })}
      </TableRow>
    </Fragment>
  );
};

export default RowTable;
