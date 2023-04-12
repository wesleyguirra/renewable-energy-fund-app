import React from 'react';
import {LineChart} from 'react-native-gifted-charts';
import styled from '@emotion/native';
import {border, color, flexbox, space, typography} from 'styled-system';
import {useTheme} from '@emotion/react';
import ArrowUpRightIcon from '../icons/arrow-up-right.svg';
import ArrowDownRightIcon from '../icons/arrow-down-right.svg'

declare module '@emotion/react' {
  export interface Theme {
    colors: any;
  }
}

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

const ArrowUpRight = styled(ArrowUpRightIcon)`
  ${space}
  ${color}
`;

const ArrowDownRight = styled(ArrowDownRightIcon)`
  ${space}
  ${color}
`;

interface FundItemProps {
  name: string;
  data: any;
  price: number;
  variation: number;
  logo: string;
}

const FundItem = ({name, data, price, logo, variation}: FundItemProps) => {
  const theme = useTheme();
  return (
    <View
      borderWidth={1}
      width={150}
      marginRight={15}
      padding={12}
      borderRadius={4}
      borderColor="gray.400">
      <Image width={15} height={15} source={{uri: logo}} marginBottom={2} />
      <Text fontSize={14} fontWeight={600}>
        {name}
      </Text>
      <View width={50} height={90}>
        <LineChart
          data={data}
          width={100}
          height={70}
          hideAxesAndRules
          hideDataPoints
          disableScroll
          adjustToWidth
          curved
          isAnimated
          yAxisOffset={100}
          color={variation > 0 ? theme.colors.success : theme.colors.error}
          thickness={2}
          yAxisSide="right"
          hideOrigin
          initialSpacing={0}
        />
      </View>
      <View flexDirection="row" justifyContent="space-between">
        <Text fontSize={16} fontWeight={400}>{`$${price}`}</Text>
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

          <Text fontSize={16} color={variation > 0 ? 'success' : 'error'}>
            {variation}%
          </Text>
        </View>
      </View>
    </View>
  );
};

export default FundItem;
