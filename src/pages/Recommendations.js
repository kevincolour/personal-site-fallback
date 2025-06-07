import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import raw from 'raw.macro';

import Main from '../layouts/Main';

// uses babel to load contents of file
const markdown = raw('../data/recommendations/recommendations.md');

// Make all hrefs react router links
const LinkRenderer = ({ ...children }) => <Link {...children} />;

const Recommendations = () => (
  <Main
    title="Recommendations"
    description="Kevin's favourites"
  >
    <article className="post markdown" id="recommendations">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/recommendations">Recommendations</Link></h2>
          <p>or rather, recom<b>mandate</b>ions
          </p>
        </div>
      </header>
      <ReactMarkdown
        source={markdown}
        renderers={{
          Link: LinkRenderer,
        }}
        escapeHtml={false}
      />
    </article>
  </Main>
);

export default Recommendations;
