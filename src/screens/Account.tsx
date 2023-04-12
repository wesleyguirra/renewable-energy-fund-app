import React, { useEffect } from "react";
import styled from '@emotion/native'
import { space, color, flexbox, typography, border } from 'styled-system'
import { useDispatch } from 'react-redux'
import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootStackParamList } from '../navigation'
import UserIcon from '../icons/user.svg'
import NotificationIcon from '../icons/notification.svg'
import ArrowUpRightIcon from '../icons/arrow-up-right.svg'
import CoinIcon from '../icons/coin.svg'
import { useTheme } from '@emotion/react'
import Button from "../components/Button";

const SafeAreaView = styled.SafeAreaView`
  ${color}
  ${space}
  ${flexbox}
`

const View = styled.View`
  ${color}
  ${space}
  ${flexbox}
  ${border}
`

const Text = styled.Text`
  ${space}
  ${color}
  ${typography}
  ${border}
`

const ScrollView = styled.ScrollView`
  ${color}
  ${space}
  ${flexbox}
`

const ArrowUpRight = styled(ArrowUpRightIcon)`
  ${space}
  ${color}
`

interface LoginScreenProps extends NativeStackScreenProps<RootStackParamList> {}

type StackParamList = {
  Account: undefined,
  FundDetails: undefined,
}

const Account = ({ navigation }: LoginScreenProps) => {
  const dispatch = useDispatch()
  const theme = useTheme()
  console.log(theme)

  useEffect(() => {
    navigation.setOptions({
      header: ({ options, route, navigation, ...headerProps }) => {
        return (
          <View borderBottomWidth={1} backgroundColor="white" borderBottomColor="gray.300" paddingHorizontal={20} paddingVertical={10}>
            <SafeAreaView flexDirection="row" justifyContent="space-between" alignItems="center">
              <View width={30} height={30} backgroundColor="gray.300" borderRadius={15} justifyContent="center" alignItems="center">
                <UserIcon />
              </View>
              <View>
                <Text fontWeight={700} fontSize={14}>Account: $1,457.23</Text>
              </View>
              <NotificationIcon />
            </SafeAreaView>
            <View flexDirection="row" marginVertical={16} alignItems="flex-end">
              <View>
                <Text fontSize={12} marginBottom={1}>Portfolio</Text>
                <View flexDirection="row" alignItems="flex-end">
                  <Text fontSize={24} fontWeight={700}>$1,245.23</Text>
                  <View flexDirection="row" alignItems="flex-end">
                    <ArrowUpRight width={10} height={10} margin={1} color="success" />
                    <Text color="success" fontSize={14}>31.82%</Text>
                  </View>
                </View>
              </View>
              <Button
                marginLeft="auto"
                variant="ghost"
                size="small"
                onPress={() => null}
                leftAccessory={() => <CoinIcon />}
              >
                Earn Rewards
              </Button>
            </View>
          </View>
        )
      },
    })
  }, [])

  const onSignupPress = () => {
    navigation.push('Signup')
  }

  return (
    <ScrollView flexGrow backgroundColor="white" paddingHorizontal={20}>
      <Text
        fontSize={18}
        fontWeight={600}
        paddingVertical={20}
        color="black"
      >
        Funds
      </Text>
    </ScrollView>
  )
}

export default Account
