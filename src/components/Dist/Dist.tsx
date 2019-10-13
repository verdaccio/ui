import React, { FC, useContext } from 'react';

import { DetailContext } from '../../pages/Version';
import fileSizeSI from '../../utils/file-size';
import { formatLicense } from '../../utils/package';
import List from '../../muiComponents/List';

import { StyledText, DistListItem, DistChips } from './styles';

const DistChip: FC<{ name: string }> = ({ name, children }) =>
  children ? (
    <DistChips
      // lint rule conflicting with prettier
      /* eslint-disable react/jsx-wrap-multilines */
      label={
        <>
          <b>{name}</b>
          {': '}
          {children}
        </>
      }
      /* eslint-enable */
    />
  ) : null;

const Dist: FC = () => {
  const { packageMeta } = useContext(DetailContext);

  if (!packageMeta) {
    return null;
  }

  const { dist, license } = packageMeta && packageMeta.latest;

  return (
    <List subheader={<StyledText variant="subtitle1">{'Latest Distribution'}</StyledText>}>
      <DistListItem button={true}>
        <DistChip name="file count">{dist.fileCount}</DistChip>
        <DistChip name="size">{dist.unpackedSize && fileSizeSI(dist.unpackedSize)}</DistChip>
        <DistChip name="license">{formatLicense(license)}</DistChip>
      </DistListItem>
    </List>
  );
};

export default Dist;
