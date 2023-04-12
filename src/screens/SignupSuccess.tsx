import React from 'react';
import styled from '@emotion/native';
import {space, color, flexbox, typography, border} from 'styled-system';
import {useDispatch} from 'react-redux';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import RevenueIllustration from '../illustrations/revenue.svg';
import {RootStackParamList} from '../navigation';
import Button from '../components/Button';

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

const StyledRevenueIllustration = styled(RevenueIllustration)`
  ${space}
  ${flexbox}
  ${color}
`;

interface LoginScreenProps
  extends NativeStackScreenProps<RootStackParamList, 'SignupSuccess'> {}

const SignupSuccess = ({route}: LoginScreenProps) => {
  const dispatch = useDispatch();
  const {firstName} = route.params?.user || {};

  const goBackToLogin = () => {
    dispatch({
      type: 'navigation/navigate',
      payload: {screen: 'Login', params: {}},
    });
  };

  return (
    <View
      flexGrow
      backgroundColor="white"
      justifyContent="flex-start"
      paddingHorizontal={20}>
      <Text
        fontSize={18}
        fontWeight={600}
        textAlign="center"
        paddingVertical={20}
        color="black">
        {firstName}, You're in! Welcome to Renewable, where managing your
        finances is easy.
      </Text>
      <StyledRevenueIllustration height={300} />
      <Button variant="primary" onPress={goBackToLogin}>
        Go back to login
      </Button>
    </View>
  );
};

export default SignupSuccess;
