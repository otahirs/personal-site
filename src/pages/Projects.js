import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import data from '../data/projects';

const Projects = () => {
  const { t } = useTranslation('projects');
  return (
    <Main
      title={t('Projects')}
      description={t("Learn about Otakar Hirš's projects.")}
    >
      <article className="post" id="projects">
        <header>
          <div className="title">
            <h2 data-testid="heading"><Link to="/projects">{t('Projects')}</Link></h2>
            <p>
              {t('A growing selection of affiliated projects, that I&apos;m not too ashamed of')}
            </p>
          </div>
        </header>
        {data.map((project) => (
          <Cell
            data={project}
            key={project.title}
          />
        ))}
      </article>
    </Main>
  );
};

export default Projects;
