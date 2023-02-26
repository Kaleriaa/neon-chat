import { LOGIN_ROUTE, CHAT_ROUTE, WELCOME_ROUTE } from '@app/constants/path'
import { Chat } from '@pages/chat'
import { Login } from '@pages/login'
import { Welcome } from '@pages/welcome'

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        component: <Login />,
    },
    {
        path: WELCOME_ROUTE,
        component: <Welcome />,
    },
]
export const privateRoutes = [
    {
        path: CHAT_ROUTE,
        component: <Chat />,
    },
]
