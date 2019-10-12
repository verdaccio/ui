import styled from 'react-emotion';

import colors from '../../utils/styles/colors';
import { fontSize } from '../../utils/styles/sizes';
import DialogTitle from '../../muiComponents/DialogTitle';

export const Title = styled(DialogTitle)({
  backgroundColor: colors.primary,
  color: colors.white,
  fontSize: fontSize.lg,
});
