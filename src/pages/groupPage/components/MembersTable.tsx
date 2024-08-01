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

import { useGroupMemberList } from '@/hooks/query/useGroupQuery';

import { Theme } from '@/styles/theme';

interface Column {
  id: 'nickname' | 'joinDate' | 'achivement' | 'isOwner';
  label: string;
}

const MembersTable = forwardRef((_props, _ref) => {
  const groupId = +(localStorage.getItem('groupId') || '0');

  const {
    data: memberData,
    error: memberError,
    isLoading: isMemberLoading,
  } = useGroupMemberList(groupId);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const columns: readonly Column[] = [
    { id: 'nickname', label: 'ID' },
    { id: 'joinDate', label: 'JOIN' },
    {
      id: 'achivement',
      label: 'ACHIVEMENT',
    },
    {
      id: 'isOwner',
      label: 'ROLE',
    },
  ];

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  if (isMemberLoading) return <></>;
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
            {memberData?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.memberId}>
                  {columns?.map((column) => {
                    let value = row[column.id];
                    if (column.id === 'isOwner') {
                      value = row[column.id] ? 'Owner' : 'Participant';
                    }

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
        count={memberData?.length || 1}
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
