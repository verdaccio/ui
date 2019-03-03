import React from 'react';
import PropTypes from 'prop-types';

 // @ts-ignore
import classes from './style.scss';

 // @ts-ignore
export default function ModuleContentPlaceholder({text}) {
  return <p className={classes.emptyPlaceholder}>{text}</p>;
}
ModuleContentPlaceholder.propTypes = {
  text: PropTypes.string.isRequired,
};
