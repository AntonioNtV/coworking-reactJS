import React from 'react';
import GlobalSytle from './styles/global';
import AppProvider from './hooks';
import Signin from './pages/Signin/Signin';

const App: React.FC = () => (
  <>
    <GlobalSytle />
    <AppProvider>
      <Signin />
    </AppProvider>
  </>
);

export default App;
