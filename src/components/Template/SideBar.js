import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';
import LanguageSelect from './LanguageSelect';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => {
  const { t } = useTranslation();
  return (
    <section id="sidebar">
      <section id="intro">
        <Link to="/" className="logo">
          <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
        </Link>
        <header>
          <h2>Otakar Hirš</h2>
          <p><a href="mailto:otakar.hirs@gmail.com">otakar.hirs@gmail.com</a></p>
        </header>
      </section>
      <section className="blurb">
        <h2>{t('About')}</h2>
        <p>
          <Trans i18nKey="SUMMARY" t={t}>
            Hi,
            <br />
            I&apos;m Otakar,
            <a href="https://www.16personalities.com/intp-personality" target="_blank" rel="noreferrer"> INTP-A</a> personality,
            <a href="https://www.youtube.com/watch?v=1rF5SSa29O8" target="_blank" rel="noreferrer"> orienteering</a> enthusiast,
            <a href="https://is.muni.cz/person/485661" target="_blank" rel="noreferrer"> student</a> of Faculty of Informatics.
            <br />
            I see myself as a friendly compasionate guy with an unusual sense of humor, but in
            reality I might come out just as offensive and annoying.
          </Trans>
        </p>
        <ul className="actions">
          <li>
            {<Link to="/about" className="button">{ t('Read more') }</Link>}
            {/* {!window.location.pathname.includes('/resume')
            ? <Link to="/resume" className="button">Learn More</Link>
            : <Link to="/about" className="button">About Me</Link>} */}
          </li>
        </ul>
      </section>
      <section id="footer">

        <ContactIcons />

        <p className="copyright">
          &copy; Otakar Hirš. {t('All Rights Reserved.')} <br />
          {t('Kudos to')} <a href="https://github.com/mldangelo/personal-site" target="_blank" rel="noreferrer">Michael D&apos;Angelo</a>
        </p>

        <LanguageSelect />
      </section>
    </section>
  );
};

export default SideBar;
