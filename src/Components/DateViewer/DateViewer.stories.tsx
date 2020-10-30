import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { DateViewerProps, PureDateViewer } from '.';

export default {
  title: 'Components/DateViewer',
  component: PureDateViewer,
} as Meta;

type StoryProps = DateViewerProps;

export const DateViewerComponent: Story<StoryProps> = () => <PureDateViewer />;
export const ColoredDateViewer: Story<StoryProps> = () => (
  <PureDateViewer color="red" />
);
