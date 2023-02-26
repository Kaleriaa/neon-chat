import { Message } from '@entities/message/types'

export type RequestMessage = Omit<Message, 'createdAt'> & {
    createdAt: {
        seconds: number
        nanoseconds: number
    }
}
