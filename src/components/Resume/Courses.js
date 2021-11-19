import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

import Course from './Courses/Course';

const getRows = (courses) => courses.sort((a, b) => {
  let ret = 0;
  if (a.university > b.university) ret = -1;
  else if (a.university < b.university) ret = 1;
  else if (a.number > b.number) ret = 1;
  else if (a.number < b.number) ret = -1;
  return ret;
}).map((course, idx) => (
  <Course
    data={course}
    key={course.title}
    last={idx === courses.length - 1}
  />
));

const Courses = ({ data, t }) => (
  <div className="courses">
    <div className="link-to" id="courses" />
    <div className="title">
      <h3>{t('Selected Courses')}</h3>
    </div>
    <ul className="course-list">
      {getRows(data)}
    </ul>
  </div>
);

Courses.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    number: PropTypes.string,
    link: PropTypes.string,
    university: PropTypes.string,
  })),
  t: PropTypes.func.isRequired,
};

Courses.defaultProps = {
  data: [],
};

export default withTranslation('resume')(Courses);
