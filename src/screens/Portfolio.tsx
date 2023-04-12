import React, {useEffect} from 'react';
import styled from '@emotion/native';
import {space, color, flexbox, typography, border} from 'styled-system';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackParamList} from './Home';

const View = styled.View`
  ${color}
  ${space}
  ${flexbox}
`;

const Text = styled.Text`
  ${space}
  ${color}
  ${typography}
  ${border}
`;

interface PortfolioScreenProps
  extends NativeStackScreenProps<HomeStackParamList> {}

const Portfolio = ({navigation}: PortfolioScreenProps) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => null,
      headerTitle: () => null,
    });
  }, [navigation]);

  return (
    <View flexGrow backgroundColor="white" paddingHorizontal={20}>
      <Text
        fontSize={18}
        fontWeight={600}
        textAlign="center"
        paddingVertical={20}
        color="black">
        Portfolio
      </Text>
    </View>
  );
};

export default Portfolio;
