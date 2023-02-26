import { LOGIN_ROUTE } from '@app/constants/path'
import { useUserStore } from '@entities/user/model'
import { useLogin } from '@features/login/utils'
import { logout } from '@features/logout'
import { Button } from '@shared/ui'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

export const NavBar = () => {
    const navigate = useNavigate()

    const logoutUser = useUserStore((state) => state.logoutUser)
    const user = useUserStore((state) => state.user)

    const handleLogin = useLogin()
    const handleLogout = () => {
        logout()
        logoutUser()
        navigate(LOGIN_ROUTE)
    }

    return (
        <NavBarBlock>
            {user ? (
                <>
                    <Avatar>
                        <img
                            src={user.photoURL ?? ''}
                            width={40}
                            style={{ borderRadius: '50%' }}
                        />
                        <Tooltip>
                            {user?.email} <br />
                            {user.displayName}
                        </Tooltip>
                    </Avatar>
                    <Button onClick={handleLogout} label="Выйти" />
                </>
            ) : (
                <Button label="Войти" onClick={handleLogin} />
            )}
        </NavBarBlock>
    )
}
const NavBarBlock = styled.div`
    height: 65px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    gap: 45px;
    padding: 10px 40px;
    margin-bottom: 40px;
    background: rgba(57, 56, 57, 0.75);
    z-index: 9;
`
const Avatar = styled.div`
    position: relative;
    cursor: pointer;
    &:hover {
        span {
            visibility: visible;
        }
    }
`
const Tooltip = styled.span`
    visibility: hidden;
    width: fit-content;
    height: fit-content;
    background-color: black;
    color: #fff;
    text-align: center;
    padding: 10px;
    border-radius: 5px;
    right: 5px;
    top: 65px;
    position: absolute;
    z-index: 10;
`
