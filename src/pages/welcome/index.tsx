import { Layout } from '@pages/constants/page-layout'
import { AiFillWechat } from 'react-icons/ai'
import React from 'react'
import styled from 'styled-components'

export const Welcome = () => {
    return (
        <Layout>
            <Title>neon-chat</Title>
            <AiFillWechat fontSize="85px" />
        </Layout>
    )
}

const Title = styled.span`
    font-size: 58px;
    font-weight: 800;
    letter-spacing: 6%;
`
