import { Message } from '@entities/message/ui'
import { useUserStore } from '@entities/user/model'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { collection, orderBy, query } from 'firebase/firestore'
import { fireStore } from '@shared/configs/firebase'
import styled from 'styled-components'

export const ChatMessages = () => {
    const user = useUserStore((state) => state.user)

    const [messages] = useCollectionData(
        query(collection(fireStore, 'messages'), orderBy('createdAt')),
    )

    return (
        <Wrapper>
            {messages?.map((item, i) => {
                const isUser = item.uid === user?.uid
                return (
                    <Block key={i} isUser={isUser}>
                        <Message
                            isUser={isUser}
                            displayName={item.displayName}
                            uid={item.uid}
                            photoURL={item.photoURL}
                            text={item.text}
                            createdAt={item.createdAt}
                        />
                    </Block>
                )
            })}
        </Wrapper>
    )
}
const Block = styled.div<{ isUser: boolean }>`
    width: 100%;
    display: flex;
    flex-direction: ${(prop) => (prop.isUser ? 'row-reverse' : 'row')};
    justify-content: flex-start;
`
const Wrapper = styled.div`
    overflow-y: auto;
    width: 100%;
    padding: 10px;
    height: calc(100% - 94px);
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    gap: 10px;
`
