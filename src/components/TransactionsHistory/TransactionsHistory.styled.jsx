import styled from '@emotion/styled';

export const TransactHistory = styled.table`
  max-width: 600px;
  width: 90%;
  margin: 0 auto 10% auto;
  border-collapse: collapse;
  text-align: center;
`;

export const TableHeadRow = styled.tr`
  background-color: rgb(30, 191, 191);
  height: 50px;
  font-size: 20px;
  color: white;
`;

export const TableRow = styled.tr`
  height: 30px;
  font-size: 16px;
  background-color: ${props => (props.index % 2 === 0) ? 'rgb(232, 223, 224)' : 'rgb(167, 166, 166)'};
`;

export const TableTd = styled.td`
  max-width: 150px;
  padding: 10px;
  border: 1px solid #2a2a2a;
`;
