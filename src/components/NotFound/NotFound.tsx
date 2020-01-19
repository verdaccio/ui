import styled from '@emotion/styled';
import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import Box from '../../muiComponents/Box';
import Button from '../../muiComponents/Button';
import Heading from '../../muiComponents/Heading';
import { Theme } from '../../design-tokens/theme';

import PackageImg from './img/package.svg';

export const NOT_FOUND_TEXT = "Sorry, we couldn't find it...";
export const LABEL_NOT_FOUND = "The page you're looking for doesn't exist.";
export const GO_TO_HOME_PAGE = 'Go to the home page';

const EmptyPackage = styled('img')({
  width: '150px',
  margin: '0 auto',
});

const StyledHeading = styled(Heading)<{ theme?: Theme }>(props => ({
  color: props.theme && props.theme.palette.primary.main,
  marginBottom: 16,
}));

const NotFound: React.FC = () => {
  const history = useHistory();

  const handleGoHome = useCallback(() => {
    history.push('/');
  }, [history]);

  return (
    <Box
      alignItems="center"
      data-testid="404"
      display="flex"
      flexDirection="column"
      flexGrow={1}
      justifyContent="center"
      p={2}>
      <EmptyPackage alt="404 - Page not found" src={PackageImg} />
      <StyledHeading className="not-found-text" variant="h4">
        {NOT_FOUND_TEXT}
      </StyledHeading>
      <Button onClick={handleGoHome} variant="contained">
        {GO_TO_HOME_PAGE}
      </Button>
    </Box>
  );
};

export default NotFound;
