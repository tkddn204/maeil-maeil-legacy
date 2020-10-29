import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { DateViewer, DateViewerProps } from '.';

export default {
  title: 'Components/DateViewer',
  component: DateViewer,
} as Meta;

type StoryProps = DateViewerProps;

export const DateViewerComponent: Story<StoryProps> = () => <DateViewer />;
export const ColoredDateViewer: Story<StoryProps> = () => (
  <DateViewer color="red" />
);
