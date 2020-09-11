import React from 'react';
import GlobalSytle from './styles/global';
import AppProvider from './hooks';
import Signup from './pages/Signup/index';

const App: React.FC = () => (
  <>
    <GlobalSytle />
    <AppProvider>
      <Signup />
    </AppProvider>
  </>
);

export default App;
