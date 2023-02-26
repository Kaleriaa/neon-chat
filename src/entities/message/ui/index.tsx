import { COLORS } from '@shared/constants/colors'
import styled from 'styled-components'
import { Message as MessageType } from '../types'

export const Message: React.FC<MessageType> = (props) => {
    const user = true
    const avatar = (
        <img
            src={props.photoURL ?? ''}
            width={35}
            style={{ borderRadius: '50%' }}
        />
    )
    return (
        <Block user={user}>
            {!user && avatar}
            <Name>{props.displayName}</Name>
            <Text>{props.text}</Text>
            {user && avatar}
        </Block>
    )
}
const Block = styled.div<{ user: boolean }>`
    position: relative;
    display: flex;
    width: fit-content;
    justify-content: ${(prop) => (prop.user ? 'flex-end' : 'flex-start')};
    align-items: flex-end;
    gap: 10px;
    margin: 8px 0;
`
const Text = styled.div`
    max-width: 60%;
    min-width: 100px;
    height: fit-content;
    padding: 15px 8px;
    font-size: 17px;
    --message-shadow: 0 0 7px 4px var(${COLORS.neon.lightGreen}),
        0 0 7px 4px var(${COLORS.neon.lightGreen}) inset;
    --message-shadow-text: 0 0 7px var(${COLORS.neon.green});
    height: fit-content;
    background-color: transparent;
    color: #d8d8d8;
    text-shadow: var(--message-shadow-text);
    border: 2px solid var(${COLORS.neon.green});
    border-radius: 5px;
`
const Name = styled.div`
    width: fit-content;
    height: fit-content;
    background-color: var(${COLORS.secondaryDark});
    text-shadow: var(--message-shadow-text);
    color: var(${COLORS.neon.green});
    position: absolute;
    top: -12px;
    right: 12%;
`
