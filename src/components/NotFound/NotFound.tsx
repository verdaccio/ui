/**
 * @prettier
 */

import React from 'react';
import { withRouter } from 'react-router-dom';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Card from '@material-ui/core/Card';

import { Wrapper, Inner, EmptyPackage } from './styles';
// @ts-ignore
import PackageImg from './img/package.svg';

interface Props {
  history?: any;
  width?: any;
  pkg?: string;
}

// eslint-disable-next-line react/prop-types
const NotFound: React.FC<Props> = ({ history, width, pkg }) => {
  const handleGoTo = (to: string) => () => {
    history.push(to);
  };

  const handleGoBack = () => () => {
    history.goBack();
  };

  const renderList = () => (
    <List>
      <ListItem button={true} divider={true} onClick={handleGoTo('/')}>
        {'Home'}
      </ListItem>
      <ListItem button={true} divider={true} onClick={handleGoBack()}>
        {'Back'}
      </ListItem>
    </List>
  );

  const renderSubTitle = () => (
    <Typography variant={'subtitle1'}>
      <div>{"The page you're looking for doesn't exist."}</div>
      <div>{'Perhaps these links will help find what you are looking for:'}</div>
    </Typography>
  );

  return (
    <Wrapper>
      <Inner>
        <EmptyPackage alt={'404 - Page not found'} src={PackageImg} />
        <Typography variant={isWidthUp('sm', width) ? 'h2' : 'h4'}>{"Sorry, we couldn't find it..."}</Typography>
        {renderSubTitle()}
        <Card>{renderList()}</Card>
      </Inner>
    </Wrapper>
  );
};

export default NotFound;
