/**
 * @prettier
 */

import React from 'react';
import 'github-markdown-css';

interface Props {
  description: string;
}

const Readme: React.FC<Props> = ({ description }) => <div className={'markdown-body'} dangerouslySetInnerHTML={{ __html: description }} />;

export default Readme;
