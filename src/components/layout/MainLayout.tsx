import { NavLink } from 'react-router-dom'
import { listRoute } from '~/routes/RouteSystem'
import './index.scss'
import {
  Dropdown,
  IDropdownOption,
  IDropdownStyles,
  ISearchBoxStyles,
  Icon,
  SearchBox,
  Stack,
  TooltipHost
} from '@gui/fluent-ui-allure'
import { useState } from 'react'
import SelectBasic from '../molecules/SelectBasic'
import { theme } from '~/redux/slices/themeSlice'
import { ErrorBoundary } from 'react-error-boundary'
import FallbackRender from '@/atoms/FallBack'
import SearchResult from '@/organisms/SearchResult'
import { useDebounce } from '@hooks/useDebounce'
import { useTranslation } from 'react-i18next'

type Props = {
  children: React.ReactNode
}
const MainLayout = ({ children }: Props) => {
  const styles: Partial<ISearchBoxStyles> = { root: { height: 40 }, box: { width: 220 } }
  const [showResult, setShowResult] = useState<boolean>(false)
  const [firstSearchValue, setFirstSearchValue] = useState<string | undefined>('')
  const deferredQuery = useDebounce(firstSearchValue, 500)
  const optionsLanguage = [
    { text: 'English', key: 'en' },
    { text: 'German', key: 'de' },
    { text: 'French', key: 'fr' },
    { text: 'Japanese', key: 'jp' },
    { text: 'Chinese', key: 'cn' }
  ]
  const optionsTheme: theme[] = [
    { text: 'Theme: Cobalt', key: 0 },
    { text: 'Theme: Teal', key: 1 },
    { text: 'Theme: Ochre', key: 2 },
    { text: 'Theme: Violet', key: 3 },
    { text: 'Theme: Magenta', key: 4 },
    { text: 'Theme: Lavender', key: 5 },
    { text: 'Theme: Pewter', key: 6 },
    { text: 'Theme: Mint', key: 7 },
    { text: 'Theme: Custom theme color', key: 8 }
  ]
  const { i18n } = useTranslation()
  const handleOnChange = (v: string | undefined) => {
    setShowResult(true)
    setFirstSearchValue(v)
    if (v === '') {
      setShowResult(false)
    }
  }
  const handleClear = () => {
    setFirstSearchValue('')
  }
  const dropdownStyles: Partial<IDropdownStyles> = {
    dropdown: { width: '200px !important', fontStyle: 'oblique !important' }
  }
  const handleChangeLanguage = (v: { text: string; key: string } | IDropdownOption<any> | undefined) => {
    if (v !== undefined && typeof v.key === 'string') {
      i18n.changeLanguage(v.key)
    }
  }
  return (
    <section className='container'>
      <header className='header'>
        <div className='header-wrapper'>
          <section className='header-logo'>
            <img src='/logo.png' className='header-logo_img' alt='' />
            <span className='header-logo_name'>Allure UI</span>
          </section>
          <section className='header-inputSearch'>
            <SearchBox
              styles={styles}
              placeholder='Type search keyword'
              value={firstSearchValue}
              onBlur={() => {
                setTimeout(() => {
                  setShowResult(false)
                }, 300)
              }}
              onChange={(_ev, v) => handleOnChange(v)}
              onClear={handleClear}
            />
            <SearchResult query={deferredQuery} showResult={showResult} />
          </section>
        </div>
        <section className='header-select'>
          <Stack horizontal tokens={{ childrenGap: 16 }}>
            <Dropdown
              onChange={(_ev, v) => handleChangeLanguage(v)}
              id='select'
              options={optionsLanguage}
              styles={dropdownStyles}
              placeholder={optionsLanguage[0].text}
            />
          </Stack>
          <SelectBasic options={optionsTheme} />
        </section>
      </header>
      <main className='main-body'>
        <aside className='main-sidebar'>
          {listRoute.map((route, index) => (
            <div key={`item ${index}`} className='main-sidebar_route'>
              <div>{route.titleGroup}</div>
              <nav className='route-menu'>
                {route.routes.map((item, index) => (
                  <li className='route-menu_item' key={`route ${index}`}>
                    <NavLink
                      className={({ isActive, isPending }) =>
                        isPending ? 'pending ' : isActive ? 'active route-menu_link' : 'route-menu_link'
                      }
                      to={item.to}
                      target={item.target}
                    >
                      {item.icon && (
                        <TooltipHost content={<div>Not production verified</div>}>
                          <Icon style={{ color: 'rgb(0,114,208)', marginRight: '5px' }} iconName='fas-vial' />
                        </TooltipHost>
                      )}

                      {item.title}
                    </NavLink>
                  </li>
                ))}
              </nav>
            </div>
          ))}
        </aside>
        <section className='main-content'>
          <ErrorBoundary fallbackRender={FallbackRender}>{children}</ErrorBoundary>
        </section>
      </main>
    </section>
  )
}
export default MainLayout
