import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
// import dayjs from 'dayjs';

const Cell = ({ data, t }) => (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h3><a href={data.link}>{t(data.title)}</a></h3>
        <p className="published">{t(data.subtitle)}</p>
      </header>
      <a href={data.link} className="image">
        <img src={`${process.env.PUBLIC_URL}${data.image}`} alt={t(data.title)} />
      </a>
      <div className="description">
        <p>{t(data.desc)}</p>
      </div>
    </article>
  </div>
);

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    link: PropTypes.string,
    image: PropTypes.string.isRequired,
    // date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
  t: PropTypes.func.isRequired,
};

export default withTranslation('projects')(Cell);
