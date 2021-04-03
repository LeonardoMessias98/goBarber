import React from 'react';

import GlobalStyle from 'styles/global';

import { AuthProvider } from 'context/AuthContext';
import Routes from './routes';

function App() {
  return (
    <>
      <AuthProvider>
        <Routes />
      </AuthProvider>
      <GlobalStyle />
    </>
  );
}

export default App;
