import { DefaultButton, SecondaryText, Stack } from '@gui/fluent-ui-allure'
import * as React from 'react'
export const SampleUploadLogo = () => {
  const [image, setImage] = React.useState<string>()
  const [errorMessage, setErrorMessage] = React.useState<string>()

  const onImageSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrorMessage(undefined)
    const files = e.currentTarget.files
    if (files!.length > 0) {
      const file = files![0]
      if (file.size > 800 * 1024) {
        setErrorMessage('File too large.')
        return
      }

      const reader = new FileReader()

      reader.addEventListener(
        'load',
        function () {
          setImage(reader.result as string)
        },
        false
      )

      reader.readAsDataURL(file)
    } else {
      setImage(undefined)
    }
  }

  const fileStyle: React.CSSProperties = {
    display: 'inline-block',
    position: 'absolute',
    overflow: 'hidden',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    opacity: 0,
    cursor: 'pointer'
  }

  const imageContainerStyle: React.CSSProperties = {
    display: 'inline-block',
    width: 214,
    height: 72,
    border: '1px solid #C4C6C8',
    borderRadius: 2,
    backgroundColor: '#E8E9EA',
    backgroundImage: `url(${image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%'
  }

  return (
    <Stack horizontal>
      <div style={imageContainerStyle}></div>
      <Stack style={{ marginLeft: 16, padding: '5px 0' }} verticalAlign='space-between' horizontalAlign='start'>
        <Stack horizontal tokens={{ childrenGap: 8 }} style={{ marginBottom: 8 }}>
          <DefaultButton iconProps={{ iconName: 'fas-arrow-up-from-bracket' }}>
            {/* if accept use [image/*] then all image types will be accepted */}
            <input
              multiple={false}
              accept='.jpg,.png,.gif'
              onChange={(e) => onImageSelected(e)}
              style={fileStyle}
              type='file'
            />{' '}
            Upload
          </DefaultButton>
          {image && <DefaultButton onClick={() => setImage(undefined)}>Reset</DefaultButton>}
        </Stack>

        {errorMessage ? (
          <span style={{ color: 'red' }}>{errorMessage}</span>
        ) : (
          <SecondaryText block>JPG, GIF or PNG. Max size is 800KB. Recommended dimension is 214x72.</SecondaryText>
        )}
      </Stack>
    </Stack>
  )
}
