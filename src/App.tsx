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
import { SafeAreaView } from 'react-native'
import { ThemeProvider } from '@emotion/react'
import store from './store/store'
import theme from './theme'
import Login from './screens/Login'
import Signup from './screens/Signup'
import RootStack from './navigation'


function App(): JSX.Element {

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <RootStack.Navigator>
            <RootStack.Screen name="Login" component={Login}/>
            <RootStack.Screen name="Signup" component={Signup}/>
          </RootStack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  )
}

export default App
