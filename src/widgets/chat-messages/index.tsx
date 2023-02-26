import { useMessagesStore } from '@entities/message/model'
import { Message } from '@entities/message/ui'
import { useUserStore } from '@entities/user/model'

export const ChatMessages = () => {
    const user = useUserStore((state) => state.user)
    const messages = useMessagesStore((state) => state.messages)

    return (
        <>
            {messages.map((item) => (
                <Message {...item} />
            ))}
        </>
    )
}
