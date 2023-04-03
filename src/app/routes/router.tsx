import { useUserStore } from '@entities/user/model'
import { NotFound } from '@pages/not-found'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { privateRoutes, publicRoutes } from './routes'
import { Welcome } from '@pages/welcome'

export const Router: React.FC = () => {
    const user = useUserStore((state) => state.user)
    return (
        <Routes>
            {user
                ? privateRoutes.map(({ path, component }) => (
                      <Route key={path} path={path} element={component} />
                  ))
                : publicRoutes.map(({ path, component }) => (
                      <Route key={path} path={path} element={component} />
                  ))}
            <Route path="/*" element={<NotFound />} />
            <Route path="/neon-chat/" index element={<Welcome />} />
        </Routes>
    )
}
