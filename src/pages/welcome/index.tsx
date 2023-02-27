import { Layout } from '@pages/constants/page-layout'
import { AiFillWechat } from 'react-icons/ai'
import React from 'react'
import styled from 'styled-components'
import { COLORS } from '@shared/constants/colors'

export const Welcome = () => {
    return (
        <Layout>
            <Title>neon-chatik</Title>
            <AiFillWechat fontSize="85px" />
        </Layout>
    )
}

const Title = styled.span`
    font-size: 58px;
    font-weight: 800;
    letter-spacing: 6%;
    text-shadow: 0 0 12px var(${COLORS.neon.lightGreen});
    color: rgb(188, 220, 210);
`
