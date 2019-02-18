/**
 * @prettier
 */

import React from 'react';
import Avatar from '@material-ui/core/Avatar';
// import { spacing } from '../../utils/styles/mixings';

import Tag from '../Tag';
import { formatDate, formatDateDistance } from '../../utils/package';

import {
  WrapperLink,
  Header,
  MainInfo,
  Version,
  Overview,
  Published,
  OverviewItem,
  Description,
  Icon,
  Text,
  Details,
  Author,
  Field,
  Content,
  Footer,
} from './styles';

const getInitialsName = (name: string) =>
  name
    .split(' ')
    .reduce((accumulator, currentValue) => accumulator.charAt(0) + currentValue.charAt(0), '')
    .toUpperCase();

interface Props {
  name: string;
  version: string;
  time: string;
  author: Author;
  description?: string;
  keywords?: string[];
  license?: string;
}

interface Author {
  name: string;
  avatar: string;
  email: string;
}

const Package: React.FC<Props> = ({ name: label, version, time, author: { name, avatar }, description, license, keywords = [] }) => {
  const renderMainInfo = () => (
    <MainInfo>
      <span>{label}</span>
      <Version>{`v${version}`}</Version>
    </MainInfo>
  );

  const renderAuthorInfo = () => (
    <Author>
      <Avatar alt={name} src={avatar}>
        {!avatar && getInitialsName(name)}
      </Avatar>
      <Details>
        <Text text={name} weight={'bold'} />
      </Details>
    </Author>
  );

  const renderLicenseInfo = () =>
    license && (
      <OverviewItem>
        <Icon name={'license'} pointer={true} />
        {license}
      </OverviewItem>
    );

  const renderPublishedInfo = () => (
    <OverviewItem>
      <Icon name={'time'} pointer={true} />
      <Published>{`Published on ${formatDate(time)} •`}</Published>
      {`${formatDateDistance(time)} ago`}
    </OverviewItem>
  );

  const renderDescription = () =>
    description && (
      <Field>
        <Description>{description}</Description>
      </Field>
    );

  return (
    <WrapperLink className={'package'} to={`/-/web/version/${label}`}>
      <Header>
        {renderMainInfo()}
        <Overview>
          {renderLicenseInfo()}
          {renderPublishedInfo()}
        </Overview>
      </Header>
      <Content>
        <Field>{renderAuthorInfo()}</Field>
        {renderDescription()}
      </Content>
      {keywords.length > 0 && (
        <Footer>
          {keywords.sort().map((keyword, index) => (
            <Tag key={index}>{keyword}</Tag>
          ))}
        </Footer>
      )}
    </WrapperLink>
  );
};

export default Package;
