/**
 * @prettier
 */

import React from 'react';

import Flex from '../../primitives/Flex';
import Text from '../../primitives/Text';
import Icon from '../../primitives/Icon';

// @ts-ignore
import { version } from '../../../../package.json';
import { goToVerdaccioWebsite } from '../../../utils/windows.js';

const FooterRight: React.FC = () => (
  <Flex alignItems="center" spacingX="byte">
    <Text is="span" variant="subtitle2" color="disabled">
      Powered by
    </Text>
    <Icon name="verdaccio" onClick={goToVerdaccioWebsite} size="md" img pointer />
    <Text is="span" variant="subtitle2" color="disabled">
      {`/ ${version}`}
    </Text>
  </Flex>
);

export default FooterRight;
