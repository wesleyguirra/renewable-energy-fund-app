import React from "react";
import styled from '@emotion/native'
import { space, color, flexbox, typography, border } from 'styled-system'
import { useForm, Controller } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useDispatch } from 'react-redux'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import Button from '../components/Button'
import Input from '../components/Input'
import { RootStackParamList } from '../navigation'


const View = styled.View`
  ${color}
  ${space}
  ${flexbox}
`

const Text = styled.Text`
  ${space}
  ${color}
  ${typography}
  ${border}
`

const TouchableOpacity = styled.TouchableOpacity`
  ${space}
  ${border}
`

interface LoginScreenProps extends NativeStackScreenProps<RootStackParamList> {}

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
}).required();
type FormData = yup.InferType<typeof schema>

const LoginScreen = ({ navigation }: LoginScreenProps) => {
  const dispatch = useDispatch()
  const {control, handleSubmit, formState: { errors }} = useForm<FormData>({
    defaultValues: {
      email: '',
      password: ''
    },
    resolver: yupResolver(schema)
  })

  const onSubmit = (data: any) => {
    console.log(data)
  }

  const onSignupPress = () => {
    // dispatch({type: 'navigation/goBack', payload: {screen: 'Signup'}})
    navigation.push('Signup')
  }

  return (
    <View flexGrow backgroundColor="white" paddingHorizontal={20}>
      <Text
        fontSize={18}
        fontWeight={600}
        textAlign="center"
        paddingVertical={20}
        color="black"
      >
        Login
      </Text>
      <Controller
        name="email"
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            label="E-mail"
            placeholder="Your e-mail"
            autoCorrect={false}
            autoCapitalize="none"
            autoComplete="email"
            keyboardType="email-address"
            textContentType="emailAddress"
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            error={errors.email?.message}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            label="Password"
            placeholder="Minimum 8 characters"
            textContentType="password"
            secureTextEntry
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            error={errors.password?.message}
          />
        )}
      />
      <Button marginTop={25} marginBottom={3} variant="primary" onPress={handleSubmit(onSubmit)}>
        Login
      </Button>
      <Text flex textAlign="center" fontSize={12} color="gray.600">
        <Text>Don't have an account? </Text>
        <TouchableOpacity borderBottomWidth={1} borderBottomColor="gray.600" marginBottom={-2.3} onPress={onSignupPress}>
          <Text fontSize={12} color="gray.600">Sign up</Text>
        </TouchableOpacity>
        <Text> here</Text>
      </Text>
    </View>
  )
}

export default LoginScreen
