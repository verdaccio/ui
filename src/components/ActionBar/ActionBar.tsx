import React, { Component, ReactElement } from 'react';
import BugReportIcon from '@material-ui/icons/BugReport';
import DownloadIcon from '@material-ui/icons/CloudDownload';
import HomeIcon from '@material-ui/icons/Home';

import { DetailContextConsumer, VersionPageConsumerProps } from '../../pages/Version';
import { isURL, extractFileName, downloadFile } from '../../utils/url';
import api from '../../utils/api';
import Tooltip from '../../muiComponents/Tooltip';
import List from '../../muiComponents/List';

import { Fab, ActionListItem } from './styles';

export interface Action {
  icon: string;
  title: string;
  handler?: Function;
}

export async function downloadHandler(link: string): Promise<void> {
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
          const { packageMeta } = context;

          if (!packageMeta) {
            return null;
          }

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
    const { latest } = packageMeta;

    if (!latest) {
      return null;
    }

    const { homepage, bugs, dist } = latest;

    const actionsMap = {
      homepage,
      issue: bugs ? bugs.url : null,
      tarball: dist ? dist.tarball : null,
    };

    const renderList = Object.keys(actionsMap).reduce((component: React.ReactElement[], value, key) => {
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
          <ActionListItem alignItems={'flex-start'} button={true}>
            {renderList}
          </ActionListItem>
        </List>
      );
    }

    return null;
  };
}

export { ActionBar };
