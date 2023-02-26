import { useUserStore } from '@entities/user/model'
import { useNavigate } from 'react-router-dom'
import { login } from '@features/login'
import { CHAT_ROUTE } from '@app/constants/path'

export const useLogin = () => {
    const navigate = useNavigate()
    const loginUser = useUserStore((state) => state.loginUser)
    return async () => {
        const { displayName, photoURL, email, uid } = await login()
        loginUser({ displayName, photoURL, email, uid })
        navigate(CHAT_ROUTE)
    }
}
