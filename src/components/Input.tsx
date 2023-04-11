import React from 'react'
import styled from '@emotion/native'
import { space, color, typography, border } from 'styled-system'
import { TextInputProps } from 'react-native'

const InputContainer = styled.View`
  ${space}
`

const Label = styled.Text`
  ${space}
  ${color}
  ${typography}
`

const TextInputContainer = styled.View`
  ${space}
  ${color}
  ${border}
`

const TextInput = styled.TextInput`
  ${space}
  ${color}
  ${typography}
`

interface InputProps extends TextInputProps{
  label: string;
}

const Input = ({label, ...props} : InputProps) => {
  return (
    <InputContainer marginVertical={10}>
      <Label fontSize={12} marginBottom={2} color="gray.600">{label}</Label>
      <TextInputContainer borderRadius={4} paddingHorizontal={8} paddingVertical={16} backgroundColor="gray.200">
        <TextInput
          fontSize={14}
          {...props}
        />
      </TextInputContainer>
    </InputContainer>
  );
};

export default Input;
