// eslint-disable-next-line import/no-extraneous-dependencies
import { StoryGetter, StoryContext } from '@storybook/addons';
import React, { ReactNode } from 'react';
import GlobalStyle from '../src/Style/Global';

export const decorators = [
  (Story: StoryGetter, context: StoryContext): ReactNode => {
    return (
      <>
        <GlobalStyle />
        <Story {...context} />
      </>
    )
  },
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
