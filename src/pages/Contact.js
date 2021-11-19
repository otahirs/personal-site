import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';
import Main from '../layouts/Main';
import EmailLink from '../components/Contact/EmailLink';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => {
  const { t } = useTranslation('contact');
  return (
    <Main
      title={t('Contact')}
      description={t('Contact Otakar Hirš via email @ conact@otahirs.cz')}
    >
      <article className="post" id="contact">
        <header>
          <div className="title">
            <h2 data-testid="heading"><Link to="/contact">{t('Contact')}</Link></h2>
            <p>
              <Trans i18nKey="SUBTITLE" t={t}>
                Do you want to say thanks? <br />
                Do I owe you an apology? <br />
                Is there a meaning in life?
              </Trans>
            </p>
          </div>
        </header>
        <div className="email-at">
          <p>
            {t('You can either email me at')}: <br />
          </p>
          <EmailLink />
        </div>
        <div className="email-at">
          <p>{t('or reach me on facebook/instagram')}:</p>
          <ContactIcons />
        </div>
      </article>
    </Main>
  );
};

export default Contact;
