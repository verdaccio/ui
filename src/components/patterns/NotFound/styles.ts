/**
 * @prettier
 */

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
    padding: 16,
  },
  inner: {
    maxWidth: 650,
    display: 'flex',
    flexDirection: 'column',
  },
  emptyPackage: {
    width: 150,
    margin: '0 auto',
  },
  heading: {
    color: '#4b5e40',
  },
  list: {
    paddingTop: 0,
    paddingBottom: 0,
    color: '#4b5e40',
  },
  card: {
    marginTop: 24,
  },
}));

export default useStyles;
