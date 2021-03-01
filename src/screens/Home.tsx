import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'
import LottieView from 'lottie-react-native'
import logo from '../assets/images/fitness-loading-spinner.json'
import { Container } from '../components/Container'

const Button = styled.TouchableOpacity`
    background-color: #95afc0;
    width: 25%;
    height: 12%;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Logo = styled.View`
    height: 50%;
    width: 100%;
`

export const Home = () => (
    <Container>
        <Logo>
            <LottieView source={logo} autoPlay loop />
        </Logo>
        <Button>
            <Text> START </Text>
        </Button>
    </Container>
)
