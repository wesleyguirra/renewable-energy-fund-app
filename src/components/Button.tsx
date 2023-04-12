import React from 'react';
import styled from '@emotion/native';
import {
  border,
  color,
  space,
  typography,
  variant,
  SpaceProps,
  BorderProps,
  ColorProps,
  VariantArgs,
  flexbox,
} from 'styled-system';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

const variants = {
  primary: {
    backgroundColor: 'primary.500',
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
  ghost: {
    backgroundColor: 'primary.100',
    color: 'primary.500',
  },
};

const RootContainer = styled.View`
  ${space}
  ${flexbox}
`;

const ButtonContainer = styled.View`
  ${variant({variants})}
  ${space}
  ${color}
  ${border}
`;

const Text = styled.Text`
  ${color}
  ${typography}
`;

interface ButtonProps
  extends TouchableOpacityProps,
    SpaceProps,
    ColorProps,
    BorderProps {
  variant?: 'primary' | 'secondary' | 'success' | 'ghost';
  leftAccessory?: () => React.ReactNode;
  size?: 'small' | 'medium' | 'large';
}

const Button = ({
  children,
  onPress,
  variant,
  leftAccessory,
  size = 'medium',
  ...props
}: ButtonProps) => {
  const sizes = {
    small: {
      fontSize: 12,
      paddingVertical: 8,
      paddingHorizontal: 10,
    },
    medium: {
      fontSize: 16,
      paddingVertical: 14,
      paddingHorizontal: 10,
    },
    large: {
      fontSize: 20,
      paddingVertical: 20,
      paddingHorizontal: 10,
    },
  };
  return (
    <RootContainer {...props}>
      <TouchableOpacity onPress={onPress}>
        <ButtonContainer
          borderRadius={4}
          paddingVertical={sizes[size!].paddingVertical}
          paddingHorizontal={sizes[size!].paddingHorizontal}
          variant={variant}
          flexDirection="row"
          alignItems="center">
          {leftAccessory && leftAccessory()}
          <Text
            textAlign="center"
            fontSize={sizes[size!].fontSize}
            fontWeight={500}
            color={variants[variant!].color}
            marginLeft={leftAccessory ? 5 : 0}>
            {children}
          </Text>
        </ButtonContainer>
      </TouchableOpacity>
    </RootContainer>
  );
};

export default Button;
