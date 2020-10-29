import React, { FC } from 'react';
import styled from 'styled-components';
import { DateTime } from 'luxon';

import DateViewer from '../../Components/DateViewer';

const Container = styled.main``;

const Main: FC = () => (
  <Container>
    <DateViewer date={DateTime.local(2020, 10, 20)} />
  </Container>
);

export default Main;
