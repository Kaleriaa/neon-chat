import { COLORS } from '@shared/constants/colors'
import React from 'react'
import styled from 'styled-components'
import { FcGoogle } from 'react-icons/fc'
import { useLogin } from '@features/login/utils'

export const LoginBlock = () => {
    const login = useLogin()
    return (
        <Block>
            <Label onClick={login}>Войти с помощью Google</Label>
            <FcGoogle fontSize="28px" />
        </Block>
    )
}

const Block = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 14px;
    width: 350px;
    margin: 0 auto;
    height: 150px;
    border-radius: 5px;
    background-color: var(${COLORS.lightDark});
`
const Label = styled.button`
    font-size: 18px;
    cursor: pointer;
    background-color: transparent;
    color: #fff;
    border-radius: 5px;
    width: fit-content;
    height: fit-content;
    padding: 6px 10px;
    border: 1px solid #fff;
    transition: all 0.3s ease-in;
    &:hover {
        background-color: var(${COLORS.secondaryDark});
    }
`
