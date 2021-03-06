import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import styled from 'styled-components/native'
import { ParamListBase } from '@react-navigation/native'
import { Container } from '../components/Container'
import { ROUTE_NAMES } from '../assets/constants/routes'
import { Button } from '../components/common/Button'
import { Timer } from '../components/Timer'
import { TextStyled } from '../components/common/TextStyled'

const ButtonBlock = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 10%;
`

export const Chrono = ({
    navigation,
}: {
    navigation: StackNavigationProp<ParamListBase, 'Home'>
}) => {
    const [turn, setTurn] = useState(0)

    return (
        <Container>
            <Timer />
            <View>
                <TextStyled>{turn}</TextStyled>
            </View>
            <ButtonBlock>
                <Button onPress={() => setTurn(turn + 1)}>
                    <Text>TURN</Text>
                </Button>
                <Button
                    onPress={() => {
                        navigation.navigate(ROUTE_NAMES.HOME)
                    }}
                >
                    <Text>STOP</Text>
                </Button>
            </ButtonBlock>
        </Container>
    )
}
