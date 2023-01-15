import PropTypes from 'prop-types';
import css from './Statistic.module.css';
import { getRandomHexColor } from '../../utils/index';

export default function PaintingStatistics(props) {
  const { title, stats } = props;
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title}</h2>

      <ul className={css.statList}>
        {stats.map(paintings => {
          return (
            <li
              className={css.item}
              key={paintings.id}
              style={{ backgroundColor: getRandomHexColor() }}
            >
              <span className={css.label}>{paintings.label}</span>
              <span className={css.percentage}>{paintings.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

PaintingStatistics.propTypes = {
  title: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
