import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import EmailLink from '../components/Contact/EmailLink';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Otakar Hirš via email @ otakar.hirs@gmail.com"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/contact">Contact</Link></h2>
        </div>
      </header>
      <div>
        <p>
          Do you want to say thanks?
          Do I owe you an apology?
          Is there a meaning in life?
        </p>
      </div>
      <div className="email-at">
        <p>
          Feel free to get in touch. You can email me at: <br />
        </p>
        <EmailLink />
      </div>
      <div>
        <p>or use any (social) platform from bellow list:</p>
      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
