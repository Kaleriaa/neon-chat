import React from 'react'
import { COLORS } from '@constants/colors'
import styled from 'styled-components'

export type ButtonProps = {
    label: string
    onClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
    return <Neon onClick={onClick}>{label}</Neon>
}
const Neon = styled.button`
    cursor: pointer;
    width: fit-content;
    padding: 5px 8px;
    font-size: 14px;
    height: fit-content;
    background-color: transparent;
    color: var(${COLORS.neon.primary});
    text-shadow: var(${COLORS.neon.text});
    box-shadow: var(${COLORS.neon.shadow});
    border: 3px solid var(${COLORS.neon.primary});
    border-radius: 5px;
    &:active {
        box-shadow: var(${COLORS.neon.shadowBright});
        color: var(${COLORS.neon.shadowBright});
        border-color: var(${COLORS.neon.shadowBright});
    }
`
