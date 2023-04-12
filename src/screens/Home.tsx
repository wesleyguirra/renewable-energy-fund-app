import React from 'react';
import {TouchableOpacity} from 'react-native';
import styled from '@emotion/native';
import {space, color, flexbox, border} from 'styled-system';
import {
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {CommonActions} from '@react-navigation/native';
import Account from './Account';
import ArrowLeftIcon from '../icons/left-arrow.svg';
import FundDetails from './FundDetails';
import { FundData } from "../types";

const View = styled.View`
  ${color}
  ${space}
  ${flexbox}
  ${border}
`;

const SafeAreaView = styled.SafeAreaView`
  ${color}
  ${space}
  ${flexbox}
`;

export type HomeStackParamList = {
  Account: undefined;
  FundDetails: FundData;
};

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

HomeStack.Navigator.defaultProps = {
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
            alignItems="center">
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

const Home = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Account" component={Account} />
      <HomeStack.Screen name="FundDetails" component={FundDetails} />
    </HomeStack.Navigator>
  );
};

export default Home;
