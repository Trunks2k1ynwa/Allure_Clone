import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { Fabric } from '~/utils/constan'
export type theme = {
  text: string
  key: number
}
type dataFont<T> = {
  status: string
  data: T[]
}
export interface themeState {
  iconsFontAl: dataFont<string>
  iconsFontFa: dataFont<string>
  iconsFontFb: dataFont<Fabric>
}
const fetchIconsFa = async () => {
  const response = await fetch(
    'https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/metadata/icons.json'
  ).then((res) => res.json())

  return response
}

const fetchIconsAl = async () => {
  const response = await fetch('/data/dataIconAllure.json')
  return response.json()
}

const fetchIconsFb = async () => {
  const response = await fetch('/data/dataIconFabric.json')
  return response.json()
}
export const fetchIcons = createAsyncThunk('icons/fetchIcon', async () => {
  const data = await Promise.all([fetchIconsAl(), fetchIconsFa(), fetchIconsFb()])
  return data
})

const initialState: themeState = {
  iconsFontAl: {
    status: 'idle',
    data: []
  },
  iconsFontFa: {
    status: 'idle',
    data: []
  },
  iconsFontFb: {
    status: 'idle',
    data: []
  }
}

export const themeSlice = createSlice({
  name: 'icons',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchIcons.fulfilled, (state, action) => {
      state.iconsFontAl.data = action.payload[0]
      const icons = []
      for (const icon in action.payload[1]) {
        for (const style of action.payload[1][icon].styles) {
          icons.push(`fa${style.substr(0, 1)} fa-${icon}`)
        }
      }
      state.iconsFontFa.data = icons
      state.iconsFontFb.data = action.payload[2]
    })
  }
})

export const iconFontAwesome = (state: RootState) => state.icons.iconsFontFa.data
export const iconFontAllure = (state: RootState) => state.icons.iconsFontAl.data
export const iconFontFabric = (state: RootState) => state.icons.iconsFontFb.data
export default themeSlice.reducer
