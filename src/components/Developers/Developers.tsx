/**
 * @prettier
 */

import React from 'react';
import styled from '@emotion/styled';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';
import Add from '@material-ui/icons/Add';

// import colors from '../../utils/styles/colors';
import { DetailContext, DetailContextProps } from '../../pages/version/Version';

export const Details = styled('span')`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled('div')`
  margin: -5px;
  display: flex;
  flex-wrap: wrap;
  > * {
    margin: 5px;
  }
`;

// export const CardContent = styled(MuiCardContent)`
//   && {
//     padding-bottom: 20px;
//   }
// `;

// export const Heading = styled(Typography)`
//   && {
//     font-weight: 700;
//     margin-bottom: 10px;
//     text-transform: capitalize;
//   }
// `;

// export const Fab = styled(MuiFab)`
//   && {
//     background-color: ${colors.primary};
//     color: ${colors.white};
//   }
// `;

interface Props {
  type: 'contributors' | 'maintainers';
}

interface Developer {
  name: string;
  email: string;
  avatar: string;
}

const Developers: React.FC<Props> = ({ type }) => {
  const [visibleDevs, setVisibleDevs] = React.useState(6);

  const renderDevelopers: React.FC<DetailContextProps> = ({ packageMeta: { latest } }) => {
    const developers = latest[type];

    return developers || developers.length !== 0 ? (
      <Card>
        <CardContent>
          <Typography variant={'subheading'}>{type}</Typography>
          <Content>
            {developers.slice(0, visibleDevs).map((developer: Developer) => (
              <Details key={developer.email}>{renderDeveloperDetails(developer)}</Details>
            ))}
            {visibleDevs < developers.length && (
              <Fab onClick={handleLoadMore} size={'small'}>
                <Add />
              </Fab>
            )}
          </Content>
        </CardContent>
      </Card>
    ) : null;
  };

  const renderDeveloperDetails: React.FC<Developer> = ({ name, avatar }) => (
    <Tooltip title={name}>
      <Avatar aria-label={name} src={avatar} />
    </Tooltip>
  );

  const handleLoadMore = () => {
    setVisibleDevs(visibleDevs + 6);
  };

  return <DetailContext.Consumer>{context => context && renderDevelopers(context)}</DetailContext.Consumer>;
};

export default Developers;
