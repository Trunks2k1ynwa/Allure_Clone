import * as React from 'react'
import { IPersonaProps, IBasePickerSuggestionsProps, IBasePickerStyles, ListPeoplePicker } from '@gui/fluent-ui-allure'

const demoImageUrl =
  'https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/persona-female.png'
const suggestionProps: IBasePickerSuggestionsProps = {
  suggestionsHeaderText: 'Suggested People',
  mostRecentlyUsedHeaderText: 'Suggested Contacts',
  noResultsFoundText: 'No results found',
  loadingText: 'Loading',
  showRemoveButtons: true,
  suggestionsAvailableAlertText: 'People Picker Suggestions available',
  suggestionsContainerAriaLabel: 'Suggested contacts'
}

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

export const SampleInlinePreview: React.FunctionComponent = () => {
  const styles: Partial<IBasePickerStyles> = { outer: { width: 280 } }
  const [selected, setSelected] = React.useState<IPersonaProps[]>(list.slice(0, 8))

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
    <div>
      <ListPeoplePicker
        onResolveSuggestions={onFilterChanged}
        pickerSuggestionsProps={suggestionProps}
        resolveDelay={300}
        styles={styles}
        maxDisplayablePersonas={5}
        defaultSelectedItems={list.slice(0, 4)}
        isInlinePreview
        selectedItems={selected}
        selectedItemsText={`${selected.length || 0} users selected`}
        pickerCalloutProps={{ calloutWidth: 280 }}
        onChange={(items?: IPersonaProps[]) => setSelected(items)}
        calloutWidth={280}
        id={'people-picker-callout'}
        onCalloutButtonClick={(i) => setSelected(selected.filter((j) => i.text !== j.text))}
      />
    </div>
  )
}
