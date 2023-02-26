import './index.css'
import { NavBar } from '@widgets/nav-bar'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes/router'

export const App = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Router />
        </BrowserRouter>
    )
}
