import { AvatarProps as MuiAvatarProps, default as MuiAvatar } from '@material-ui/core/Avatar';
import React from 'react';

// The default element type of MUI's Avatar is 'div' and we don't allow the change of this prop
type AvatarRef = HTMLElementTagNameMap['div'];

const Avatar = React.forwardRef<AvatarRef, MuiAvatarProps>((props, ref) => <MuiAvatar {...props} ref={ref} />);

export default Avatar;
