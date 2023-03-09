import { FieldValue } from 'firebase/firestore'

export type Date = {
    seconds: number
    nanoseconds: number
}

export type Message = {
    uid: string
    photoURL: string | null
    displayName: string | null
    text: string
    createdAt: Date | FieldValue
}
