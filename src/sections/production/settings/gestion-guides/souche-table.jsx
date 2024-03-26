import { LinearProgress, Table, TableCell, TableContainer, TableHead, TableRow, useTheme } from '@mui/material';
import MainCard from 'components/MainCard';
import { ThemeMode } from 'config';
import React from 'react';

const SoucheTable = ({ data, loading }) => {
  const theme = useTheme();
  return (
    <MainCard content={false}>
      {loading && <LinearProgress />}
      <TableContainer sx={{ maxHeight: 345 }}>
        <Table>
          <TableHead
            className="sticky-header"
            sx={{
              padding: 0,
              '& .MuiTableCell-root': {
                padding: 0,
                px: 1,
                fontSize: 11,
                fontWeight: 'normal',
                whiteSpace: 'nowrap',
                borderLeft: `1px solid ${theme.palette.grey[200]} !important`
              }
            }}
          >
            <TableRow>
              <TableCell>Souche</TableCell>
              <TableCell>Nom</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>mort/Sem</TableCell>
              <TableCell>∑ mort/PD</TableCell>
              <TableCell>Ponte</TableCell>
              <TableCell>NopppSem</TableCell>
              <TableCell>Noppp ∑</TableCell>
              <TableCell>NoppdSem</TableCell>
              <TableCell>Noppd ∑</TableCell>
              <TableCell>Poid vif</TableCell>
              <TableCell>Homog</TableCell>
              <TableCell>PMO</TableCell>
              <TableCell>APS</TableCell>
              <TableCell>Alt ∑ /Sem PP</TableCell>
              <TableCell>Alt ∑ PD</TableCell>
              <TableCell>Alt ∑ / OeufPD</TableCell>
              <TableCell>Mass Oe / Sem PP</TableCell>
              <TableCell>Mass Oe ∑ PP</TableCell>
              <TableCell>Mass Oe / Sem PD</TableCell>
              <TableCell>Mass Oe ∑ PD</TableCell>
              <TableCell>Ic / Sem</TableCell>
              <TableCell>Ic ∑</TableCell>
            </TableRow>
          </TableHead>
          <tbody>
            {data?.map((souche, i) => (
              <TableRow
                key={i}
                sx={{
                  '& .MuiTableCell-root': {
                    whiteSpace: 'nowrap'
                  },
                  '& td': {
                    py: 0.5,
                    px: 1,
                    border: `1px solid ${theme.palette.divider}`,
                    // borderLeft: `1px solid ${theme.palette.grey[200]} !important`,
                    // borderBottom: `1px solid ${theme.palette.grey[300]} !important`,
                    fontSize: 14,
                    textAlign: 'center'
                  }
                }}
              >
                <TableCell>{souche.souche}</TableCell>
                <TableCell>{souche.name}</TableCell>
                <TableCell>{souche.guideType}</TableCell>
                <TableCell>{souche.G_age}</TableCell>
                <TableCell>{souche.G_mortSem}</TableCell>
                <TableCell>{souche.G_mortCumlPD}</TableCell>
                <TableCell>{souche.G_ponte}</TableCell>
                <TableCell>{souche.G_nopppSem}</TableCell>
                <TableCell>{souche.G_nopppCuml}</TableCell>
                <TableCell>{souche.G_noppdSem}</TableCell>
                <TableCell>{souche.G_noppdCuml}</TableCell>
                <TableCell>{souche.G_poidVif}</TableCell>
                <TableCell>{souche.G_homog}</TableCell>
                <TableCell>{souche.G_pmo}</TableCell>
                <TableCell>{souche.G_aps}</TableCell>
                <TableCell>{souche.G_altCumlSemPP}</TableCell>
                <TableCell>{souche.G_altCumlPD}</TableCell>
                <TableCell>{souche.G_altCumlParOeufPD}</TableCell>
                <TableCell>{souche.G_massOeParSemPP}</TableCell>
                <TableCell>{souche.G_massOeCumlPP}</TableCell>
                <TableCell>{souche.G_massOeParSemPD}</TableCell>
                <TableCell>{souche.G_massOeCumlPPD}</TableCell>
                <TableCell>{souche.G_icSem}</TableCell>
                <TableCell>{souche.G_icCuml}</TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </TableContainer>
    </MainCard>
  );
};

export default SoucheTable;
