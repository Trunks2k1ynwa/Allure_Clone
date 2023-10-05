import Heading from '@/atoms/heading'
import UiCodeHighLight from '@/molecules/uicodehighlight'
import * as React from 'react'
import { Loading, TextField, PrimaryButton } from '@gui/fluent-ui-allure'
import { DefaultButton, Modal, IModalStyles } from '@gui/fluent-ui-allure'

const LoadingUi = () => {
  return (
    <section>
      <div className='heading-wrapper'>
        <Heading>Loading</Heading>
        <p>
          Loading Indicates to the user that the system is actively retrieving or dealing with data. When part of the
          page/whole page is waiting for asynchronous data, an appropriate loading animation effectively alleviates
          users' inquietude.
        </p>
      </div>
      <div className='heading-wrapper'>
        <Heading>Loading inside a container</Heading>
        <p>When showing the loading indicator, it should block out the corresponding part/whole screen with a mask.</p>
        <UiCodeHighLight
          uiChildren={<SampleInside />}
          codeString={`import * as React from 'react';
        import { Loading, TextField, PrimaryButton } from '@gui/fluent-ui-allure';
        
        
        const modalStyle: React.CSSProperties = {
            backgroundColor: '#FFFC',
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }
        
        export const SampleInside = () => {
            return (
                <div style={{position: 'relative'}}>
                    <TextField label='Username' />
                    <TextField label='Password' />
                    <PrimaryButton style={{marginTop: 10}}>Save</PrimaryButton>
                    
                    <div style={modalStyle}>
                        <Loading />
                    </div>
                </div>
            );
        };`}
        />
      </div>
      <div className='heading-wrapper'>
        <Heading>Full screen loading</Heading>
        <UiCodeHighLight
          uiChildren={<SampleFullScreen />}
          codeString={`import * as React from "react";
          import { Loading, DefaultButton, Modal, IModalStyles } from "@gui/fluent-ui-allure";
          
          const style: React.CSSProperties = {
              backgroundColor: "#323E4D52",
              borderRadius: "5px",
          };
          
          const modalStyles: Partial<IModalStyles> = {
              main: {
                  minHeight: 0,
                  minWidth: 0,
                  backgroundColor: "transparent",
                  boxShadow: 'none'
              },
          };
          
          export const SampleFullScreen = () => {
              const [showLoading, setShowLoading] = React.useState(false);
          
              return (
                  <React.Fragment>
                      <DefaultButton onClick={() => setShowLoading(true)}>Show loading</DefaultButton>
                      <Modal overlay={{ styles: { root: { backgroundColor: '#FFFFFFCC' } } }} styles={modalStyles} isOpen={showLoading} onDismiss={() => setShowLoading(false)} isBlocking={false}>
                          <Loading style={style}>LOADING</Loading>
                      </Modal>
                  </React.Fragment>
              );
          };`}
        />
      </div>
    </section>
  )
}

export default LoadingUi

const modalStyle: React.CSSProperties = {
  backgroundColor: '#FFFC',
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

const SampleInside = () => {
  return (
    <div style={{ position: 'relative' }}>
      <TextField label='Username' />
      <TextField label='Password' />
      <PrimaryButton style={{ marginTop: 10 }}>Save</PrimaryButton>

      <div style={modalStyle}>
        <Loading />
      </div>
    </div>
  )
}

const style: React.CSSProperties = {
  backgroundColor: '#323E4D52',
  borderRadius: '5px'
}

const modalStyles1: Partial<IModalStyles> = {
  main: {
    minHeight: 0,
    minWidth: 0,
    backgroundColor: 'transparent',
    boxShadow: 'none'
  }
}

const SampleFullScreen = () => {
  const [showLoading, setShowLoading] = React.useState(false)

  return (
    <React.Fragment>
      <DefaultButton onClick={() => setShowLoading(true)}>Show loading</DefaultButton>
      <Modal
        overlay={{ styles: { root: { backgroundColor: '#FFFFFFCC' } } }}
        styles={modalStyles1}
        isOpen={showLoading}
        onDismiss={() => setShowLoading(false)}
        isBlocking={false}
      >
        <Loading style={style}>LOADING</Loading>
      </Modal>
    </React.Fragment>
  )
}
