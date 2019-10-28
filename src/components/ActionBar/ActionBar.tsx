import React, { ReactElement, FC, useContext } from 'react';
import BugReportIcon from '@material-ui/icons/BugReport';
import DownloadIcon from '@material-ui/icons/CloudDownload';
import HomeIcon from '@material-ui/icons/Home';

import { VersionPageConsumerProps } from '../../pages/Version';
import { isURL, extractFileName, downloadFile } from '../../utils/url';
import api from '../../utils/api';
import Tooltip from '../../muiComponents/Tooltip';
import List from '../../muiComponents/List';
import { DetailContext } from '../../pages/Version/context';

import { Fab, ActionListItem } from './styles';

export interface Action {
  icon: string;
  title: string;
  handler?: Function;
}

export async function downloadHandler(link: string): Promise<void> {
  const fileStream: Blob = await api.request(link, 'GET', {
    headers: {
      ['accept']:
        'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
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

const renderIconsWithLink = (link: string, component: JSX.Element): ReactElement<HTMLElement> => {
  return (
    <a href={link} target={'_blank'}>
      {component}
    </a>
  );
};

const renderActionBar = ({ packageMeta }): ReactElement<HTMLElement> | null => {
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
            <>{renderIconsWithLink(link, fab)}</>
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

const ActionBar: FC = () => {
  const contextDetails = useContext(DetailContext);
  const { packageMeta } = contextDetails;
  return !packageMeta ? null : renderActionBar(contextDetails as VersionPageConsumerProps);
};

export { ActionBar };
