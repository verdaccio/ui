import React, { forwardRef } from 'react';
import { default as MaterialUIAvatar, AvatarProps } from '@material-ui/core/Avatar';

// The default element type of MUI's Avatar is 'div' and we don't allow the change of this prop
type AvatarRef = HTMLElementTagNameMap['div'];

const Avatar = forwardRef<AvatarRef, AvatarProps>(function Avatar(props, ref) {
  return <MaterialUIAvatar {...props} ref={ref} />;
});

export default Avatar;
