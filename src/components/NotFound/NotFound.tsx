import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import PackageImg from './img/package.svg';
import { Card, EmptyPackage, Heading, Inner, List, Wrapper } from './styles';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';

export const NOT_FOUND_TEXT = "Sorry, we couldn't find it...";

export type NotFoundProps = RouteComponentProps & { width: Breakpoint; history };

const NotFound: React.FC<NotFoundProps> = ({ history, width }) => {
  const handleGoTo = (to: string): (() => void | undefined) => () => {
    history.push(to);
  };

  const handleGoBack = (): ((e: React.MouseEvent<HTMLElement, MouseEvent>) => void | undefined) => () => {
    history.goBack();
  };

  const renderList = (): JSX.Element => (
    <List>
      <ListItem button={true} divider={true} onClick={handleGoTo('/')}>
        {'Home'}
      </ListItem>
      <ListItem button={true} divider={true} onClick={handleGoBack()}>
        {'Back'}
      </ListItem>
    </List>
  );

  const renderSubTitle = (): JSX.Element => (
    <Typography variant="subtitle1">
      <div>{"The page you're looking for doesn't exist."}</div>
      <div>{'Perhaps these links will help find what you are looking for:'}</div>
    </Typography>
  );

  return (
    <Wrapper>
      <Inner>
        <EmptyPackage alt="404 - Page not found" src={PackageImg} />
        <Heading className="not-found-text" variant={isWidthUp('sm', width) ? 'h2' : 'h4'}>
          {NOT_FOUND_TEXT}
        </Heading>
        {renderSubTitle()}
        <Card>{renderList()}</Card>
      </Inner>
    </Wrapper>
  );
};

export default withRouter(withWidth()(NotFound));
