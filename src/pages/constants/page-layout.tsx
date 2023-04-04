import styled from 'styled-components'

export const Layout = styled.div`
    height: calc(100vh - 150px);
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 391px) {
        height: calc(100vh - 300px);
    }
`
