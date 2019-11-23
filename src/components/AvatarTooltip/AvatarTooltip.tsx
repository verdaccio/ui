import React, { FC } from 'react';

import { isEmail } from '../../utils/url';
import Tooltip from '../../muiComponents/Tooltip';
import Avatar from '../../muiComponents/Avatar';

export interface AvatarDeveloper {
  name: string;
  packageName: string;
  version: string;
  avatar: string;
  email: string;
}

const AvatarTooltip: FC<AvatarDeveloper> = ({ name, packageName, version, avatar, email }) => {
  const avatarComponent = <Avatar aria-label={name} src={avatar} />;
  function renderLinkForMail(
    email: string,
    avatarComponent: JSX.Element,
    packageName: string,
    version: string
  ): JSX.Element {
    if (!email || isEmail(email) === false) {
      return avatarComponent;
    }

    return (
      <a href={`mailto:${email}?subject=${packageName}@${version}`} target={'_top'}>
        {avatarComponent}
      </a>
    );
  }

  return <Tooltip title={name}>{renderLinkForMail(email, avatarComponent, packageName, version)}</Tooltip>;
};

export { AvatarTooltip };
