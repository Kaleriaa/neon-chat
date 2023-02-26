import { FieldValue } from 'firebase/firestore'

export type Message = {
    uid: string
    photoURL: string | null
    displayName: string | null
    text: string
    createdAt: Date
}
export type MessagesState = {
    messages: Message[]
    addMessage: (message: Message) => void
    reloadMessages: (messages: Message[]) => void
}
