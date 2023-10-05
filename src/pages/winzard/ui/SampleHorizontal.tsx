import * as React from 'react'
import { Stepper, Step, SecondaryText, IStepProps, Stack, DefaultButton, PrimaryButton } from '@gui/fluent-ui-allure'

export const SampleHorizontal = () => {
  const [activeStep, setActiveStep] = React.useState(0)
  function handleNext() {
    setActiveStep((previousStep) => previousStep + 1)
  }

  function handleBack() {
    setActiveStep((previousStep) => previousStep - 1)
  }

  function onStepClick(_step: IStepProps, index: number) {
    if (index < activeStep) {
      setActiveStep(index)
    }
  }
  return (
    <div>
      <Stepper
        style={{ borderBottom: '1px solid #e7eaeb' }}
        orientation='horizontal'
        activeStep={activeStep}
        onStepClick={onStepClick}
      >
        <Step header='General'></Step>
        <Step header='Template'>
          <SecondaryText style={{ fontSize: 13 }}>Optional</SecondaryText>
        </Step>
        <Step header='Authentication'></Step>
        <Step header='Review'></Step>
      </Stepper>

      <div style={{ padding: 15, textAlign: 'center' }}>
        {activeStep == 0 && <div>General Content</div>}
        {activeStep == 1 && <div>Template Content</div>}
        {activeStep == 2 && <div>Authentication Content</div>}
        {activeStep == 3 && <div>Review Content</div>}
        {activeStep == 4 && <div>Finish</div>}
      </div>

      <Stack horizontal tokens={{ childrenGap: 10 }} horizontalAlign='end'>
        {activeStep != 0 && <DefaultButton onClick={handleBack}>Back</DefaultButton>}
        {activeStep != 4 && <PrimaryButton onClick={handleNext}>Next</PrimaryButton>}
        {activeStep == 4 && <PrimaryButton>Finish</PrimaryButton>}
      </Stack>
    </div>
  )
}
