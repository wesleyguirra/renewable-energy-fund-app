import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ArrowLeftIcon from '../icons/left-arrow.svg';
import {TouchableOpacity} from 'react-native';
import {CommonActions} from '@react-navigation/native';
import styled from '@emotion/native';
import {border, color, flexbox, layout, space} from 'styled-system';
import {createNavigationContainerRef} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeIcon from '../icons/home.svg';
import TradeIcon from '../icons/trade.svg';
import PortfolioIcon from '../icons/portfolio.svg';
import theme from '../theme';

export const navigationRef = createNavigationContainerRef();

export type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
  SignupSuccess: {user: {firstName: string; email: string}};
  Main: undefined;
};

export type TabParamList = {
  Home: undefined;
  Trade: undefined;
  Portfolio: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const Tab = createBottomTabNavigator<TabParamList>();

Tab.Navigator.defaultProps = {
  screenOptions: ({route}) => ({
    tabBarActiveTintColor: theme.colors.primary[500],
    tabBarInactiveTintColor: theme.colors.black,
    tabBarIcon: ({color: fillColor}) => {
      const icons = {
        Home: HomeIcon,
        Trade: TradeIcon,
        Portfolio: PortfolioIcon,
      };
      return React.createElement(icons[route.name], {
        width: 18,
        height: 18,
        fill: fillColor,
      });
    },
  }),
};

const View = styled.View`
  ${border}
  ${color}
  ${space}
`;

const SafeAreaView = styled.SafeAreaView`
  ${space}
  ${layout}
  ${color}
  ${flexbox}
`;

RootStack.Navigator.defaultProps = {
  screenOptions: props => ({
    headerTitle: () => <ArrowLeftIcon />,
    headerLeft: ({canGoBack}) =>
      canGoBack && (
        <TouchableOpacity
          onPress={() => props.navigation.dispatch(CommonActions.goBack())}>
          <ArrowLeftIcon width={18} />
        </TouchableOpacity>
      ),
    header: ({options, route, navigation}) => {
      const {canGoBack} = navigation;
      const {headerLeft, headerTitle, headerRight} = options;
      let headerTitleComponent: (props: {
        children: any;
        tintColor?: string | undefined;
      }) => React.ReactNode = () => null;
      if (typeof headerTitle === 'function') {
        headerTitleComponent = headerTitle;
      }
      return (
        <View
          borderBottomWidth={1}
          backgroundColor="white"
          borderBottomColor="gray.300"
          paddingHorizontal={20}
          paddingVertical={10}>
          <SafeAreaView
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            height={80}>
            {headerLeft &&
              headerLeft({label: route.name, canGoBack: canGoBack()})}
            {typeof headerTitle === 'string'
              ? headerTitle
              : headerTitleComponent({
                  children: headerTitle,
                  tintColor: 'black',
                })}
            {headerRight ? (
              headerRight({canGoBack: canGoBack()})
            ) : (
              <View width={16} />
            )}
          </SafeAreaView>
        </View>
      );
    },
  }),
};

export default RootStack;
