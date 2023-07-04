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
      <script async defer src="https://analytics.umami.is/script.js" data-website-id="1c24f046-42c6-4dce-abe7-78599ee6a0af" />
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
