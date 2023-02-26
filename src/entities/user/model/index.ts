import { User } from './../types/index'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface UserState {
    user: User | null
    loginUser: (user: User) => void
    logoutUser: () => void
}

export const useUserStore = create<UserState>()(
    devtools((set) => ({
        user: null,

        loginUser: (user: User) => set(() => ({ user })),
        logoutUser: () => set(() => ({ user: null })),
    })),
)
