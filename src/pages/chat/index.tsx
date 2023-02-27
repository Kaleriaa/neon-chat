import { useUserStore } from '@entities/user/model'
import { sendMessage } from '@features/send-messages'
import { COLORS } from '@shared/constants/colors'
import { Button, TextArea } from '@shared/ui'
import { ChatMessages } from '@widgets/chat-messages'
import React from 'react'
import { serverTimestamp } from 'firebase/firestore'
import styled from 'styled-components'

export const Chat = () => {
    const [value, setValue] = React.useState<string>('')

    const user = useUserStore((state) => state.user)

    const handleTextChange = (value: string) => {
        setValue(value)
    }

    const handleSendMessage = async () => {
        if (user && value) {
            const itemToAdd = {
                uid: user.uid,
                displayName: user.displayName,
                photoURL: user.photoURL,
                text: value,
                createdAt: serverTimestamp(),
            }
            await sendMessage(itemToAdd)
            setValue('')
        }
    }

    return (
        <ChatPage>
            <ChatMessages />
            <Wrapper>
                <TextArea value={value} onChange={handleTextChange} />
                <Button label="Отправить" onClick={handleSendMessage} />
            </Wrapper>
        </ChatPage>
    )
}

const ChatPage = styled.div`
    width: 610px;
    height: calc(100vh - 180px);
    background-color: var(${COLORS.secondaryDark});
    margin: 0 auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    border-radius: 5px;
`
const Wrapper = styled.div`
    width: 100%;
    margin-top: 35px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
