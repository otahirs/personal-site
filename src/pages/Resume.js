import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import Skills from '../components/Resume/Skills';
import Courses from '../components/Resume/Courses';
// import References from '../components/Resume/References';

import courses from '../data/resume/courses';
import degrees from '../data/resume/degrees';
import positions from '../data/resume/positions';
import { skills, categories } from '../data/resume/skills';

// const sections = [
//   'Education',
//   'Experience',
//   'Skills',
//   'Courses',
//   // 'References',
// ];

const Resume = () => {
  const { t } = useTranslation('resume');
  return (
    <Main
      title={t('Resume')}
      description={t("Otakar Hirš's Resume. Education. Experience. Skills.")}
    >
      <article className="post" id="resume">
        <header>
          <div className="title">
            <h2 data-testid="heading"><Link to="resume">{t('Resume')}</Link></h2>
            <p>
              <Trans i18nKey="SUBTITLE" t={t}>
                You can send me proposals for fun projects or interesting jobs.<br />
                I enjoy learning new things and crave for real world impact.
              </Trans>
              <div
                className="badge-base LI-profile-badge"
                data-locale="en_US"
                data-size="medium"
                data-theme="light"
                data-type="VERTICAL"
                data-vanity="otahirs"
                data-version="v1"
              >
                <a
                  className="badge-base__link LI-simple-link"
                  href="https://cz.linkedin.com/in/otahirs?trk=profile-badge"
                >
                  LinkedIn
                </a>
              </div>

            </p>
            {/* <div className="link-container">
              {sections.map((sec) => (
                <h4 key={sec}>
                  <a href={`#${sec.toLowerCase()}`}>{sec}</a>
                </h4>))}
            </div> */}

          </div>
        </header>
        <Education data={degrees} />
        <Experience data={positions} />
        <Skills skills={skills} categories={categories} />
        <Courses data={courses} />
        {/* <References /> */}

      </article>
    </Main>
  );
};

export default Resume;
