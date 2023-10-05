import { SampleImage } from './ui/SampleImage'
import { SampleSquare } from './ui/SampleSquare'
import { SampleBasic } from './ui/SampleBasic'

export const dataAvatars = [
  {
    title: 'Basic Usage',
    label:
      'Can put a composition of the person’s initials on a background color when there is no person image, or no image needed.',
    ui: <SampleBasic />,
    code: `import * as React from 'react';
    import { Persona, Stack, PersonaSize } from '@gui/fluent-ui-allure';
    
    export const SampleBasic = () => {
        return (
            <Stack horizontal verticalAlign='center' tokens={{ childrenGap: 16 }}>
                <Persona circled text='Will Wang' />
                <Persona circled size={PersonaSize.size32} text='Will Wang' />
                <Persona circled size={PersonaSize.size24} text='Will Wang' />
            </Stack>
        );
    };`
  },
  {
    title: 'Image',
    label: 'Use this vivid style when there is an image can display.',
    ui: <SampleImage />,
    code: `import * as React from 'react';
    import { Persona, Stack, PersonaSize } from '@gui/fluent-ui-allure';
    
    const demoImageUrl = "https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/persona-female.png";
    export const SampleImage = () => {
        return (
            <Stack horizontal verticalAlign='center' tokens={{ childrenGap: 16 }}>
                <Persona circled imageUrl={demoImageUrl} />
                <Persona circled size={PersonaSize.size32} imageUrl={demoImageUrl} />
                <Persona circled size={PersonaSize.size24} imageUrl={demoImageUrl} />
            </Stack>
        );
    };`
  },
  {
    title: 'Square',
    label: 'Only use for the right-top login user in the header zone.',
    ui: <SampleSquare />,
    code: `import * as React from 'react';
    import { Persona, Stack } from '@gui/fluent-ui-allure';
    const demoImageUrl = "https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/persona-female.png";
    export const SampleSquare = () => {
        return (
            <Stack horizontal verticalAlign='center' tokens={{ childrenGap: 16 }}>
                <Persona text='Will Wang' />
                <Persona imageUrl={demoImageUrl} text='Will Wang' />
            </Stack>
        );
    };`
  }
]
