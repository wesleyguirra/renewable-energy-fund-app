import React  from 'react'
import styled from '@emotion/native'
import { border, color, space, typography, variant, SpaceProps, BorderProps, ColorProps, VariantArgs } from "styled-system";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

const variants = {
  primary: {
    backgroundColor: 'primary',
    color: 'white',
  },
  secondary: {
    backgroundColor: 'white',
    color: 'primary',
  },
  success: {
    backgroundColor: 'success',
    color: 'white',
  },
}

const RootContainer = styled.View`
  ${space}
`

const ButtonContainer = styled.View`
  ${variant({ variants })}
  ${space}
  ${color}
  ${border}
`

const Text = styled.Text`
  ${color}
  ${typography}
`

interface ButtonProps extends TouchableOpacityProps, SpaceProps, ColorProps, BorderProps {
  variant?: 'primary' | 'secondary' | 'success'
}

const Button = ({children, onPress, variant, ...props}: ButtonProps) => {
  return (
    <RootContainer {...props}>
      <TouchableOpacity
        onPress={onPress}
      >
        <ButtonContainer
          borderRadius={4}
          paddingVertical={14}
          variant={variant}
        >
          <Text
            textAlign="center"
            fontSize={16}
            fontWeight={500}
            color={variants[variant!].color}
          >
            {children}
          </Text>
        </ButtonContainer>
      </TouchableOpacity>
    </RootContainer>
  )
}

export default Button
