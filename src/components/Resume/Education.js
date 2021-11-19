import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

import Degree from './Education/Degree';

const Education = ({ data, t }) => (
  <div className="education">
    <div className="link-to" id="education" />
    <div className="title">
      <h3>{t('Education')}</h3>
    </div>
    {data.map((degree) => (
      <Degree
        data={degree}
        key={degree.school}
      />
    ))}
  </div>
);

Education.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    school: PropTypes.string,
    degree: PropTypes.string,
    link: PropTypes.string,
    year: PropTypes.number,
  })),
  t: PropTypes.func.isRequired,
};

Education.defaultProps = {
  data: [],
};

export default withTranslation('resume')(Education);
