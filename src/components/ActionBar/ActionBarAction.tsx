import React from 'react';
import styled from '@emotion/styled';
import BugReportIcon from '@material-ui/icons/BugReport';
import DownloadIcon from '@material-ui/icons/CloudDownload';
import HomeIcon from '@material-ui/icons/Home';

import Tooltip from '../../muiComponents/Tooltip';
import Link from '../Link';
import FloatingActionButton from '../../muiComponents/FloatingActionButton';
import { Theme } from '../../design-tokens/theme';

import downloadTarball from './download-tarball';

export const Fab = styled(FloatingActionButton)<{ theme?: Theme }>(props => ({
  backgroundColor: props.theme && props.theme.palette.primary.main,
  color: props.theme && props.theme.palette.white,
  marginRight: 10,
}));

type ActionType = 'VISIT_HOMEPAGE' | 'OPEN_AN_ISSUE' | 'DOWNLOAD_TARBALL';

export interface ActionBarActionProps {
  type: ActionType;
  link: string;
}

/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/jsx-max-depth */
const ActionBarAction: React.FC<ActionBarActionProps> = ({ type, link }) => {
  switch (type) {
    case 'VISIT_HOMEPAGE':
      return (
        <Tooltip title="Visit homepage">
          <Link external={true} to={link}>
            <Fab size="small">
              <HomeIcon />
            </Fab>
          </Link>
        </Tooltip>
      );
    case 'OPEN_AN_ISSUE':
      return (
        <Tooltip title="Open an issue">
          <Link external={true} to={link}>
            <Fab size="small">
              <BugReportIcon />
            </Fab>
          </Link>
        </Tooltip>
      );
    case 'DOWNLOAD_TARBALL':
      return (
        <Tooltip title="Download tarball">
          <Fab data-testid="download-tarball-btn" onClick={downloadTarball(link)} size="small">
            <DownloadIcon />
          </Fab>
        </Tooltip>
      );
  }
};

export default ActionBarAction;
