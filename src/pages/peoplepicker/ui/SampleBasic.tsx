import { Stack, IPersonaProps, CompactPeoplePicker, IBasePickerStyles } from '@gui/fluent-ui-allure'
import { suggestionProps } from './suggestionProps'

const demoImageUrl =
  'https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/persona-female.png'

const list: IPersonaProps[] = [
  {
    text: 'Will Wang',
    imageUrl: demoImageUrl,
    secondaryText: 'will.wang@avepoint.com'
  },
  {
    text: 'Lily Wang',
    imageUrl: demoImageUrl,
    secondaryText: 'Lily.wang@avepoint.com'
  },
  {
    text: 'Ming Hong',
    imageUrl: demoImageUrl,
    secondaryText: 'Ming.hong@avepoint.com'
  },
  {
    text: 'Anne Wang',
    imageUrl: demoImageUrl,
    secondaryText: 'Anne.wang@avepoint.com'
  },
  {
    text: 'Angle Kolar',
    imageUrl: demoImageUrl,
    secondaryText: 'Angle.Kolar@avepoint.com'
  },
  {
    text: 'Bob Lu',
    imageUrl: demoImageUrl,
    secondaryText: 'Bob.lu@avepoint.com'
  },
  {
    text: 'Joy Li',
    imageUrl: demoImageUrl,
    secondaryText: 'Joy.Li@avepoint.com'
  },
  {
    text: 'Aaron Reid',
    imageUrl: demoImageUrl,
    secondaryText: 'Aaron.Reid@avepoint.com'
  },
  {
    text: 'Alex Lundberg',
    imageUrl: demoImageUrl,
    secondaryText: 'Alex.Lundberg@avepoint.com'
  }
]

export const SampleBasic = () => {
  const styles: Partial<IBasePickerStyles> = { root: { width: 280 } }

  const onFilterChanged = (
    filterText: string,
    currentPersonas: IPersonaProps[],
    limitResults?: number
  ): IPersonaProps[] | Promise<IPersonaProps[]> => {
    filterText = filterText.toLocaleLowerCase()
    if (filterText) {
      let filteredPersonas: IPersonaProps[] = list.filter(
        (item) => (item.text as string).toLowerCase().indexOf(filterText.toLowerCase()) === 0
      )
      filteredPersonas = filteredPersonas.filter((persona) => !listContainsPersona(persona, currentPersonas))
      filteredPersonas = limitResults ? filteredPersonas.slice(0, limitResults) : filteredPersonas
      return filteredPersonas
    } else {
      return []
    }
  }

  function listContainsPersona(persona: IPersonaProps, personas: IPersonaProps[]) {
    if (!personas || !personas.length || personas.length === 0) {
      return false
    }
    return personas.filter((item) => item.text === persona.text).length > 0
  }

  return (
    <Stack horizontal tokens={{ childrenGap: 16 }}>
      <CompactPeoplePicker
        onResolveSuggestions={onFilterChanged}
        pickerSuggestionsProps={suggestionProps}
        styles={styles}
        defaultSelectedItems={[list[0]]}
        itemLimit={1}
        pickerCalloutProps={{ calloutWidth: 280 }}
      />
    </Stack>
  )
}
