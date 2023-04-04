import React from 'react'
import { COLORS } from '@constants/colors'
import styled from 'styled-components'

type TextAreaProps = {
    value?: string
    onChange?: (value: string) => void
}

export const TextArea: React.FC<TextAreaProps> = (props) => {
    return (
        <DarkTextArea
            value={props.value}
            onChange={(e) => props.onChange?.(e.target.value)}
            rows={2}
            placeholder="Введите сообщение"
        />
    )
}

const DarkTextArea = styled.textarea`
    color: #fff;
    width: 80%;
    resize: none;
    background: transparent;
    border: 2px solid var(${COLORS.lightDark});
    border-radius: 5px;
    outline: none;
    padding: 12px 20px;
    @media (max-width: 650px) {
        width: 75%;
    }
    @media (max-width: 410px) {
        width: 70%;
    }
`
