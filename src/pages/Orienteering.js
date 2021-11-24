import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import raw from 'raw.macro';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

import Main from '../layouts/Main';

// uses babel to load contents of file
const markdown = raw('../data/orienteering.md');
const markdownCS = raw('../data/orienteering.cs.md');

const Orienteering = () => {
  const { t, i18n } = useTranslation();
  return (
    <Main
      title={t('Orienteering')}
      description={t('Bragging about what I do in a free time.')}
    >
      <article className="post markdown" id="orienteering">
        <header>
          <div className="title">
            <h2 data-testid="heading"><Link to="/orienteering">{t('Orienteering')}</Link></h2>
            <p>{t('7 minutes behind')}</p>
          </div>
        </header>
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
          {i18n.language === 'cs' ? markdownCS : markdown}
        </ReactMarkdown>
      </article>
    </Main>
  );
};

export default Orienteering;
