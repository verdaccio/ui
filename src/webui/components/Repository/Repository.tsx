/* eslint react/jsx-max-depth: 0 */

import React, {Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';

import { DetailContextConsumer } from '../../pages/version/Version';
import CopyToClipBoard from '../CopyToClipBoard';

import { Heading, GithubLink, RepositoryListItem } from './styles';
// @ts-ignore
import git from './img/git.png';
import { isURL } from '../../utils/url';

class Repository extends Component<any, any> {
  render() {
    return (
      <DetailContextConsumer>
        {(context) => {
          return this.renderRepository(context);
        }}
      </DetailContextConsumer>
    );
  };

  renderRepositoryText(url: string) {
    return (<GithubLink href={url} target='_blank'>{url}</GithubLink>);
  }

  renderRepository = ({packageMeta}: any) => {
    const { 
      repository: {
        //@ts-ignore
        url,
      } = {},
    } = packageMeta.latest;
    
    if (!url || isURL(url) === false) {
      return null;
    }

    return (
      <>
        <List dense={true} subheader={<Heading variant='subheading'>Repository</Heading>}>
          <RepositoryListItem>
            <Avatar src={git} />
            <ListItemText primary={this.renderContent(url)} />
          </RepositoryListItem>
        </List>
      </>
    );
  }
  
  renderContent(url: string) {
    return (
      <CopyToClipBoard text={url}>
        {this.renderRepositoryText(url)}
      </CopyToClipBoard>
    );
  }
}


export default Repository;
