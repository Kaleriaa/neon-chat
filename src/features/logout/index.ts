import { auth } from '@shared/configs/firebase'

export const logout = () => {
    auth.signOut()
}
