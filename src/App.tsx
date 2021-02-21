import React, { useState } from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'

const Container = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: #fea47f;
`
const TextStyled = styled.Text`
    font-size: 80px;
    color: blue;
`
const ButtonView = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 12px;
    width: 100%;
`
const ButtonStyled = styled.TouchableOpacity`
    background-color: #74b9ff;
    width: 28%;
    border-radius: 12px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`
export default function App() {
    const [counter, setCounter] = useState(0)

    return (
        <Container>
            <TextStyled>{counter}</TextStyled>
            <ButtonView>
                {counter > 0 && (
                    <ButtonStyled onPress={() => setCounter(counter - 1)}>
                        <Text>-</Text>
                    </ButtonStyled>
                )}
                {counter > 0 && (
                    <ButtonStyled onPress={() => setCounter(0)}>
                        <Text>Reset</Text>
                    </ButtonStyled>
                )}
                <ButtonStyled onPress={() => setCounter(counter + 1)}>
                    <Text>+</Text>
                </ButtonStyled>
            </ButtonView>
        </Container>
    )
}
