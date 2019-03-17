/**
 * @prettier
 */

import React from 'react';

import Flex from '../../primitives/Flex';
import Text from '../../primitives/Text';

import FooterFlags from './FooterFlags';

const FooterLeft: React.FC = () => (
  <Flex alignItems="center" spacingX="byte">
    <Flex spacingX="byte">
      <Text variant="subtitle2" color="disabled">
        Made with
      </Text>
      <Text color="red">❤</Text>
      <Text variant="subtitle2" color="disabled">
        on
      </Text>
    </Flex>
    <FooterFlags />
  </Flex>
);

export default FooterLeft;
