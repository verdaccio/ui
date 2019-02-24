import React from 'react';
import propTypes from 'prop-types';
import Module from '../../Module';
import ModuleContentPlaceholder from '../../ModuleContentPlaceholder';

 // @ts-ignore
import classes from './style.scss';

 // @ts-ignore
const renderRecentReleases = (recentReleases) => (
  <ul>
    {recentReleases.map((versionInfo: any) => {
      const {version, time} = versionInfo;
      return (
        <li className={'last-sync-item'} key={version}>
          <span>{version}</span>
          <span>{time}</span>
        </li>
      );
    })}
  </ul>
);

const LastSync = ({recentReleases = [], lastUpdated = ''}) => {
  return (
    <Module
      className={classes.releasesModule}
      description={lastUpdated}
      title={'Last Sync'}
    >
      {recentReleases.length ? (
        renderRecentReleases(recentReleases)
      ) : (
        <ModuleContentPlaceholder text={'Not Available!'} />
      )}
    </Module>
  );
};

LastSync.propTypes = {
  recentReleases: propTypes.array,
  lastUpdated: propTypes.string,
};

export default LastSync;
