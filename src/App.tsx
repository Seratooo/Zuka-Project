import React from 'react';
import { DefaultTheme, Provider as PeperProvider } from 'react-native-paper';
import Routes from './routes';
import { AuthProvider } from './context/auth';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#323741'
    },
  };
  return (
    <PeperProvider theme={theme}>
      <AuthProvider>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </AuthProvider>
    </PeperProvider>

  );
};

export default App;
