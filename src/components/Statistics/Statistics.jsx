import PropTypes from 'prop-types';
import {
  Statistic,
  Title,
  StatList,
  Item,
  Label,
  Percentage,
} from './Statistics.styled';

export default function Statistics({ title, stats }) {
  return (
    <Statistic>
      {title && <Title>{title}</Title>}
      <StatList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <Item key={id}>
              <Label>{label}</Label>
              <Percentage>{percentage}%</Percentage>
            </Item>
          );
        })}
      </StatList>
    </Statistic>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
