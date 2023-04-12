import React, {useEffect} from 'react';
import styled from '@emotion/native';
import {space, color, flexbox, typography, border} from 'styled-system';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation';
import UserIcon from '../icons/user.svg';
import NotificationIcon from '../icons/notification.svg';
import ArrowUpRightIcon from '../icons/arrow-up-right.svg';
import CoinIcon from '../icons/coin.svg';
import funds from '../mockData.json';
import Button from '../components/Button';
import FundItem from '../components/FundItem';
import {FundData} from '../types';
import BusinessStatisticsIllustration from '../illustrations/business-statistics.svg';

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

interface FundDetailsProps extends NativeStackScreenProps<RootStackParamList> {}

const FundDetails = ({navigation}: FundDetailsProps) => {
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
        {fundList.map(fund => (
          <FundItem
            name={fund.name}
            price={fund.price}
            variation={fund.variation}
            data={fund.data}
            logo={fund.logo}
          />
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
    </ScrollView>
  );
};

export default FundDetails;
