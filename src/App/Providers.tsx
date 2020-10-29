import React, { FC, StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';

import { store } from '../Store';
import GlobalStyle from '../Style/Global';

const Providers: FC = ({ children }) => (
  <StrictMode>
    <ReduxProvider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        {children}
      </BrowserRouter>
    </ReduxProvider>
  </StrictMode>
);

export default Providers;
