import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <p>
        Good:<span className={css['stat-counter']}>{good}</span>
      </p>
      <p>
        Neutral:<span className={css['stat-counter']}>{neutral}</span>
      </p>
      <p>
        Bad:<span className={css['stat-counter']}>{bad}</span>
      </p>
      <p>
        <b>
          Total:<span className={css['stat-counter']}>{total()}</span>
        </b>
      </p>
      <p>
        Positive feedback:
        <span className={css['stat-counter']}>{positivePercentage()}</span>
      </p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};

export default Statistics;
