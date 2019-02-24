/**
 * @prettier
 */

import { makeStyles } from '@material-ui/styles';
import colors from '../../utils/styles/colors';
// import mq from '../../utils/styles/media';

export const useStyles = makeStyles(() => ({
  greetings: {
    margin: '0 5px 0 0',
  },
  innerNavBar: {
    backgroundColor: '#4b5e40',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 15px',
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
  navBar: {
    minHeight: 60,
    display: 'flex',
    justifyContent: 'center',
  },
}));
