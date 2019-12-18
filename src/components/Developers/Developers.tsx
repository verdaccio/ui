import React, { useState, useCallback, useContext, useEffect, useMemo } from 'react';
import Add from '@material-ui/icons/Add';
import styled from '@emotion/styled';

import { DetailContext } from '../../pages/Version';
import Tooltip from '../../muiComponents/Tooltip';
import Avatar from '../../muiComponents/Avatar';
import Box from '../../muiComponents/Box';
import Text from '../../muiComponents/Text';
import FloatingActionButton from '../../muiComponents/FloatingActionButton';
import { Theme } from '../../design-tokens/theme';

import getUniqueDeveloperValues from './get-unique-developer-values';

export const Fab = styled(FloatingActionButton)<{ theme?: Theme }>(props => ({
  backgroundColor: props.theme && props.theme.palette.primary.main,
  color: props.theme && props.theme.palette.white,
}));

export enum DeveloperType {
  CONTRIBUTORS = 'contributors',
  MAINTAINERS = 'maintainers',
}

interface Props {
  type: DeveloperType;
  visibleMax?: number;
}

export const StyledText = styled(Text)<{ theme?: Theme }>(({ theme }) => ({
  fontWeight: theme && theme.fontWeight.bold,
  marginBottom: '10px',
  textTransform: 'capitalize',
}));

const StyledBox = styled(Box)({
  '> *': {
    margin: 5,
  },
});

export const VISIBLE_MAX = 2;

const Developers: React.FC<Props> = ({ type, visibleMax = VISIBLE_MAX }) => {
  const detailContext = useContext(DetailContext);

  if (!detailContext) {
    throw Error("The app's detail Context was not correct used");
  }

  const developers = useMemo(() => getUniqueDeveloperValues(detailContext.packageMeta?.latest[type]), [
    detailContext.packageMeta,
    type,
  ]);

  const [visibleDevelopersMax, setVisibleDevelopersMax] = useState(visibleMax);
  const [visibleDevelopers, setVisibleDevelopers] = useState(developers);

  useEffect(() => {
    if (!developers) return;
    setVisibleDevelopers(developers.slice(0, visibleDevelopersMax));
  }, [developers, visibleDevelopersMax]);

  const handleSetVisibleDevelopersMax = useCallback(() => {
    setVisibleDevelopersMax(visibleDevelopersMax + VISIBLE_MAX);
  }, [visibleDevelopersMax]);

  if (!visibleDevelopers || !developers) return null;

  return (
    <>
      <StyledText variant={'subtitle1'}>{type}</StyledText>
      <StyledBox display="flex" flexWrap="wrap" margin="10px 0 10px 0">
        {visibleDevelopers.map(visibleDeveloper => (
          <Tooltip key={visibleDeveloper.email} title={visibleDeveloper.name}>
            <Avatar alt={visibleDeveloper.name} src={visibleDeveloper.avatar} />
          </Tooltip>
        ))}
        {visibleDevelopersMax < developers.length && (
          <Fab onClick={handleSetVisibleDevelopersMax} size="small">
            <Add />
          </Fab>
        )}
      </StyledBox>
    </>
  );
};

export default Developers;
