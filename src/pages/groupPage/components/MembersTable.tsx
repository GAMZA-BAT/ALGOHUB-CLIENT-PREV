import { css } from '@emotion/react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from '@material-ui/core';

import * as React from 'react';
import { forwardRef } from 'react';

import { Theme } from '@/styles/theme';

interface Data {
  ID: string;
  JOIN: string;
  ACHIVEMENT: number;
  ROLE: 'Owner' | 'Participant';
  DELETE: number;
}

interface Column {
  id: 'ID' | 'JOIN' | 'ACHIVEMENT' | 'ROLE' | 'DELETE';
  label: string;
}

const MembersTable = forwardRef((_props, _ref) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const columns: readonly Column[] = [
    { id: 'ID', label: 'ID' },
    { id: 'JOIN', label: 'JOIN' },
    {
      id: 'ACHIVEMENT',
      label: 'ACHIVEMENT',
    },
    {
      id: 'ROLE',
      label: 'ROLE',
    },
  ];

  const DELETE = '삭제버튼';
  const rows = [
    { ID: 'India', JOIN: 'IN', ACHIVEMENT: 1324171354, ROLE: 'Owner', DELETE },
    { ID: 'China', JOIN: 'CN', ACHIVEMENT: 1403500365, ROLE: 'Participant', DELETE },
    { ID: 'Italy', JOIN: 'IT', ACHIVEMENT: 60483973, ROLE: 'Participant', DELETE },
    { ID: 'United States', JOIN: 'US', ACHIVEMENT: 327167434, ROLE: 'Participant', DELETE },
    { ID: 'Canada', JOIN: 'CA', ACHIVEMENT: 37602103, ROLE: 'Participant', DELETE },
    { ID: 'Australia', JOIN: 'AU', ACHIVEMENT: 25475400, ROLE: 'Participant', DELETE },
    { ID: 'Germany', JOIN: 'DE', ACHIVEMENT: 83019200, ROLE: 'Participant', DELETE },
    { ID: 'Ireland', JOIN: 'IE', ACHIVEMENT: 4857000, ROLE: 'Participant', DELETE },
    { ID: 'Mexico', JOIN: 'MX', ACHIVEMENT: 126577691, ROLE: 'Participant', DELETE },
    { ID: 'Japan', JOIN: 'JP', ACHIVEMENT: 126317000, ROLE: 'Participant', DELETE },
    { ID: 'France', JOIN: 'FR', ACHIVEMENT: 67022000, ROLE: 'Participant', DELETE },
    { ID: 'United Kingdom', JOIN: 'GB', ACHIVEMENT: 67545757, ROLE: 'Participant', DELETE },
    { ID: 'Russia', JOIN: 'RU', ACHIVEMENT: 146793744, ROLE: 'Participant', DELETE },
    { ID: 'Nigeria', JOIN: 'NG', ACHIVEMENT: 200962417, ROLE: 'Participant', DELETE },
    { ID: 'Brazil', JOIN: 'BR', ACHIVEMENT: 210147125, ROLE: 'Participant', DELETE },
  ];

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper style={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer style={{ maxHeight: '100%', minHeight: '100%' }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns?.map((column) => (
                <TableCell
                  style={{ backgroundColor: Theme.color.mediumGray, color: 'white' }}
                  key={column.id}
                  align={'center'}
                >
                  {column.label}
                </TableCell>
              ))}
              <TableCell
                style={{ backgroundColor: Theme.color.mediumGray, color: 'white' }}
                key={'DELETE'}
                align={'center'}
              >
                DELETE
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.ID}>
                  {columns?.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id + value} align={'center'}>
                        {value ? value : ''}
                      </TableCell>
                    );
                  })}
                  <TableCell key={row + 'delete'} align={'center'}>
                    <button css={DeleteBtnStyle}>멤버 삭제</button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
});

export default MembersTable;

const DeleteBtnStyle = css`
  padding: 5px 10px;
  border: 1px solid ${Theme.color.mainBlue};
  border-radius: 5px;
  background-color: white;
  color: ${Theme.color.mainBlue};
`;
