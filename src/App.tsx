import { Language, ThemeProvider, getAllureTheme } from '@gui/fluent-ui-allure'
import Routes from './routes/Routes'
import { theme } from './redux/slices/themeSlice'
import { useAppSelector } from './hooks/ReduxHooks'

function App() {
  const themValue = useAppSelector(theme)
  return (
    <ThemeProvider theme={getAllureTheme(themValue!.key, Language.EN)}>
      <Routes />
    </ThemeProvider>
  )
}

export default App
