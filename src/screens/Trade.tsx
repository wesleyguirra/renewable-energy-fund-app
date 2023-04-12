import React, {useEffect} from 'react';
import styled from '@emotion/native';
import {space, color, flexbox, typography, border} from 'styled-system';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation';

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

interface LoginScreenProps extends NativeStackScreenProps<RootStackParamList> {}

const Trade = ({navigation}: LoginScreenProps) => {
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
        Trade
      </Text>
    </View>
  );
};

export default Trade;
