import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

const Degree = ({ data, t }) => (
  <article className="degree-container">
    <header>
      <h4 className="degree">{t(data.degree)}</h4>
      <p className="school"><a href={data.link}>{t(data.school)}</a>, {data.year} - {t('now')}</p>
    </header>
  </article>
);

Degree.propTypes = {
  data: PropTypes.shape({
    degree: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    school: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }).isRequired,
  t: PropTypes.func.isRequired,
};

export default withTranslation('resume')(Degree);
