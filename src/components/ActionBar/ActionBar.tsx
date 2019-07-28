import React, { Component, ReactElement } from 'react';

import BugReportIcon from '@material-ui/icons/BugReport';
import DownloadIcon from '@material-ui/icons/CloudDownload';
import HomeIcon from '@material-ui/icons/Home';
import List from '@material-ui/core/List';
import Tooltip from '@material-ui/core/Tooltip';

import { DetailContextConsumer, VersionPageConsumerProps } from '../../pages/version/Version';
import { Fab, ActionListItem } from './styles';
import { isURL, extractFileName, downloadFile } from '../../utils/url';
import api from '../../utils/api';

export interface Action {
  icon: string;
  title: string;
  handler?: Function;
}

async function downloadHandler(link: string): Promise<void> {
  const fileStream: Blob = await api.request(link, 'GET', {
    headers: {
      ['accept']: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
    },
    credentials: 'include',
  });
  const fileName = extractFileName(link);
  downloadFile(fileStream, fileName);
}

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
    handler: downloadHandler,
  },
};

class ActionBar extends Component {
  public render(): ReactElement<HTMLElement> {
    return (
      <DetailContextConsumer>
        {context => {
          return this.renderActionBar(context as VersionPageConsumerProps);
        }}
      </DetailContextConsumer>
    );
  }

  private renderIconsWithLink(link: string, component: JSX.Element): ReactElement<HTMLElement> {
    return (
      <a href={link} target={'_blank'}>
        {component}
      </a>
    );
  }

  private renderActionBar = ({ packageMeta }) => {
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
        const actionItem: Action = ACTIONS[value];
        if (actionItem.handler) {
          const fab = (
            <Tooltip key={key} title={actionItem['title']}>
              <Fab
                /* eslint-disable react/jsx-no-bind */
                onClick={() => {
                  /* eslint-disable @typescript-eslint/no-non-null-assertion */
                  actionItem.handler!(link);
                }}
                size={'small'}>
                {actionItem['icon']}
              </Fab>
            </Tooltip>
          );
          component.push(fab);
        } else {
          const fab = <Fab size={'small'}>{actionItem['icon']}</Fab>;
          component.push(
            // @ts-ignore
            <Tooltip key={key} title={actionItem['title']}>
              <>{this.renderIconsWithLink(link, fab)}</>
            </Tooltip>
          );
        }
      }
      return component;
    }, []);

    if (renderList.length > 0) {
      return (
        <List>
          <ActionListItem alignItems={'flex-start'}>{renderList}</ActionListItem>
        </List>
      );
    }

    return null;
  };
}

export default ActionBar;
