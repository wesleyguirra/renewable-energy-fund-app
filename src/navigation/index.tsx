import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ArrowLeftIcon from '../icons/left-arrow.svg'
import { TouchableOpacity } from "react-native";
import { CommonActions } from "@react-navigation/native";
import styled from "@emotion/native";
import { border, color, flexbox, layout, space, typography } from "styled-system";

export type RootStackParamList = {
  Login: undefined,
  Signup: undefined
}

const RootStack = createNativeStackNavigator<RootStackParamList>()

const View = styled.View`
  ${border}
  ${color}
  ${space}
`

const Text = styled.Text`
  ${space}
  ${typography}
`

const SafeAreaView = styled.SafeAreaView`
  ${space}
  ${layout}
  ${color}
  ${flexbox}
`

RootStack.Navigator.defaultProps = {
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
          <SafeAreaView flexDirection="row" justifyContent="space-between" alignItems="center" height={80}>
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

export default RootStack
