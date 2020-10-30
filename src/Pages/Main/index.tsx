import React, { FC } from 'react';
import styled from 'styled-components';

import DateViewer from '../../Components/DateViewer';

const Container = styled.main``;

const Main: FC = () => (
  <Container>
    <DateViewer />
  </Container>
);

export default Main;
