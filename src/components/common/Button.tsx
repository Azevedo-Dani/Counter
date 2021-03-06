import styled from 'styled-components/native'
import { COLORS } from '../../assets/constants/style'

export const Button = styled.TouchableOpacity`
    background-color: ${COLORS.PrimaryColor};
    width: 125px;
    height: 50px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`
