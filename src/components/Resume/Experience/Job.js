import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

const Job = ({ data, t }) => (
  <article className="jobs-container">
    <header>
      <h4><a href={data.link}>{data.company}</a> - {t(data.position)}</h4>
      <p className="daterange"> {t(data.daterange)}</p>
    </header>
    <ul className="points">
      {data.points.map((point) => (
        <li key={point}>{t(point)}</li>
      ))}
    </ul>
  </article>
);

Job.propTypes = {
  data: PropTypes.shape({
    link: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    daterange: PropTypes.string.isRequired,
    points: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  t: PropTypes.func.isRequired,
};

export default withTranslation('resume')(Job);
