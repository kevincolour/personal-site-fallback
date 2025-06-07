import React from 'react';
import { Document, Page } from 'react-pdf/dist/umd/entry.webpack';
import { pdfjs } from 'react-pdf';

// import { Link } from 'react-router-dom';

import resumePDF from '../images/resume.pdf';
import Main from '../layouts/Main';

// import Education from '../components/Resume/Education';
// import Experience from '../components/Resume/Experience';
// // import Skills from '../components/Resume/Skills';
// import References from '../components/Resume/References';

// import degrees from '../data/resume/degrees';
// import positions from '../data/resume/positions';

// import { skills, categories } from '../data/resume/skills';

// const sections = [
//   'Education',
//   'Experience',
//   'Skills',
//   'Courses',
//   'References',
// ];
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => (
  <Main
    title="Resume"
    description="Kevin's Resume"
  >
    <Document file={resumePDF}>
      <Page pageNumber={1} />
    </Document>
    {/* <Document file="http://www.africau.edu/images/default/sample.pdf" /> */}

    {/* <article className="post" id="resume">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="resume">Resume</Link></h2>
          <div className="link-container">
            {sections.map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div>

        </div>
      </header>
      <Education data={degrees} />
      <Experience data={positions} />
      <References />

    </article> */}
  </Main>
);

export default Resume;
