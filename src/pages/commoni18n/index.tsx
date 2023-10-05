import Heading from '@/atoms/heading'
import './index.scss'
import { useEffect, useState } from 'react'
import { Dropdown, IDropdownStyles, Stack } from '@gui/fluent-ui-allure'

const CommonI18N = () => {
  type I18 = {
    key: string
    value: string
  }
  const [dataI18, setDataI18] = useState<I18[]>()
  const optionsLanguage = [
    { text: 'English', key: 0 },
    { text: 'German', key: 1 },
    { text: 'French', key: 2 },
    { text: 'Japanese', key: 3 },
    { text: 'Chinese', key: 4 }
  ]
  useEffect(() => {
    fetch('data/dataI18.json')
      .then((res) => res.json())
      .then((data) => {
        setDataI18(data)
      })
  }, [])
  const dropdownStyles: Partial<IDropdownStyles> = {
    dropdown: { width: '290px !important', fontStyle: 'oblique !important' }
  }
  return (
    <section id='common18n-wrapper'>
      <div className='heading-wrapper'>
        <Heading>Common I18N Terms</Heading>
        <div>
          Allure depends on @gui/common-i18n-terms which is a package including some common terms that can be used in
          your projects.
        </div>
      </div>
      <Stack horizontal tokens={{ childrenGap: 16 }}>
        <Dropdown id='select' options={optionsLanguage} styles={dropdownStyles} placeholder={optionsLanguage[0].text} />
      </Stack>
      <table>
        <tbody>
          <tr style={{ textAlign: 'left' }}>
            <th>Key</th>
            <th>Value</th>
          </tr>
          {dataI18?.map((data, index) => (
            <tr key={`item ${index}`}>
              <td>{data.key}</td>
              <td>{data.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default CommonI18N
