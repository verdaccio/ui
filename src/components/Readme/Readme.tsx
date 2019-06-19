import React from 'react';
import 'github-markdown-css';

import { Props } from './types';

const Readme: React.FC<Props> = ({ description }) => <div className="markdown-body" dangerouslySetInnerHTML={{ __html: description }} />;

export default Readme;
