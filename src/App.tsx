/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react'

import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import store from './store/store'
import Login from './screens/Login'
import { SafeAreaView } from 'react-native'
import { ThemeProvider } from '@emotion/react'
import theme from './theme'

function App(): JSX.Element {
  const Stack = createNativeStackNavigator()

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ header: () => <SafeAreaView></SafeAreaView> }}>
            <Stack.Screen name="Login" component={Login}/>
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  )
}

export default App
