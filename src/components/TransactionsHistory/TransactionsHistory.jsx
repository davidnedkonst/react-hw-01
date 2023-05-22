import PropTypes from 'prop-types';
import {
  TransactHistory,
  TableHeadRow,
  TableRow,
  TableTd,
} from './TransactionsHistory.styled';

export default function TransactionsHistory({ items }) {
  return (
    <TransactHistory>
      <thead>
        <TableHeadRow>
          <TableTd>Type</TableTd>
          <TableTd>Amount</TableTd>
          <TableTd>Currency</TableTd>
        </TableHeadRow>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }, index) => {
          return (
            <TableRow key={id} index={index}>
              <TableTd>{type}</TableTd>
              <TableTd>{amount}</TableTd>
              <TableTd>{currency}</TableTd>
            </TableRow>
          );
        })}
      </tbody>
    </TransactHistory>
  );
}

TransactionsHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
