import { Persona, Stack } from '@gui/fluent-ui-allure'
const demoImageUrl =
  'https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/persona-female.png'
export const SampleSquare = () => {
  return (
    <Stack horizontal verticalAlign='center' tokens={{ childrenGap: 16 }}>
      <Persona text='Will Wang' />
      <Persona imageUrl={demoImageUrl} text='Will Wang' />
    </Stack>
  )
}
