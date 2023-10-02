import { CssBaseline } from '@mui/material'
import ColorModes from '../constants/toggleTheme'
import QueryProvider from './queryProvider'
type child = {
    children: React.ReactNode
}
const index = ({ children }: child) => {
    return (
        <QueryProvider>
            <ColorModes>
                <CssBaseline />
                {children}
            </ColorModes>
        </QueryProvider>
    )
}

export default index
