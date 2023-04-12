import React from 'react'
import styled from '@emotion/native'
import { border, color, flexbox, layout, space } from 'styled-system'
import CheckIcon from '../icons/check.svg'
import { TouchableWithoutFeedback } from "react-native";

const View = styled.View`
  ${space}
  ${color}
  ${border}
  ${flexbox}
  ${layout}
`

interface CheckboxProps {
  value?: boolean;
  onChange: (value: boolean) => void;
  error?: string;
}

const Checkbox = ({ value, onChange, error, ...props }: CheckboxProps) => {
  return (
    <TouchableWithoutFeedback onPress={() => onChange(!value)}>
      <View
        borderWidth={1}
        width={18}
        height={18}
        borderRadius={2}
        borderColor={error ? 'red' : 'gray.600'}
        backgroundColor={value ? 'gray.600' : 'white'}
        justifyContent="center"
        alignItems="center"
        {...props}
      >
        {value ? <CheckIcon width={14} height={14} color="white" /> : null}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Checkbox;
