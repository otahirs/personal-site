import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import raw from 'raw.macro';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

import Main from '../layouts/Main';

// Make all hrefs react router links
const LinkRenderer = ({ ...children }) => <Link {...children} />;

// uses babel to load contents of file
const markdown = raw('../data/about.md');
const markdownCS = raw('../data/about.cs.md');

const About = () => {
  const { t, i18n } = useTranslation();
  return (
    <Main
      title={t('About')}
      description={t('Learn about Otakar Hirš')}
    >
      <article className="post markdown" id="about">
        <header>
          <div className="title">
            <h2 data-testid="heading"><Link to="/about">{t('About Me')}</Link></h2>
            {/* <p>(in about {count} words)</p> */}
          </div>
        </header>
        <ReactMarkdown components={{ a: LinkRenderer }} rehypePlugins={[rehypeRaw]}>
          {i18n.language === 'cs' ? markdownCS : markdown}
        </ReactMarkdown>
      </article>
    </Main>
  );
};

export default About;
