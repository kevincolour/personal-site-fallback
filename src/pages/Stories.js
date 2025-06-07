import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import data from '../data/stories';

const Stories = () => (
  <Main
    title="Stories"
    description="Stay a while, and listen"
  >
    <article className="post" id="stories">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/stories">Stories</Link></h2>
          <p>Stay a while, and listen</p>
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

export default Stories;
