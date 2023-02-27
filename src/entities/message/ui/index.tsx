import { COLORS } from '@shared/constants/colors'
import styled from 'styled-components'
import { Message as MessageType } from '../types'

export const Message: React.FC<MessageType & { isUser: boolean }> = (props) => {
    const avatar = (
        <img
            src={props.photoURL ?? ''}
            width={35}
            style={{ borderRadius: '50%' }}
        />
    )
    return (
        <MessageBlock>
            {!props.isUser && avatar}
            <Text user={props.isUser}>
                <span>{props.displayName}</span>
                <br />
                {props.text}
            </Text>
            {props.isUser && avatar}
        </MessageBlock>
    )
}
const MessageBlock = styled.div`
    display: flex;
    width: fit-content;
    align-items: flex-end;
    gap: 10px;
`
const Text = styled.div<{ user: boolean }>`
    max-width: 350px;
    width: fit-content;
    height: fit-content;
    padding: 15px 8px;
    font-size: 17px;
    word-break: break-all;
    background-color: transparent;
    color: #d8d8d8;
    text-shadow: 0 0 7px var(${COLORS.neon.green});
    border: 2px solid
        ${({ user }) => (user ? `var(${COLORS.neon.green})` : '#5e73dc')};
    border-radius: 5px;
    span {
        font-weight: 600;
        font-size: 14px;
        text-shadow: none;
    }
`
