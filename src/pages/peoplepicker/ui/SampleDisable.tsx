import { Stack, IPersonaProps, CompactPeoplePicker, IBasePickerStyles } from '@gui/fluent-ui-allure'
import { suggestionProps } from './suggestionProps'

const demoImageUrl =
  'https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/persona-female.png'
const persona: IPersonaProps = {
  text: 'Will Wang',
  imageUrl: demoImageUrl,
  secondaryText: 'will.wang@avepoint.com'
}
export const SampleDisable = () => {
  const styles: Partial<IBasePickerStyles> = { root: { width: 280 } }

  return (
    <Stack horizontal tokens={{ childrenGap: 16 }}>
      <CompactPeoplePicker
        onResolveSuggestions={() => []}
        pickerSuggestionsProps={suggestionProps}
        styles={styles}
        inputProps={{
          placeholder: 'Search Users...'
        }}
        disabled
      />
      <CompactPeoplePicker
        onResolveSuggestions={() => []}
        pickerSuggestionsProps={suggestionProps}
        styles={styles}
        inputProps={{
          placeholder: 'Search Users...'
        }}
        disabled
        defaultSelectedItems={[persona]}
        itemLimit={1}
      />
    </Stack>
  )
}
