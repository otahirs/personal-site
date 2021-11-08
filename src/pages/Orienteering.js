import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Orienteering = () => (
  <Main
    title="Orienteering"
    description="Bragging about what I do in a free time."
  >
    <article className="post" id="orienteering">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/orienteering">Orienteering</Link></h2>
        </div>
      </header>
      <h1>To Be Done</h1>
    </article>
  </Main>
);

export default Orienteering;
