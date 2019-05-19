

import React from 'react';
import 'github-markdown-css';

import { IProps } from './types';

const Readme: React.FC<IProps> = ({ description }) => <div className="markdown-body" dangerouslySetInnerHTML={{ __html: description }} />;

export default Readme;
