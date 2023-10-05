import { Persona, Stack, PersonaSize } from '@gui/fluent-ui-allure'

const demoImageUrl =
  'https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/persona-female.png'
export const SampleImage = () => {
  return (
    <Stack horizontal verticalAlign='center' tokens={{ childrenGap: 16 }}>
      <Persona circled imageUrl={demoImageUrl} />
      <Persona circled size={PersonaSize.size32} imageUrl={demoImageUrl} />
      <Persona circled size={PersonaSize.size24} imageUrl={demoImageUrl} />
    </Stack>
  )
}
