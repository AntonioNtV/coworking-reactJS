import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalSytle from './styles/global';
import Routes from './routes/index';
import AppProvider from './hooks';

const App: React.FC = () => (
  <>
    <GlobalSytle />
    <AppProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </AppProvider>
  </>
);

export default App;
