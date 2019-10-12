import React from 'react';
import addons, { makeDecorator } from '@storybook/addons';

import SyntaxHighlighter from 'react-syntax-highlighter';
import reactElementToJSXString from 'react-element-to-jsx-string';
import { Typography, Box } from '@material-ui/core';

export const withCode = makeDecorator({
  name: 'verdaccio_code_decorator',
  parameterName: undefined,
  wrapper: (getStory, context) => {
    const children = getStory(context);
    const info = context.parameters && context.parameters.info;
    const showSource = (context.parameters && context.parameters.showSource) || true;
    console.log({ p: context.parameters });
    return (
      <Box p={{ xs: 2, sm: 3, md: 4 }}>
        <Typography gutterBottom variant="h4">
          {context.kind}
        </Typography>
        {info && (
          <Typography color="textSecondary" variant="body1">
            {info}
          </Typography>
        )}
        <Box mt={2} mb={2}>
          {children}
        </Box>
        {showSource === true && (
          <SyntaxHighlighter language="jsx" highlighter="prism" fontFamily="FiraCode-Regular" fontSize={14}>
            {reactElementToJSXString(children)}
          </SyntaxHighlighter>
        )}
      </Box>
    );
  },
});
