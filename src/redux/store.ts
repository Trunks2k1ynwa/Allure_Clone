import { configureStore } from '@reduxjs/toolkit'
import themeSlice from './slices/themeSlice'
import iconSlice from './slices/iconSlice'
// ...

const store = configureStore({
  reducer: {
    theme: themeSlice,
    icons: iconSlice
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export default store
