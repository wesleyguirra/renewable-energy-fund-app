import React, { useEffect } from "react";
import styled from '@emotion/native'
import { space, color, flexbox, typography, border } from 'styled-system'
import { useDispatch } from 'react-redux'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
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

interface LoginScreenProps extends NativeStackScreenProps<RootStackParamList> {}

const Portfolio = ({ navigation }: LoginScreenProps) => {
  const dispatch = useDispatch()

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => null,
      headerTitle: () => null
    })
  }, [])

  const onSignupPress = () => {
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
        Portfolio
      </Text>
    </View>
  )
}

export default Portfolio
