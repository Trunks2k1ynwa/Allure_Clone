import * as React from 'react'
import {
  PrimaryButton,
  DefaultButton,
  Dialog,
  DialogFooter,
  Label,
  Stack,
  Checkbox,
  DialogType
} from '@gui/fluent-ui-allure'

export const SampleBasic = () => {
  const [isModalClosed, setModalClosed] = React.useState(true)
  return (
    <div>
      <DefaultButton onClick={() => setModalClosed(false)}>Open modal</DefaultButton>
      <Dialog
        hidden={isModalClosed}
        onDismiss={() => setModalClosed(true)}
        dialogContentProps={{ showCloseButton: true, type: DialogType.close }}
        title='Modal heading'
        maxWidth='480px'
        minWidth='480px'
      >
        <div style={{ maxHeight: 150 }}>
          <Label required style={{ padding: '4px 0' }}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr
          </Label>
          <Stack tokens={{ childrenGap: 4 }}>
            <Checkbox label='Option A' />
            <Checkbox label='Option B' />
            <Checkbox label='Option C' />
            <Checkbox label='Option D' />
          </Stack>
        </div>
        <DialogFooter>
          <DefaultButton onClick={() => setModalClosed(true)}>Cancel</DefaultButton>
          <PrimaryButton onClick={() => setModalClosed(true)}>Submit</PrimaryButton>
        </DialogFooter>
      </Dialog>
    </div>
  )
}
