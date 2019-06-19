import React, { Component, ReactElement } from 'react';

import BugReportIcon from '@material-ui/icons/BugReport';
import DownloadIcon from '@material-ui/icons/CloudDownload';
import HomeIcon from '@material-ui/icons/Home';
import List from '@material-ui/core/List';
import Tooltip from '@material-ui/core/Tooltip';

import { DetailContextConsumer, VersionPageConsumerProps } from '../../pages/version/Version';
import { Fab, ActionListItem } from './styles';
import { isURL } from '../../utils/url';

const ACTIONS = {
  homepage: {
    icon: <HomeIcon />,
    title: 'Visit homepage',
  },
  issue: {
    icon: <BugReportIcon />,
    title: 'Open an issue',
  },
  tarball: {
    icon: <DownloadIcon />,
    title: 'Download tarball',
  },
};

class ActionBar extends Component<any, any> {
  public render(): ReactElement<HTMLElement> {
    return (
      <DetailContextConsumer>
        {context => {
          return this.renderActionBar(context as VersionPageConsumerProps);
        }}
      </DetailContextConsumer>
    );
  }

  private renderIconsWithLink(link: string, component: any): ReactElement<HTMLElement> {
    return (
      <a href={link} target={'_blank'}>
        {component}
      </a>
    );
  }

  private renderActionBarListItems = packageMeta => {
    // @ts-ignore
    const { latest: { bugs: { url: issue } = {}, homepage, dist: { tarball } = {} } = {} } = packageMeta;

    const actionsMap = {
      homepage,
      issue,
      tarball,
    };

    const renderList = Object.keys(actionsMap).reduce((component, value, key) => {
      const link = actionsMap[value];
      if (link && isURL(link)) {
        const fab = <Fab size={'small'}>{ACTIONS[value]['icon']}</Fab>;
        component.push(
          // @ts-ignore
          <Tooltip key={key} title={ACTIONS[value]['title']}>
            <>{this.renderIconsWithLink(link, fab)}</>
          </Tooltip>
        );
      }
      return component;
    }, []);

    return (
      <>
        <ActionListItem alignItems={'flex-start'}>{renderList}</ActionListItem>
      </>
    );
  };

  private renderActionBar = ({ packageMeta = {} }) => {
    return <List>{this.renderActionBarListItems(packageMeta)}</List>;
  };
}

export default ActionBar;
