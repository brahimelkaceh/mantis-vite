import { Divider, TableCell, TableHead, TableRow, useTheme } from '@mui/material';
import { yellow } from '@mui/material/colors';
import { head } from 'lodash';
import React from 'react';

const TableHeader = ({ tableHeaders, visibleChildren }) => {
  const theme = useTheme();

  return (
    <TableHead
      className="sticky-header"
      sx={{
        zIndex: 1000,
        '& th': {
          borderTop: `1px solid ${theme.palette.divider}`,
          borderBottom: `2px solid ${theme.palette.divider} !important`,
          borderLeft: `1px solid ${theme.palette.grey[400]} !important`,
          padding: 0.5,
          textAlign: 'center'
        }
      }}
    >
      <TableRow
        sx={{
          '& .MuiTableCell-root': {
            whiteSpace: 'nowrap'
          }
        }}
      >
        {tableHeaders?.map(
          (header, index) =>
            visibleChildren[header.parent].some((child) => header.children.map((c) => c.key).includes(child)) && (
              <TableCell key={index} colSpan={visibleChildren[header.parent].length} className={header.class}>
                <span>{header.parent}</span>
              </TableCell>
            )
        )}
      </TableRow>
      <TableRow
        sx={{
          // background: '#333',
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
        {tableHeaders?.map((header) =>
          header.children.map(
            (child) =>
              visibleChildren[header.parent].includes(child.key) && (
                <TableCell className={`${header.class}-child`} key={child.key}>
                  {child.title}
                </TableCell>
              )
          )
        )}
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
