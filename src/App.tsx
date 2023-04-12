import { NextUIProvider } from '@nextui-org/react';
import { MainLayout } from './layout';
import { theme } from './theme';
import './App.css';

import { DATA } from './source/data';

function App() {
  return (
    <div className="App">
      <NextUIProvider theme={theme}>
        <MainLayout mainData={DATA} />
      </NextUIProvider>
    </div>
  );
}

export default App;
