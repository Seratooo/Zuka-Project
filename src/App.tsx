import React from 'react';
import Start from './pages/Start';
//import Authentication from './pages/Authentications';
//import PersonalInformation from './pages/PersonalInformation';
//import PersonalInformation2 from './pages/PersonalInformation2';
import VerificationCode from './pages/VerificationCode';
//import Dashboard from './pages/Dashboard';
import {DefaultTheme, Provider as PeperProvider} from 'react-native-paper';
import Payments from './pages/Payments';
import Menu from './pages/menu';
import Transfers from './pages/Transfers';
import Settings from './pages/Settings';
import Accont from './pages/Accont';
import Deposit from './pages/Deposit';
import Routes from '../routes';
import Moves from './pages/moves';


const App = () => {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#323741'
    },
  };
  return (
    <>
      <PeperProvider theme={theme}>
        <Start />
      </PeperProvider>
    </>
  );
};

export default App;
