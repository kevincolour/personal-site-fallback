import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/meProfile.jpg`} alt="" />
      </Link>
      <header>
        <h2>Kevin Kim</h2>
        <p><a href="mailto:kevincolour@gmail.com">kevincolour@gmail.com</a></p>
      </header>
      <ContactIcons />
    </section>

    <section className="blurb">
      <p>Hi, I&apos;m Kevin. Stay a while, and listen!
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/" className="button">Home</Link>}
        </li>
        <li>
          <Link to="/about" className="button">About Me</Link>
        </li>
      </ul>
    </section>
  </section>
);

export default SideBar;
