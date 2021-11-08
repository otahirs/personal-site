import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Diary = () => (
  <Main
    title="Diary"
    description="Is there a meaning in life?"
  >
    <article className="post" id="diary">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/diary">Diary of thoughts</Link></h2>
        </div>
      </header>
      <h1>To Be Done</h1>
    </article>
  </Main>
);

export default Diary;
