import { FontIcon, Stack } from '@gui/fluent-ui-allure'

export const SampleFontAwesomeBasic = () => {
  const style: React.CSSProperties = {
    fontSize: 24
  }

  return (
    <Stack horizontal tokens={{ childrenGap: 30 }}>
      <FontIcon style={style} iconName='fas-plus' />
      <FontIcon style={style} iconName='far-pen-to-square' />
      <FontIcon style={style} iconName='fas-trash' />
      <FontIcon style={style} iconName='af-smile' />
      <FontIcon style={style} iconName='af-face-sad-tear' />
    </Stack>
  )
}

export const FontAwesomeBasicCustomColor = () => {
  const style = (color: string): React.CSSProperties => {
    return {
      fontSize: 24,
      color: color
    }
  }

  return (
    <Stack horizontal tokens={{ childrenGap: 30 }}>
      <FontIcon style={style('#0072D0')} iconName='fas-plus' />
      <FontIcon style={style('#00A84E')} iconName='far-pen-to-square' />
      <FontIcon style={style('#D01B1B')} iconName='fas-trash' />
    </Stack>
  )
}
export const FontAwesomeBasicUiFabric = () => {
  const style: React.CSSProperties = {
    fontSize: 24
  }
  return (
    <Stack horizontal tokens={{ childrenGap: 30 }}>
      <FontIcon style={style} iconName='ExchangeLogo' />
      <FontIcon style={style} iconName='SharepointLogo' />
      <FontIcon style={style} iconName='TeamsLogo16' />
    </Stack>
  )
}
export const FontAwesomeUiFabricCustomColor = () => {
  const style = (color: string): React.CSSProperties => {
    return {
      fontSize: 24,
      color: color
    }
  }
  return (
    <Stack horizontal tokens={{ childrenGap: 30 }}>
      <FontIcon style={style('#0F78D4')} iconName='ExchangeLogo' />
      <FontIcon style={style('#038387')} iconName='SharepointLogo' />
      <FontIcon style={style('#4B53BC')} iconName='TeamsLogo16' />
    </Stack>
  )
}
