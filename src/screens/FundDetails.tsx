import React, {useEffect, useState} from 'react';
import styled from '@emotion/native';
import {space, color, flexbox, typography, border} from 'styled-system';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import ArrowUpRightIcon from '../icons/arrow-up-right.svg';
import PortfolioIcon from '../icons/portfolio.svg';
import { HomeStackParamList } from './Home';
import { LineChart } from 'react-native-gifted-charts';
import { useTheme } from '@emotion/react';
import { Dimensions, TouchableOpacity } from 'react-native';
import InfoStatsItem from '../components/InfoStatsItem';
import Button from '../components/Button';
import ArrowDownRightIcon from '../icons/arrow-down-right.svg';

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
const Image = styled.Image`
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

const ArrowDownRight = styled(ArrowDownRightIcon)`
  ${space}
  ${color}
`;

const Portfolio = styled(PortfolioIcon)`
  ${space}
  ${color}
`;

interface FundDetailsScreenProps extends NativeStackScreenProps<HomeStackParamList, 'FundDetails'> {}

const FundDetails = ({navigation, route}: FundDetailsScreenProps) => {
  const theme = useTheme();
  const {name, code, data, variation, fundAssets} = route.params;
  const {height, width} = Dimensions.get('window');
  const [selectedPeriod, setSelectedPeriod] = useState('1d');
  const [selectedAsset, setSelectedAsset] = useState('Highlighted');

  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View alignItems="center">
          <Text fontSize={17} fontWeight={700}>{name}</Text>
          <Text fontSize={14} color="gray.700">{code}</Text>
        </View>
      )
    });
  }, []);

  return (
    <ScrollView flexGrow backgroundColor="white">
      <View
        marginVertical={20}
        paddingHorizontal={20}
        flexDirection="row"
        justifyContent="space-between"
      >
        <View>
          <Text fontSize={24} fontWeight={600} color="black">
            $18.23
          </Text>
          <View flexDirection="row" alignItems="center">
            {variation > 0 ? (
              <ArrowUpRight
                marginHorizontal={3}
                color="success"
              />
            ) : (
              <ArrowDownRight
                marginHorizontal={3}
                color="error"
              />
            )}
            <Text fontSize={16} color={variation > 0 ? 'success' : 'error'}>{variation}%</Text>
          </View>
        </View>
        <Text fontSize={24} fontWeight={600} color="black">
          2022
        </Text>
      </View>

      <View>
        <LineChart
          data={data}
          width={width}
          height={height / 5}
          hideAxesAndRules
          hideDataPoints
          adjustToWidth
          isAnimated
          disableScroll
          yAxisOffset={100}
          color={variation > 0 ? theme.colors.success : theme.colors.error}
          thickness={2}
          yAxisSide="right"
          hideOrigin
          initialSpacing={0}
        />
      </View>

      <ScrollView horizontal>
        {['1h', '1d', '1w', '1m', '1y', 'All'].map((item, index) => (
          <TouchableOpacity onPress={() => setSelectedPeriod(item)}>
            <View
              key={index}
              padding={10}
              marginHorizontal={12}
              backgroundColor={selectedPeriod === item ? 'primary.100': null}
              borderRadius={4}
            >
              <Text fontWeight={500} color={selectedPeriod === item ? 'primary.500': 'gray.700'} fontSize={16}>{item}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View marginHorizontal={20} marginVertical={30}>
        <Text fontWeight={600} fontSize={17}>Info & Stats</Text>

        <View flexDirection="row">
          <View marginRight={50}>
            <InfoStatsItem
              label="AUM"
              value="$1.2B"
              description="Assets Under Management"
            />
            <InfoStatsItem
              label="Vintage Range"
              value="2010 - 2022"
              description="Vintage Range"
            />
            <InfoStatsItem
              label="Price at Close"
              value="$18.23"
              description="Price at Close"
            />
          </View>
          <View>
            <InfoStatsItem
              label="Issued Date"
              value="18/04/2022"
              description="Time that fund was issued"
            />
            <InfoStatsItem
              label="TER"
              value="0.15%"
              description="Total Expense Ratio"
            />
            <InfoStatsItem
              label="Price at Open"
              value="$17.74"
              description="Price at Open"
            />
          </View>
        </View>
      </View>

      <View>
        <Text fontWeight={600} fontSize={17} marginHorizontal={20}>Fund Breakdown</Text>

        <ScrollView marginHorizontal={20} horizontal marginVertical={10}>
          {['Highlighted', 'Value', 'Vintage', 'Registry'].map((item, index) => (
            <TouchableOpacity onPress={() => setSelectedAsset(item)}>
              <View
                key={index}
                paddingVertical={10}
                marginRight={20}
                borderBottomColor={selectedAsset === item ? 'primary.500': 'white'}
                borderBottomWidth={3}
              >
                <Text fontWeight={500} color={selectedAsset === item ? 'black': 'gray.700'} fontSize={16}>{item}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <ScrollView horizontal paddingHorizontal={20} showsHorizontalScrollIndicator={false}>
          {fundAssets.map(({name, about, featureImage, logo}) => (
            <View marginRight={15} borderRadius={4} width={220}>
              <Image
                borderTopRightRadius={4}
                borderTopLeftRadius={4}
                source={{uri: featureImage}}
                height={106}
              />
              <View
                borderColor="gray.300"
                borderWidth={2}
                borderBottomRightRadius={4}
                borderBottomLeftRadius={4}
                padding={10}
              >
                <Image marginVertical={5} height={20} width={80} source={{ uri: logo}} />
                <Text marginVertical={5}>
                  {about}
                </Text>
                <Text borderBottomWidth={1} borderBottomColor="black">Read more</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>

      <View marginHorizontal={20} marginVertical={30}>
        <View flexDirection="row">
          <Portfolio color="black" width={20} height={20} marginRight={2} />
          <Text fontWeight={600} fontSize={17}>Your Portfolio</Text>
        </View>

        <View flexDirection="row" justifyContent="space-between" marginVertical={10}>
          <View>
            <Text fontSize={24} fontWeight={700}>18 credits</Text>
            <View flexDirection="row" alignItems="center">
              <ArrowUpRight color="success" marginHorizontal={2}/>
              <Text color="success">8.41%</Text>
            </View>
          </View>
          <View alignItems="flex-end">
            <Text fontSize={24} fontWeight={700}>$328.14</Text>
            <Text color="gray.600">Last purchase 28d ago</Text>
          </View>
        </View>
        <View flexDirection="row" marginVertical={10}>
          <View flex marginHorizontal={5}>
            <Button variant="secondary">
              Sell
            </Button>
          </View>
          <View flex marginHorizontal={5}>
            <Button variant="success">
              Retire credits
            </Button>
          </View>
        </View >
        <Text fontSize={12} color="gray.600">You’ve previously retired 28 credits of this asset</Text>
      </View>

      <View marginHorizontal={20} marginVertical={15} padding={10} backgroundColor="gray.200" borderRadius={4}>
        <Text color="gray.700">
          Please note that prices are for reference only and may vary at the time of excecuting a buy or sell order.  
          The information provided is not investment advice, and should not be used as a recommendation to buy or sell assets.
        </Text>
      </View>

      <View marginHorizontal={20} marginVertical={15}>
        <Button variant="primary">Buy</Button>
      </View>

    </ScrollView>
  );
};

export default FundDetails;
