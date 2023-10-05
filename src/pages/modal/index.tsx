import Heading from '@/atoms/heading'
import UiCodeHighLight from '@/molecules/uicodehighlight'
import { SampleBasic } from './SampleBasic'

const Modal = () => {
  return (
    <section>
      <div className='heading-wrapper'>
        <Heading>Modal</Heading>
        <p>
          Modals take focus from the page or app and require people to interact with them. Unlike a dialog, a modal
          should be used for hosting lengthy content, Such as asking people to perform complex or multiple actions.
        </p>
      </div>
      <div className='heading-wrapper'>
        <Heading type='subheading'>Basic Usage</Heading>
        <p>1. When it's critical for people to make a choice or provide information before they can proceed.</p>
        <p> 2. Always have at least one focusable element inside a modal.</p>
      </div>

      <UiCodeHighLight
        uiChildren={<SampleBasic />}
        codeString={`import * as React from "react";
import { PrimaryButton, DefaultButton, Dialog, DialogFooter, Label, Stack, ChoiceGroup, IChoiceGroupOption, Checkbox, DialogType } from "@gui/fluent-ui-allure";

export const SampleBasic = () => {
    const [isModalClosed, setModalClosed] = React.useState(true);
    return (
        <div>
            <DefaultButton onClick={() => setModalClosed(false)}>Open modal</DefaultButton>
            <Dialog
                hidden={isModalClosed}
                onDismiss={() => setModalClosed(true)}
                dialogContentProps={{ showCloseButton: true, type: DialogType.close }}
                title="Modal heading"
                maxWidth="480px"
                minWidth="480px"
            >
                <div style={{ maxHeight: 150 }}>
                    <Label required style={{ padding: "4px 0" }}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr
                    </Label>
                    <Stack tokens={{ childrenGap: 4 }}>
                        <Checkbox label="Option A" />
                        <Checkbox label="Option B" />
                        <Checkbox label="Option C" />
                        <Checkbox label="Option D" />
                    </Stack>
                </div>
                <DialogFooter>
                    <DefaultButton onClick={() => setModalClosed(true)}>Cancel</DefaultButton>
                    <PrimaryButton onClick={() => setModalClosed(true)}>Submit</PrimaryButton>
                </DialogFooter>
            </Dialog>
        </div>
    );
};`}
      />
    </section>
  )
}
export default Modal
