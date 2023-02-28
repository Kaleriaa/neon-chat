export type Message = {
    uid: string
    photoURL: string | null
    displayName: string | null
    text: string
    createdAt: {
        seconds: number
        nanoseconds: number
    }
}
