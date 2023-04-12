import React, { useCallback, useMemo, useState } from 'react'
import { TextInputProps } from 'react-native'
import styled from '@emotion/native'
import { space, color, typography, border, flexbox, layout } from 'styled-system'
import EyeIcon from '../icons/eye.svg'
import EyeIconOff from '../icons/eye-off.svg'

const Text = styled.Text`
  ${space}
  ${color}
  ${typography}
`

const View = styled.View`
  ${space}
  ${color}
  ${border}
  ${flexbox}
`

const TouchableOpacity = styled.TouchableOpacity`
  ${space}
`

const TextInput = styled.TextInput`
  ${space}
  ${color}
  ${typography}
  ${layout}
`

interface InputProps extends TextInputProps{
  label: string;
  error?: string;
}

const Input = ({label, secureTextEntry, textContentType, ...props} : InputProps) => {
  const [isVisible, setIsVisible] = useState(!secureTextEntry)

  const isPassword = useMemo(() => {
    return textContentType === 'password'
  }, [textContentType])

  const toggleVisibility = useCallback(() => {
    setIsVisible(!isVisible)
  }, [isVisible])

  return (
    <View marginVertical={10}>
      <Text fontSize={12} marginBottom={2} color="gray.600">{label}</Text>
      <View
        borderRadius={4}
        paddingHorizontal={8}
        paddingVertical={16}
        backgroundColor="gray.200"
        borderColor={props.error ? 'red' : 'gray.200'}
        borderWidth={1}
        flexDirection="row"
      >
        <TextInput
          selectionColor="gray"
          fontSize={14}
          secureTextEntry={isPassword}
          textContentType={textContentType}
          width="100%"
          {...props}
        />
        {isPassword && (
          <TouchableOpacity marginLeft="auto" onPress={toggleVisibility}>
            {isVisible
              ? <EyeIcon color="gray" width={18} height={18} />
              : <EyeIconOff color="gray" width={18} height={18} />
            }
          </TouchableOpacity>
        )}
      </View>
      {props.error && (
        <Text fontSize={12} marginTop={2} color="red">{props.error}</Text>
      )}
    </View>
  );
};

export default Input;
