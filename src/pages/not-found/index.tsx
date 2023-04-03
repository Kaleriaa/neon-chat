import { Layout } from '@pages/constants/page-layout'
import { COLORS } from '@shared/constants/colors'
import { LinkMainPage } from '@shared/ui/link'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const NotFound = () => {
    return (
        <LayoutColumn>
            <Block>Страница не найдена</Block>
            <Link to="/neon-chat">
                <LinkMainPage>На главную &gt;</LinkMainPage>
            </Link>
        </LayoutColumn>
    )
}

const LayoutColumn = styled(Layout)`
    flex-direction: column;
    gap: 20px;
`
const Block = styled.div`
    width: fit-content;
    height: fit-content;
    padding: 15px;
    font-size: 18px;
    border-radius: 5px;
    border: 1px solid var(${COLORS.neon.green});
    --not-found-shadow: 0 0 7px 4px var(${COLORS.neon.lightGreen}),
        0 0 7px 4px var(${COLORS.neon.lightGreen}) inset;
    --not-found-shadow-text: 0 0 7px var(${COLORS.neon.green});
    box-shadow: var(--not-found-shadow);
    text-shadow: var(--not-found-shadow-text);
`
