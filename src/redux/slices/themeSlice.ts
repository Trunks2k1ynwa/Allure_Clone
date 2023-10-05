import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { IDropdownOption } from '@gui/fluent-ui-allure'
export type theme = {
  text: string
  key: number
}
export interface themeState {
  value: theme | IDropdownOption<any>
}
const initialState: themeState = {
  value: {
    text: 'Colbalt',
    key: 0
  }
}

export const themeSlice = createSlice({
  name: 'themes',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<theme | IDropdownOption<any> | undefined>) => {
      state.value = action.payload
    }
  }
})

export const { setTheme } = themeSlice.actions
export const theme = (state: RootState) => state.theme.value
export default themeSlice.reducer
