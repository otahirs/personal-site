import React from 'react';
import PropTypes from 'prop-types';
import { Helmet, HelmetProvider } from 'react-helmet-async';

// import Analytics from '../components/Template/Analytics';
import Navigation from '../components/Template/Navigation';
import SideBar from '../components/Template/SideBar';
import ScrollToTop from '../components/Template/ScrollToTop';

const Main = (props) => (
  <HelmetProvider>
    {/* <Analytics /> */}
    <ScrollToTop />
    <Helmet titleTemplate="%s | Otakar Hirš" defaultTitle="Otakar Hirš" defer={false}>
      {props.title && <title>{props.title}</title>}
      <meta name="description" content={props.description} />
      <script async defer data-website-id="afd9597d-7ce4-455a-be66-490a6cb2c73e" src="https://analytics.otahirs.cz/dQw4w9WgXcQ.js" />
      <script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript" />
    </Helmet>
    <div id="wrapper">
      <Navigation />
      <div id="main">
        {props.children}
      </div>
      {props.fullPage ? null : <SideBar />}
    </div>
  </HelmetProvider>
);

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  fullPage: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
};

Main.defaultProps = {
  children: null,
  fullPage: false,
  title: null,
  description: "Otakar Hirš's personal website.",
};

export default Main;
