import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Otakar Hirš's personal website. IT student, orienteer, evening philosopher."}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">About this site</Link></h2>
          <p>
            Don&apos;t read boring introductions and start clicking around.
          </p>
        </div>
      </header>
      <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        {/* view <Link to="/stats">site statistics</Link>, {' '} */}
        and soon much more.
        {/* <Link to="/contact">contact</Link> me. */}
      </p>
      <p> Source available <a href="https://github.com/otahirs/personal-site">here</a>.</p>
    </article>
  </Main>
);

export default Index;
