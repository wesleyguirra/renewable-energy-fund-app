import React, {useEffect} from 'react';
import styled from '@emotion/native';
import {space, color, flexbox, typography, border} from 'styled-system';
import {useDispatch} from 'react-redux';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import UserIcon from '../icons/user.svg';
import NotificationIcon from '../icons/notification.svg';
import ArrowUpRightIcon from '../icons/arrow-up-right.svg';
import ChevronDownIcon from '../icons/chevron-down.svg';
import CoinIcon from '../icons/coin.svg';
import funds from '../mockData.json';
import Button from '../components/Button';
import FundItem from '../components/FundItem';
import {FundData} from '../types';
import BusinessStatisticsIllustration from '../illustrations/business-statistics.svg';
import {HomeStackParamList} from './Home';
import { TouchableOpacity } from 'react-native';

// @ts-ignore
const fundList: FundData[] = funds;

const SafeAreaView = styled.SafeAreaView`
  ${color}
  ${space}
  ${flexbox}
`;

const View = styled.View`
  ${color}
  ${space}
  ${flexbox}
  ${border}
`;

const Text = styled.Text`
  ${space}
  ${color}
  ${typography}
  ${border}
`;

const ScrollView = styled.ScrollView`
  ${color}
  ${space}
  ${flexbox}
`;

const ArrowUpRight = styled(ArrowUpRightIcon)`
  ${space}
  ${color}
`;

const ChevronDown = styled(ChevronDownIcon)`
  ${space}
  ${color}
`;


interface AccountScreenProps
  extends NativeStackScreenProps<HomeStackParamList> {}

const Account = ({navigation: navigationProp}: AccountScreenProps) => {
  const dispatch = useDispatch();
  useEffect(() => {
    navigationProp.setOptions({
      header: () => {
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
              <View
                width={30}
                height={30}
                backgroundColor="gray.300"
                borderRadius={15}
                justifyContent="center"
                alignItems="center">
                <UserIcon />
              </View>
              <View flexDirection="row" alignItems="center">
                <Text fontWeight={700} fontSize={14}>
                  Account: $1,457.23
                </Text>
                <ChevronDown color="black" marginLeft={1} />
              </View>
              <NotificationIcon />
            </SafeAreaView>
            <View flexDirection="row" marginVertical={16} alignItems="flex-end">
              <View>
                <Text fontSize={12} marginBottom={1}>
                  Portfolio
                </Text>
                <View flexDirection="row" alignItems="flex-end">
                  <Text fontSize={24} fontWeight={700}>
                    $1,245.23
                  </Text>
                  <View flexDirection="row" alignItems="flex-end">
                    <ArrowUpRight
                      width={10}
                      height={10}
                      margin={1}
                      color="success"
                    />
                    <Text color="success" fontSize={14}>
                      31.82%
                    </Text>
                  </View>
                </View>
              </View>
              <Button
                marginLeft="auto"
                variant="ghost"
                size="small"
                onPress={() => null}
                leftAccessory={() => <CoinIcon />}>
                Earn Rewards
              </Button>
            </View>
          </View>
        );
      },
    });
  }, []);

  return (
    <ScrollView flexGrow backgroundColor="white">
      <View paddingHorizontal={20}>
        <Text fontSize={18} fontWeight={600} paddingVertical={20} color="black">
          Funds
        </Text>
      </View>
      <ScrollView
        horizontal
        paddingHorizontal={20}
        showsHorizontalScrollIndicator={false}>
        {fundList.map((fund) => (
          <TouchableOpacity
            key={fund.name}
            onPress={() => dispatch({type: 'navigation/navigate', payload: {screen: 'FundDetails', params: fund}})}>
            <FundItem
              name={fund.name}
              price={fund.price}
              variation={fund.variation}
              data={fund.data}
              logo={fund.logo}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        backgroundColor="primary.500"
        padding={20}
        marginHorizontal={20}
        marginTop={20}
        borderRadius={10}>
        <View flexGrow={false}>
          <Text color="white" fontSize={18} fontWeight={600}>
            {'Learn more about \ncarbon credits'}
          </Text>
          <Text color="white" fontSize={13} marginTop={2}>
            Check out our top tips!
          </Text>
        </View>
        <View>
          <BusinessStatisticsIllustration height={80} />
        </View>
      </View>

      <ScrollView
        horizontal
        paddingHorizontal={20}
        marginVertical={20}
        showsHorizontalScrollIndicator={false}
      >
        <View
          width={130}
          backgroundColor="gray.400"
          padding={20}
          marginRight={20}
          borderRadius={8}
          justifyContent="flex-start"
        >
          <Text fontWeight={600} paddingVertical={20} color="black">
            Why you should invest here?
          </Text>
        </View>
        <View
          width={130}
          backgroundColor="gray.400"
          padding={20}
          marginRight={20}
          borderRadius={8}
          justifyContent="flex-start"
        >
          <Text fontWeight={600} paddingVertical={20} color="black">
            How long does it take to get my money?
          </Text>
        </View>
        <View
          width={130}
          backgroundColor="gray.400"
          padding={20}
          marginRight={20}
          borderRadius={8}
          justifyContent="flex-start"
        >
          <Text fontWeight={600} paddingVertical={20} color="black">
            How to invest in carbon credits?
          </Text>
        </View>
      </ScrollView>
    </ScrollView>
  );
};

export default Account;
