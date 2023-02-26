import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { MessagesState } from '../types'

export const useMessagesStore = create<MessagesState>()(
    devtools((set) => ({
        messages: [],

        addMessage: (message) =>
            set((state) => ({ messages: [...state.messages, message] })),
        reloadMessages: (messages) => set((state) => ({ messages })),
    })),
)
