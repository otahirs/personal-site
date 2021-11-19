import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

import Job from './Experience/Job';

const Experience = ({ data, t }) => (
  <div className="experience">
    <div className="link-to" id="experience" />
    <div className="title">
      <h3>{t('Experience')}</h3>
    </div>
    {data.map((job) => (
      <Job
        data={job}
        key={job.company}
      />
    ))}
  </div>
);

Experience.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    company: PropTypes.string,
    position: PropTypes.string,
    link: PropTypes.string,
    daterange: PropTypes.string,
    points: PropTypes.arrayOf(PropTypes.string),
  })),
  t: PropTypes.func.isRequired,
};

Experience.defaultProps = {
  data: [],
};

export default withTranslation('resume')(Experience);
