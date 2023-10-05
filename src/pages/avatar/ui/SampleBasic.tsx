import { Persona, Stack, PersonaSize } from '@gui/fluent-ui-allure'

export const SampleBasic = () => {
  return (
    <Stack horizontal verticalAlign='center' tokens={{ childrenGap: 16 }}>
      <Persona circled text='Will Wang' />
      <Persona circled size={PersonaSize.size32} text='Will Wang' />
      <Persona circled size={PersonaSize.size24} text='Will Wang' />
    </Stack>
  )
}
