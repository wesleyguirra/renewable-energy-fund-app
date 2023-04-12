/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {Provider, useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from '@emotion/react';
import theme from './theme';
import RootStack, {navigationRef, Tab} from './navigation';
import Login from './screens/Login';
import Signup from './screens/Signup';
import SignupSuccess from './screens/SignupSuccess';
import Home from './screens/Home';
import Trade from './screens/Trade';
import Portfolio from './screens/Portfolio';
import store, {RootState} from './store/store';

function Main(): JSX.Element {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen name="Trade" component={Trade} />
      <Tab.Screen name="Portfolio" component={Portfolio} />
    </Tab.Navigator>
  );
}

function Navigator(): JSX.Element {
  const isAuthenticated = useSelector(
    (state: RootState) => state.authentication.isAuthenticated,
  );

  return (
    <RootStack.Navigator>
      {isAuthenticated ? (
        <>
          <RootStack.Screen name="Login" component={Login} />
          <RootStack.Screen name="Signup" component={Signup} />
          <RootStack.Screen name="SignupSuccess" component={SignupSuccess} />
        </>
      ) : (
        <RootStack.Screen
          name="Main"
          component={Main}
          options={{headerShown: false}}
        />
      )}
    </RootStack.Navigator>
  );
}

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <NavigationContainer ref={navigationRef}>
          <Navigator />
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
