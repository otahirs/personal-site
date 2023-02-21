import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

// import CategoryButton from './Skills/CategoryButton';
// import SkillBar from './Skills/SkillBar';

const handleProps = ({ categories, skills, t }) => ({
  buttons: categories.map((cat) => t(cat.name)).reduce((obj, key) => ({
    ...obj,
    [key]: false,
  }), { All: true }),
  skills,
  t,
});

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = handleProps({ categories: props.categories, skills: props.skills, t: props.t });
  }

  /*
  getRows() {
    // search for true active categories
    const actCat = Object.keys(this.state.buttons).reduce((cat, key) => (
      this.state.buttons[key] ? key : cat
    ), 'All');

    return this.state.skills.sort((a, b) => {
      let ret = 0;
      if (a.competency > b.competency) ret = -1;
      else if (a.competency < b.competency) ret = 1;
      else if (a.category[0] > b.category[0]) ret = -1;
      else if (a.category[0] < b.category[0]) ret = 1;
      else if (a.title > b.title) ret = 1;
      else if (a.title < b.title) ret = -1;
      return ret;
    }).filter((skill) => (actCat === 'All' || skill.category.map(this.props.t).includes(actCat)))
      .map((skill) => (
        <SkillBar
          categories={this.props.categories}
          data={skill}
          key={skill.title}
        />
      ));
  }

   getButtons() {
    return Object.keys(this.state.buttons).map((key) => (
      <CategoryButton
        label={this.props.t(key)}
        key={key}
        active={this.state.buttons}
        handleClick={this.handleChildClick}
      />
    ));
  }
  handleChildClick = (label) => {
    this.setState((prevState) => {
      // Toggle button that was clicked. Turn all other buttons off.
      const buttons = Object.keys(prevState.buttons).reduce((obj, key) => ({
        ...obj,
        [key]: (label === key) && !prevState.buttons[key],
      }), {});
      // Turn on 'All' button if other buttons are off
      buttons.All = !Object.keys(prevState.buttons).some((key) => buttons[key]);
      return { buttons };
    });
  }
 */

  render() {
    const { t } = this.props;
    return (
      <div className="skills">
        <div className="link-to" id="skills" />
        <div className="title">
          <h3>{t('Skills')}</h3>
        </div>
        <article className="jobs-container">
          <header>
            <h4>{t('IT')}</h4>
          </header>
          <ul>
            <li>{t('Relaxed in programming languages such as')} <b>Rust</b>, C#, C, C++ {t('and')} JS/TS</li>
            <li>{t('Knowledgeable of')} <b>{t('linux')}</b> {t('operating system and')} <b>{t('networking')}</b></li>
            <li>{t('Skilled in database systems and')} <b>SQL</b></li>
            <li>
              {t('Experience with technologies as')} <b>Git</b>, <b>Docker</b>, <b>React</b>
              , <b>PostgresSQL</b>, Blazor
            </li>
            <li>{t('Ability to write non-spaghetti code and use efficient data structures')}</li>
            <li>{t('Strong foundation in mathematical and logical concepts')}</li>
          </ul>
          <header>
            <h4>{t('Languages')}</h4>
          </header>
          <ul className="points">
            <li>{t('English')} - C1</li>
            <li>{t('German')} - A2</li>
          </ul>
        </article>
        {/* <div className="skill-button-container"> */}
        {/*   {this.getButtons()} */}
        {/* </div> */}
        {/* <div className="skill-row-container"> */}
        {/*   {this.getRows()} */}
        {/* </div> */}
      </div>
    );
  }
}

Skills.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    competency: PropTypes.number,
    category: PropTypes.arrayOf(PropTypes.string),
  })),
  categories: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    color: PropTypes.string,
  })),
  t: PropTypes.func.isRequired,
};

Skills.defaultProps = {
  skills: [],
  categories: [],
};

export default withTranslation('resume')(Skills);
