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
            <Text user={props.isUser}>{props.text}</Text>
            {props.isUser && avatar}
        </MessageBlock>
    )
}
const MessageBlock = styled.div`
    display: flex;
    width: fit-content;
    align-items: flex-end;
    gap: 10px;
    margin: 8px 0;
`
const Text = styled.div<{ user: boolean }>`
    max-width: 60%;
    height: fit-content;
    padding: 15px 8px;
    font-size: 17px;
    word-break: break-all;
    --message-shadow: 0 0 7px 4px var(${COLORS.neon.lightGreen}),
        0 0 7px 4px var(${COLORS.neon.lightGreen}) inset;
    --message-shadow-text: 0 0 7px var(${COLORS.neon.green});
    height: fit-content;
    background-color: transparent;
    color: #d8d8d8;
    text-shadow: var(--message-shadow-text);
    border: ${(prop) =>
        prop.user
            ? `2px solid var(${COLORS.neon.green})`
            : '2px solid #5e73dc'};
    border-radius: 5px;
`
