import styled from '@emotion/styled';

export const TransactHistory = styled.table`
  max-width: 600px;
  width: 90%;
  margin: 0 auto 10% auto;
  border-collapse: collapse;
  text-align: center;
`;

export const TableHeadRow = styled.tr`
  background-color: ${({theme}) => theme.colors.tableHead};
  height: 50px;
  font-size: 20px;
  color: white;
`;

export const TableRow = styled.tr`
  height: 30px;
  font-size: 16px;
  background-color: ${({ index, theme }) => {
    return !(index % 2) ? theme.colors.TableRow1 : theme.colors.TableRow2;
  }
  };
`;

export const TableTd = styled.td`
  max-width: 150px;
  padding: 10px;
  border: 1px solid #2a2a2a;
`;
