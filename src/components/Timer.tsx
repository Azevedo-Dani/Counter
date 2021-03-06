import React, { useEffect, useState } from 'react'
import styled from 'styled-components/native'
import { TextStyled } from './common/TextStyled'
import { COLORS } from '../assets/constants/style'

const Time = styled.View`
    width: 240px;
    height: 240px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: ${COLORS.PrimaryColor};
    border-radius: 100px;
`

export const Timer = () => {
    const [timer, setTimer] = useState(0)

    useEffect(() => {
        const timerInterval = setInterval((): void => {
            setTimer((prevTime) => prevTime + 1)
        }, 1000)
        return () => {
            // clean interval in unmount the component
            clearInterval(timerInterval)
        }
    }, [])

    const convertTimeToString = (time: number): string | number => (time < 10 ? `0${time}` : time)

    return (
        <Time>
            <TextStyled>{convertTimeToString(Math.floor((timer % 3600) / 60))}</TextStyled>
            <TextStyled>:</TextStyled>
            <TextStyled>{convertTimeToString(Math.floor((timer % 3600) % 60))}</TextStyled>
        </Time>
    )
}
