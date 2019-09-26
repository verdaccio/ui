import React from 'react';

import { DetailContextConsumer } from '../../pages/Version';

import { Heading } from './styles';

import VersionsTagList from './VersionsTagList';
import VersionsHistoryList from './VersionsHistoryList';

import { DIST_TAGS } from '../../../lib/constants';

export const NOT_AVAILABLE = 'Not available';
export const LABEL_CURRENT_TAGS = 'Current Tags';
export const LABEL_VERSION_HISTORY = 'Version History';

const Versions: React.FC = () => (
  <DetailContextConsumer>
    {context => {
      const { packageMeta, packageName } = context;

      if (!packageMeta) {
        return null;
      }

      // @ts-ignore - Property 'dist-tags' does not exist on type 'PackageMetaInterface'
      const { versions, time, [DIST_TAGS]: distTags } = packageMeta;

      return (
        <>
          {distTags && (
            <>
              <Heading variant="subtitle1">{LABEL_CURRENT_TAGS}</Heading>
              <VersionsTagList tags={distTags} />
            </>
          )}
          {versions && packageName && (
            <>
              <Heading variant="subtitle1">{LABEL_VERSION_HISTORY}</Heading>
              <VersionsHistoryList packageName={packageName} time={time} versions={versions} />
            </>
          )}
        </>
      );
    }}
  </DetailContextConsumer>
);

export default Versions;
