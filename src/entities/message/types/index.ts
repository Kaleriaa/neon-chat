import { FieldValue } from 'firebase/firestore'
export type Message = {
    uid: string
    photoURL: string | null
    displayName: string | null
    text: string
    createdAt: FieldValue
}
