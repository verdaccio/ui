/**
 * @prettier
 */

import React, { useState } from 'react';
import Fade from '@material-ui/core/Fade';

import Flex from '../../primitives/Flex';
import Icon from '../../primitives/Icon';

const FooterToolTip: React.FC = () => {
  const [showFlags, setShowFlags] = useState(false);
  return (
    <Flex spacingX="byte">
      <Icon name="earth" size="md" onMouseOver={() => setShowFlags(true)} onMouseLeave={() => setShowFlags(false)} pointer />
      <Fade in={showFlags}>
        <div>
          <Flex alignItems="center" spacingX="byte">
            <Icon name="spain" size="md" />
            <Icon name="nicaragua" size="md" />
            <Icon name="india" size="md" />
            <Icon name="brazil" size="md" />
            <Icon name="pakistan" size="md" />
            <Icon name="china" size="md" />
            <Icon name="austria" size="md" />
          </Flex>
        </div>
      </Fade>
    </Flex>
  );
};

export default FooterToolTip;
