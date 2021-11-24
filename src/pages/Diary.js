import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { Link } from 'react-router-dom';
import raw from 'raw.macro';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

import Main from '../layouts/Main';
import HeadingRenderer from '../components/HeadingRenderer';

// Make all hrefs react router links
// const LinkRenderer = ({ ...children }) => <Link {...children} />;

// uses babel to load contents of file
const markdown = raw('../data/diary.md');
const markdownCS = raw('../data/diary.cs.md');

const sections = [
  'The meaning of life',
  'Growing up',
  "Women don't bite, mostly...",
  'The chains of addiction',
  'Fighting the inner introvert',
];

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
              <a href={t('DIARY.VIDEOLINK')} target="_blank" rel="noreferrer">
                <Trans i18nKey="DIARY.SUBTITLE" t={t}>
                  Is this the real life? Is this just fantasy? <br />
                  Caught in a landslide, no escape from reality..
                </Trans>
              </a>
            </p>
          </div>
        </header>
        <h1>{t('Content')}</h1>
        <div className="link-container">
          <ul>
            {sections.map((s) => t(s)).map((sec) => (
              <li>
                <h4 key={sec}>
                  <a href={`#${sec.toLowerCase().replace(/\W/g, '-')}`}>{sec}</a>
                </h4>
              </li>
            ))}
          </ul>
        </div>
        <ReactMarkdown
          components={{ h1: HeadingRenderer }}
          rehypePlugins={[rehypeRaw]}
        >
          {i18n.language === 'cs' ? markdownCS : markdown}
        </ReactMarkdown>
      </article>
    </Main>
  );
};

export default Diary;
