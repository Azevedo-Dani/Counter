import React, { useEffect, useState } from 'react'
import styled from 'styled-components/native'
import { AnimatedCircularProgress } from 'react-native-circular-progress'
import { TextStyled } from './common/TextStyled'

const Time = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const Timer = () => {
    const [timer, setTimer] = useState(0)

    useEffect(() => {
        const timerInterval = setInterval((): void => {
            setTimer((prevTime) => {
                if (prevTime === 3599) {
                    clearInterval(timerInterval)
                }
                return prevTime + 1
            })
        }, 1000)
        return () => {
            // clean interval in unmount the component
            clearInterval(timerInterval)
        }
    }, [])

    const getSeconds = (time: number): number => Math.floor((time % 3600) % 60)
    const getMinutes = (time: number): number => Math.floor((time % 3600) / 60)

    const convertTimeToString = (time: number): string | number => (time < 10 ? `0${time}` : time)

    const convertSecToPercent = (time: number): number => (getSeconds(time) / 60) * 100

    return (
        <AnimatedCircularProgress
            size={300}
            width={10}
            fill={convertSecToPercent(timer)}
            tintColor="#DAE0F9"
            backgroundColor="#3d5875"
            rotation={0}
        >
            {() => (
                <Time>
                    <TextStyled>{convertTimeToString(getMinutes(timer))}</TextStyled>
                    <TextStyled>:</TextStyled>
                    <TextStyled>{convertTimeToString(getSeconds(timer))}</TextStyled>
                </Time>
            )}
        </AnimatedCircularProgress>
    )
}
