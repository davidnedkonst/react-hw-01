import PropTypes from 'prop-types';
import css from './TransactionsHistory.module.css';

export default function TransactionsHistory({ items }) {
    return (
        <table className={css['transactions-history']}>
            <thead>
                <tr className={css.thread}>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {
                    items.map(({ id, type, amount, currency }, index) => {
                        return (
                            <tr key={id} className={index % 2 ? css.tr1 : css.tr2}>
                                <td>{type}</td>
                                <td>{amount}</td>
                                <td>{currency}</td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
    );
}

TransactionsHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
};