import React, { useEffect } from "react";
import styled from '@emotion/native'
import { space, color, flexbox, typography, border, layout } from "styled-system";
import { useForm, Controller } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import Button from '../components/Button'
import Input from '../components/Input'
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation";
import Checkbox from "../components/Checkbox";

const SafeAreaView = styled.SafeAreaView`
  ${color}
  ${space}
  ${flexbox}
`

const View = styled.View`
  ${color}
  ${space}
  ${flexbox}
  ${layout}
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

interface SignupScreenProps extends NativeStackScreenProps<RootStackParamList> {}

const schema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  terms: yup.boolean().oneOf([true], 'You must accept the terms and conditions')
}).required();
type FormData = yup.InferType<typeof schema>

const SignupScreen = ({ navigation }: SignupScreenProps) => {
  const {control, handleSubmit, formState: { errors }} = useForm<FormData>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      terms: false
    },
    resolver: yupResolver(schema)
  })

  const onSubmit = (data: any) => {
    console.log(data)
  }

  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View flexDirection="row" marginLeft="auto" marginRight="auto">
          {/* The different color here is just to demonstrate that we can dynamically show the step indicator */}
          {[1,2,3].map((_, index) => (
            <View marginHorizontal={5} width={40} height={5} backgroundColor={index === 0 ? 'gray.400' : 'gray.300'} borderRadius={3}/>
          ))}
        </View>
      )
    })
  }, [])

  return (
    <View flexGrow backgroundColor="white" paddingHorizontal={20}>
      <Text
        fontSize={18}
        fontWeight={600}
        textAlign="center"
        paddingVertical={20}
        color="black"
      >
        Create your account
      </Text>
      <Controller
        name="firstName"
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            label="First Name"
            placeholder="Your first name"
            autoCorrect={false}
            autoComplete="name"
            textContentType="givenName"
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            error={errors.firstName?.message}
          />
        )}
      />
      <Controller
        name="lastName"
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            label="Last Name"
            placeholder="Your last name"
            autoCorrect={false}
            autoComplete="name"
            textContentType="givenName"
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            error={errors.lastName?.message}
          />
        )}
      />
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
      <View flexDirection="row" marginTop={2}>
        <Controller
          name="terms"
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <Checkbox
              onChange={onChange}
              value={value}
              error={errors.terms?.message}
            />
          )}
        />
        <Text marginLeft={2} marginRight={3} color="gray.600">
          <Text>I am over 18 years of age and I have read and agree to the</Text>
          <Text color="black"> Terms of Service</Text>
          <Text> and </Text>
          <Text color="black">Privacy policy</Text>
        </Text>
      </View>
      {errors.terms?.message && (
        <Text fontSize={12} marginTop={2} color="red">{errors.terms?.message}</Text>
      )}
      <Button marginTop={25} marginBottom={3} variant="primary" onPress={handleSubmit(onSubmit)}>
        Create an account
      </Button>
      <Text flex textAlign="center" fontSize={12} color="gray.600">
        <Text>Don't have an account? </Text>
        <TouchableOpacity borderBottomWidth={1} borderBottomColor="gray.600" marginBottom={-2.3}>
          <Text fontSize={12} color="gray.600">Sign up</Text>
        </TouchableOpacity>
        <Text> here</Text>
      </Text>
    </View>
  )
}

export default SignupScreen
