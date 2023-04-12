import React from 'react';
import styled from '@emotion/native';
import { border, color, flexbox, space, typography } from 'styled-system';
import { TouchableOpacity } from "react-native";
import InfoIcon from '../icons/info.svg';

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

const Info = styled(InfoIcon)`
  ${space}
  ${color}
`

interface InfoStatsItemProps {
  label: string;
  value: string;
  description: string;
}

const InfoStatsItem = ({label, value, description}: InfoStatsItemProps) => {
  return (
    <View marginVertical={10}>
      <View flexDirection="row">
        <Text fontSize={14} color="gray.600" marginRight={1}>{label}</Text>
        <TouchableOpacity>
          <Info width={14} height={14} color="gray.600" />
        </TouchableOpacity>
      </View>
      <Text color="black" marginTop={1} fontSize={15}>{value}</Text>
    </View>
  );
};

export default InfoStatsItem;
