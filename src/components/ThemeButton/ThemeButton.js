import React from 'react';
import {connect} from 'react-redux';

import {toggleTheme} from '../../redux/actions/index';

import s from './ThemeButton.module.css';

const ThemeButton = ({theme, toggleTheme}) => {
  return (
    <button
      className={s[`btn${theme}`]}
      type="button"
      onClick={() => toggleTheme()}
    >
      Theme: {theme}
    </button>
  );
};
const mapStateToProps = ({theme}) => {
  return {
    theme: theme.themeColor,
  };
};
const mapDispatchToProps = {
  toggleTheme: toggleTheme,
};

export default connect(mapStateToProps, mapDispatchToProps)(ThemeButton);
