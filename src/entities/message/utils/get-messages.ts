import { Message } from '@entities/message/types'
import { getDocs, Query } from 'firebase/firestore'
import { RequestMessage } from '../types/request-message'

export const getMessages = async (docRef: Query<RequestMessage>) => {
    const result: Message[] = []
    const querySnapshot = await getDocs<RequestMessage>(docRef)

    querySnapshot.forEach((doc) => {
        const data = doc.data()
        result.push({ ...data, createdAt: new Date(data.createdAt.seconds) })
    })
    return result
}
