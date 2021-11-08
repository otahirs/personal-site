import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Otakar Hirš's personal website. IT student, orienteer, shower philosopher."}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">Hello there!</Link></h2>
          <p>
            After wandering through the internet you ended up here. <br />
            Coincidence? Yeah, most likely..
          </p>
        </div>
      </header>
      <p>
        Welcome to my website, where I will brag about my achievements
        and force you my world views.
      </p>
      <p>
        Please feel free to read more <Link to="/about">about me</Link>,
        go through my {' '}
        <Link to="/orienteering">orienteering</Link> {' '}
        career or gaze at my {' '}
        <Link to="/diary">diary of thoughts</Link> {' '}
        .
        <br />
        You can check out my resume {' '}
        <Link to="/resume">resume</Link> or take a peak at my {' '}
        <Link to="/projects">projects</Link>. {' '}
        {/* view <Link to="/stats">site statistics</Link>, {' '} */}
      </p>
      <p>
        Don&apos;t feel ashamed to {' '}
        <Link to="/contact">contact</Link> {' '}
        me in any matter. I will be happy to hear from you.
      </p>
    </article>
  </Main>
);

export default Index;
