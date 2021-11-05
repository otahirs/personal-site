import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Otakar Hirš</h2>
        <p><a href="mailto:otakar.hirs@gmail.com">otakar.hirs@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Otakar.
        I am a friendly guy
        of <a href="https://www.16personalities.com/intp-personality">INTP-A</a> personality,
        studying at Faculty of Informatics to b̶e̶c̶o̶m̶e̶ ̶f̶i̶l̶t̶h̶y̶ ̶r̶i̶c̶h̶
        explore the everchanging nature of IT world.
      </p>
      <ul className="actions">
        <li>
          {<Link to="/about" className="button">Read more</Link>}
          {/* {!window.location.pathname.includes('/resume')
          ? <Link to="/resume" className="button">Learn More</Link>
          : <Link to="/about" className="button">About Me</Link>} */}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Otakar Hirš <Link to="/">otahirs.cz</Link>.</p>
    </section>
  </section>
);

export default SideBar;
