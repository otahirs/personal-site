import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';

import Main from '../layouts/Main';

const Index = () => {
  const { t } = useTranslation();
  return (
    <Main
      description={t('Otakar Hirš\'s personal website. IT student, orienteer, shower philosopher.')}
    >
      <article className="post" id="index">
        <header>
          <div className="title">
            <h2 data-testid="heading"><Link to="/">{t('Hello there!')}</Link></h2>
            <p>
              <Trans i18nKey="SUBTITLE" t={t}>
                After wandering through the internet you ended up here. <br />
                Coincidence? Yeah, most likely..
              </Trans>
            </p>
          </div>
        </header>
        <p>
          <Trans i18nKey="WELCOME" t={t}>
            Welcome to my website, where I will brag about my achievements
            and force you my world views.
          </Trans>
        </p>
        <p>
          <Trans i18nKey="BRAG" t={t}>
            Please feel free to read more <Link to="/about">about me</Link>,
            go through my {' '}
            <Link to="/orienteering">orienteering</Link> {' '}
            career or gaze at my {' '}
            <Link to="/diary">diary of thoughts</Link> {' '}
            .
            <br />
            You can check out my {' '}
            <Link to="/resume">resume</Link> or take a peak at my {' '}
            <Link to="/projects">projects</Link>.
          </Trans>
        </p>
        <p>
          <Trans i18nKey="WRITEMEPLS" t={t}>
            Don&apos;t feel ashamed to {' '}
            <Link to="/contact">contact</Link> {' '}
            me in any matter. I will be happy to hear from you.
          </Trans>
        </p>
      </article>
    </Main>
  );
};

export default Index;
