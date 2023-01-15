import PropTypes from 'prop-types';
import css from './Transactions.module.css';

export default function Transactions({ transactions }) {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(painting => {
          return (
            <tr key={painting.id}>
              <td>{painting.type}</td>
              <td>{painting.amount}</td>
              <td>{painting.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

Transactions.propTypes = {
  transaction: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.number,
      currency: PropTypes.string,
    })
  ),
};
