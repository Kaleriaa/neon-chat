import { Message } from '@entities/message/types'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { fireStore } from '@shared/configs/firebase'

export const sendMessage = async (message: Message) => {
    return await addDoc(collection(fireStore, 'messages'), {
        ...message,
    })
}
