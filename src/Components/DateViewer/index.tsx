import React, { ReactElement } from 'react';
import { DateTime } from 'luxon';
import styled from 'styled-components';

const Container = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;

export interface DateViewerProps {
  date?: DateTime;
}

export default function DateViewer({ date }: DateViewerProps): ReactElement {
  return (
    <Container>{date?.toString() || DateTime.local().toString()}</Container>
  );
}
