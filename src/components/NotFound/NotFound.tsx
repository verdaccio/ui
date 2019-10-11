import Typography from '@material-ui/core/Typography';
import withWidth, { isWidthUp, WithWidthProps } from '@material-ui/core/withWidth';
import React, { useCallback } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import ListItem from '../../muiComponents/ListItem';

import PackageImg from './img/package.svg';
import { Card, EmptyPackage, Heading, Inner, List, Wrapper } from './styles';

export const NOT_FOUND_TEXT = `Sorry, we couldn't find it...`;
export const LABEL_NOT_FOUND = `The page you're looking for doesn't exist.`;
export const LABEL_FOOTER_NOT_FOUND = 'Perhaps these links will help find what you are looking for:';

export type NotFoundProps = RouteComponentProps & WithWidthProps;

const HOME_LABEL = 'Home';

const renderSubTitle = (): JSX.Element => (
  <Typography variant="subtitle1">
    <div>{LABEL_NOT_FOUND}</div>
    <div>{LABEL_FOOTER_NOT_FOUND}</div>
  </Typography>
);

const NotFound: React.FC<NotFoundProps> = ({ history, width }) => {
  const handleGomHome = useCallback(() => {
    history.push('/');
  }, [history]);

  const renderList = (): JSX.Element => (
    <List>
      <ListItem button={true} divider={true} onClick={handleGomHome}>
        {HOME_LABEL}
      </ListItem>
    </List>
  );

  /* eslint-disable @typescript-eslint/no-non-null-assertion */
  return (
    <Wrapper data-testid="404">
      <Inner>
        <EmptyPackage alt="404 - Page not found" src={PackageImg} />
        <Heading className="not-found-text" variant={isWidthUp('sm', width!) ? 'h2' : 'h4'}>
          {NOT_FOUND_TEXT}
        </Heading>
        {renderSubTitle()}
        <Card>{renderList()}</Card>
      </Inner>
    </Wrapper>
  );
};

export default withRouter<NotFoundProps, React.ComponentType<NotFoundProps>>(withWidth()(NotFound));
