import React from 'react'
import Input from "../components/Input";
import styled from "@emotion/native";
import { space, color, flexbox, typography } from "styled-system";
import Button from "../components/Button";

const LoginContainer = styled.View`
  ${color}
  ${space}
  ${flexbox}
`

const Text = styled.Text`
  ${space}
  ${color}
  ${typography}
`

interface LoginScreenProps {}

const LoginScreen = (props: LoginScreenProps) => {
  return (
    <LoginContainer flexGrow backgroundColor="white" paddingHorizontal={20}>
      <Text
        fontSize={18}
        fontWeight={600}
        textAlign="center"
        paddingVertical={20}
        color="black"
      >
        Login
      </Text>
      <Input
        label="E-mail"
        placeholder="Your e-mail"
        autoCorrect={false}
        autoCapitalize="none"
        autoComplete="email"
      />
      <Input
        label="Password"
        placeholder="Minimum 8 characters"
        textContentType="password"
        secureTextEntry
      />
      <Button marginTop={25} marginBottom={3} variant="primary" onPress={() => {}}>
        Login
      </Button>
      <Text textAlign="center" fontSize={12} color="gray.600">Don't have an account? Sign up here</Text>
    </LoginContainer>
  )
}

export default LoginScreen
