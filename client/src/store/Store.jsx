import { configureStore } from '@reduxjs/toolkit'
import ThemeSlice from '../features/ThemeSlice'
import NavbarSlice from '../features/NavbarSlice'

export default configureStore({
    reducer: {
        isLight:ThemeSlice,
        isCollapsed:NavbarSlice
    }
})