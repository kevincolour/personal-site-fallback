import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import WordGenerator from '../components/Contact/WordGenerator';

const Index = () => (
  <Main
    description={"Kevin's Website"}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">Hello</Link></h2>
          <p>
            Not sure what this is yet, but it&apos;s definitely not <WordGenerator />
          </p>
        </div>
      </header>
      <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' or '}
        <Link to="/Recommendations"> recommendations </Link>
      </p>

    </article>
  </Main>
);

export default Index;
