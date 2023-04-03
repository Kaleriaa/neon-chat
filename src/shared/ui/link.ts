import { COLORS } from '@shared/constants/colors'
import styled from 'styled-components'

export const LinkMainPage = styled.button`
    cursor: pointer;
    width: fit-content;
    height: fit-content;
    background-color: transparent;
    padding: 16px;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 15px;
    transition: all 0.4s ease-out;
    &:hover {
        background-color: var(${COLORS.secondaryDark});
    }
`
