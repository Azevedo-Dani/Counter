import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'
import LottieView from 'lottie-react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { ParamListBase } from '@react-navigation/native'
import logo from '../assets/images/fitness-loading-spinner.json'
import { Container } from '../components/Container'
import { ROUTE_NAMES } from '../assets/constants/routes'
import { Button } from '../components/common/Button'

const Logo = styled.View`
    height: 50%;
    width: 100%;
`

export const Home = ({
    navigation,
}: {
    navigation: StackNavigationProp<ParamListBase, 'Home'>
}) => (
    <Container>
        <Logo>
            <LottieView source={logo} autoPlay loop />
        </Logo>
        <Button
            onPress={() => {
                navigation.navigate(ROUTE_NAMES.CHRONO)
            }}
        >
            <Text> START </Text>
        </Button>
    </Container>
)
