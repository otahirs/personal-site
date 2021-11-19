import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

const Course = ({ data, last, t }) => (
  <li className="course-container">
    <a href={data.link}>
      <h4 className="course-number">{data.number}:</h4>
      <p className="course-name">{t(data.title)}</p>
    </a>
    {!last && <div className="course-dot"><p className="course-name"> &#8226;</p></div>}
  </li>
);

Course.propTypes = {
  data: PropTypes.shape({
    link: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  last: PropTypes.bool,
  t: PropTypes.func.isRequired,
};

Course.defaultProps = {
  last: false,
};

export default withTranslation('resume')(Course);
