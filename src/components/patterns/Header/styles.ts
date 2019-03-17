/**
 * @prettier
 */

import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { makeStyles } from '@material-ui/styles';
import colors from '../../../utils/styles/colors';

export const useStyles = makeStyles((theme: Theme) => {
  return {
    greetings: {
      margin: '0 5px 0 0',
    },
    navBar: {
      backgroundColor: theme.colors.primary,
    },
    innerNavBar: {
      justifyContent: 'space-between',
      alignItems: 'center',
      display: 'flex',
      marginLeft: 'auto',
      marginRight: 'auto',
      minWidth: 400,
      width: '100%',
      paddingLeft: 16,
      paddingRight: 16,
      maxWidth: theme.breakpoints.values.sm,
      [theme.breakpoints.up('md')]: {
        maxWidth: theme.breakpoints.values.md,
      },
      [theme.breakpoints.up('lg')]: {
        maxWidth: theme.breakpoints.values.lg,
      },
    },
    rightSide: {
      display: 'flex',
      padding: 0,
    },
    leftSide: {
      flex: 1,
    },
    mobileNavBar: {
      alignItems: 'center',
      display: 'flex',
      borderBottom: '1px solid',
      borderColor: colors.greyLight,
      padding: 8,
      position: 'relative',
    },
    innerMobileNavBar: {
      borderRadius: 4,
      backgroundColor: colors.greyLight,
      color: colors.white,
      width: '100%',
      padding: '0px 5px',
      margin: '0 10px 0 0',
    },
    iconSearchButton: {
      display: 'block',
    },
    searchWrapper: {
      display: 'none',
      maxWidth: 393,
      width: '100%',
    },
  };
});
