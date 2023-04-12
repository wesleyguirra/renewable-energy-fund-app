import React, { useEffect } from 'react'
import styled from '@emotion/native'
import { space, color, flexbox, typography, border } from 'styled-system'
import { useDispatch } from 'react-redux'
import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootStackParamList } from '../navigation'
import Account from './Account'
import ArrowLeftIcon from "../icons/left-arrow.svg";
import { TouchableOpacity } from "react-native";
import { CommonActions } from "@react-navigation/native";


const View = styled.View`
  ${color}
  ${space}
  ${flexbox}
  ${border}
`

const SafeAreaView = styled.SafeAreaView`
  ${color}
  ${space}
  ${flexbox}
`

const Text = styled.Text`
  ${space}
  ${color}
  ${typography}
  ${border}
`

interface LoginScreenProps extends NativeStackScreenProps<RootStackParamList> {}

export type StackParamList = {
  Account: undefined,
  FundDetails: undefined,
}

const HomeStack = createNativeStackNavigator<StackParamList>()

HomeStack.Navigator.defaultProps = {
  screenOptions: (props) => ({
    headerTitle: () => <ArrowLeftIcon />,
    headerLeft: ({canGoBack}) => (
      canGoBack && (
        <TouchableOpacity onPress={() => props.navigation.dispatch(CommonActions.goBack())}>
          <ArrowLeftIcon width={18} />
        </TouchableOpacity>
      )
    ),
    header: ({ options, route, navigation, ...headerProps }) => {
      const { canGoBack } = navigation
      const { headerLeft, headerTitle, headerRight } = options
      let headerTitleComponent: (props: { children: any,  tintColor?: string | undefined}) => React.ReactNode = () => null
      if (typeof headerTitle === 'function') {
        headerTitleComponent = headerTitle
      }
      return (
        <View borderBottomWidth={1} backgroundColor="white" borderBottomColor="gray.300" paddingHorizontal={20} paddingVertical={10}>
          <SafeAreaView flexDirection="row" justifyContent="space-between" alignItems="center">
            {headerLeft && headerLeft({ label: route.name, canGoBack: canGoBack()})}
            {typeof headerTitle === 'string'
              ? headerTitle
              : headerTitleComponent({ children: headerTitle, tintColor: 'black' })}
            {headerRight ? headerRight({ canGoBack: canGoBack()}) : <View width={16} />}
          </SafeAreaView>
        </View>
      )
    },
  }),
}

const Home = ({ navigation }: LoginScreenProps) => {
  const dispatch = useDispatch()

  const onSignupPress = () => {
    navigation.push('Signup')
  }

  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Account" component={Account} />
    </HomeStack.Navigator>
  )
}

export default Home