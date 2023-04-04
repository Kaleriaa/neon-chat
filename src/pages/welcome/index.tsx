import React from 'react'
import { Layout } from '@pages/constants/page-layout'
import { AiFillWechat } from 'react-icons/ai'
import styled from 'styled-components'
import { COLORS } from '@shared/constants/colors'
import { Link } from 'react-router-dom'
import { LinkMainPage } from '@shared/ui/link'
import { useUserStore } from '@entities/user/model'

export const Welcome = () => {
    const user = useUserStore((state) => state.user)

    return (
        <Column>
            <Title>
                neon-chatik <AiFillWechat fontSize="85px" />
            </Title>
            <Link to={user ? '/neon-chat/chat' : '/neon-chat/login'}>
                <LinkMainPage>{user ? 'В чатик >' : 'Войти >'}</LinkMainPage>
            </Link>
        </Column>
    )
}

const Column = styled(Layout)`
    flex-direction: column;
`

const Title = styled.span`
    font-size: 58px;
    font-weight: 800;
    letter-spacing: 6%;
    text-shadow: 0 0 12px var(${COLORS.neon.lightGreen});
    color: rgb(188, 220, 210);
    @media (max-width: 490px) {
        font-size: 48px;
        text-align: center;
    }
`
