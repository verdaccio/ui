import React, { Component } from 'react';

import Add from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';

import { DetailContextConsumer } from '../../pages/version/Version';
import { Details, Heading, Content, Fab } from './styles';
import { isEmail } from '../../utils/url';

import Avatar from '../primitives/Avatar';

interface Props {
  type: 'contributors' | 'maintainers';
}
interface State {
  visibleDevs: number;
}

class Developers extends Component<Props, State> {
  public state = {
    visibleDevs: 6,
  };

  public render(): JSX.Element {
    return (
      <DetailContextConsumer>
        {({ packageMeta }) => {
          const { type } = this.props;
          const developerType = packageMeta && packageMeta.latest[type];
          if (!developerType || developerType.length === 0) return null;
          return this.renderDevelopers(developerType, packageMeta);
        }}
      </DetailContextConsumer>
    );
  }

  public handleLoadMore = () => {
    this.setState(prev => ({ visibleDevs: prev.visibleDevs + 6 }));
  };

  private renderDevelopers = (developers, packageMeta) => {
    const { type } = this.props;
    const { visibleDevs } = this.state;
    return (
      <>
        <Heading variant={'subtitle1'}>{type}</Heading>
        <Content>
          {developers.slice(0, visibleDevs).map(developer => (
            <Details key={developer.email}>{this.renderDeveloperDetails(developer, packageMeta)}</Details>
          ))}
          {visibleDevs < developers.length && (
            <Fab onClick={this.handleLoadMore} size={'small'}>
              <Add />
            </Fab>
          )}
        </Content>
      </>
    );
  };

  private renderLinkForMail(email, avatarComponent, packageName, version): JSX.Element {
    if (!email || isEmail(email) === false) {
      return avatarComponent;
    }
    return (
      <a href={`mailto:${email}?subject=${packageName}@${version}`} target={'_top'}>
        {avatarComponent}
      </a>
    );
  }

  private renderDeveloperDetails = ({ name, avatar, email }, packageMeta) => {
    const { name: packageName, version } = packageMeta.latest;

    const avatarComponent = <Avatar aria-label={name} src={avatar} />;
    return <Tooltip title={name}>{this.renderLinkForMail(email, avatarComponent, packageName, version)}</Tooltip>;
  };
}

export default Developers;
