import './index.scss'
import Heading from '~/components/atoms/heading'
import { Stack, Icon } from '@gui/fluent-ui-allure'
import { IStyleSet, Label, ISearchBoxStyles, Pivot, PivotItem, SearchBox } from '@fluentui/react'
import IconItem from '~/components/atoms/iconitem'
import { useEffect, useMemo, useState } from 'react'
import { convertStringFa, Fabric } from '~/utils/constan'
import ModalIcon from '@/organisms/ModalIcon'
import { useDebounce } from '@hooks/useDebounce'
import { useAppDispatch, useAppSelector } from '@hooks/ReduxHooks'
import { fetchIcons, iconFontAllure, iconFontAwesome, iconFontFabric } from '@redux/slices/iconSlice'

const IconGallery = () => {
  const [query, setQuery] = useState<string | undefined>('')
  const [isModalClosed, setModalClosed] = useState(true)
  const [classname, setClassName] = useState<string>('')
  const queryDebounce = useDebounce(query, 500)
  const iconsFawesome = useAppSelector(iconFontAwesome)
  const iconsFabric: Fabric[] = useAppSelector(iconFontFabric)
  const iconsAllure = useAppSelector(iconFontAllure)
  const searchBoxStyles: Partial<ISearchBoxStyles> = {
    root: { height: 40 }
  }
  const labelStyles: Partial<IStyleSet> = {
    root: { marginTop: 10 }
  }
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchIcons())
  }, [dispatch])
  const dataFa = useMemo(() => {
    const a: string[] = iconsFawesome?.filter((icon) =>
      convertStringFa(icon).toLowerCase().includes(queryDebounce!.toLowerCase())
    )
    return a
  }, [queryDebounce, iconsFawesome])
  const dataAl = useMemo(() => {
    return iconsAllure?.filter((icon) => icon.toLowerCase().includes(queryDebounce!.toLowerCase()))
  }, [queryDebounce, iconsAllure])
  const dataFb = useMemo(() => {
    return iconsFabric?.filter((icon) => icon.name.toLowerCase().includes(queryDebounce!.toLowerCase()))
  }, [queryDebounce, iconsFabric])

  const handleShowModal = (className: string) => {
    setClassName(className)
    setModalClosed(false)
  }
  return (
    <section>
      <ModalIcon classname={classname} isModalClosed={isModalClosed} setModalClosed={setModalClosed} />

      <div className='div heading-wrapper'>
        <Heading>Icon Gallery</Heading>
        <p>
          This is a preview list of all three kinds of font icons. Allure font is customized by AvePoint, Font awesome
          is quoted from the Font Awesome library, and another Office UI fabric Icons are Microsoft font library.
        </p>
        <p>They all can be used in design according to different scenarios.</p>
      </div>
      <Stack>
        <SearchBox onChange={(_ev, v) => setQuery(v)} styles={searchBoxStyles} showIcon placeholder='Search...' />
      </Stack>
      <div style={{ marginTop: '10px' }}>
        <Pivot overflowBehavior={'menu'} aria-label='Basic Pivot Example'>
          <PivotItem
            headerText='Allure Font'
            headerButtonProps={{
              'data-order': 1,
              'data-title': 'My Files Title'
            }}
          >
            <Label styles={labelStyles}>
              <section className='list-icon'>
                {dataAl?.map((icon, index) => (
                  <IconItem key={`item ${index}`} onClick={() => handleShowModal(icon)} text={icon}>
                    <Icon className='font-awesome' iconName={icon} />
                  </IconItem>
                ))}
              </section>
            </Label>
          </PivotItem>
          <PivotItem headerText='Font Awesome'>
            <Label styles={labelStyles}>
              <section className='list-icon'>
                {dataFa?.map((icon, index) => (
                  <IconItem
                    key={`item ${index}`}
                    onClick={() => handleShowModal(convertStringFa(icon))}
                    text={convertStringFa(icon)}
                  >
                    <Icon className='font-awesome' iconName={convertStringFa(icon)} />
                  </IconItem>
                ))}
              </section>
            </Label>
          </PivotItem>
          <PivotItem headerText='Office Ui Fabric Icon'>
            <Label styles={labelStyles}>
              <section className='list-icon'>
                {dataFb?.map((icon, index) => (
                  <IconItem key={`item ${index}`} onClick={() => handleShowModal(icon.name)} text={icon.name}>
                    <Icon className='font-awesome' iconName={icon.name} />
                  </IconItem>
                ))}
              </section>
            </Label>
          </PivotItem>
        </Pivot>
      </div>
    </section>
  )
}

export default IconGallery
