import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { Link } from 'react-router-dom';
import raw from 'raw.macro';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

import Main from '../layouts/Main';

// Make all hrefs react router links
const LinkRenderer = ({ ...children }) => <Link {...children} />;

// uses babel to load contents of file
const markdown = raw('../data/diary.md');
const markdownCS = raw('../data/diary.cs.md');

const Diary = () => {
  const { t, i18n } = useTranslation();
  return (
    <Main
      title={t('Diary')}
      description={t('Is there a meaning in life?')}
    >
      <article className="post markdown" id="diary">
        <header>
          <div className="title">
            <h2 data-testid="heading"><Link to="/diary">{t('Diary of thoughts')}</Link></h2>
            <p>
              <Trans i18nKey="DIARY.SUBTITLE" t={t}>
                <a href="https://youtu.be/fJ9rUzIMcZQ" target="_blank" rel="noreferrer">
                  Is this the real life? Is this just fantasy? <br />
                  Caught in a landslide, no escape from reality..
                </a>
              </Trans>
            </p>
          </div>
        </header>
        <ReactMarkdown components={{ a: LinkRenderer }} rehypePlugins={[rehypeRaw]}>
          {i18n.language === 'cs' ? markdownCS : markdown}
        </ReactMarkdown>
      </article>
    </Main>
  );
};

export default Diary;
