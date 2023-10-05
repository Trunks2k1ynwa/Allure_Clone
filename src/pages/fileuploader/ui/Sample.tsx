import { FileUploader, FileUploaderOptions } from '@gui/fluent-ui-allure'
import React from 'react'

export const Sample = () => {
  const options = React.useMemo(() => {
    const option: FileUploaderOptions = {
      uploadFileEndpoint: '/upload',
      acceptedFiles: ['.doc', '.docx', '.js', '.cs', '.css'],
      maxFileSize: 1024 * 1024 * 10, // 10MB
      maxFiles: 6
    }
    return option
  }, [])

  return (
    <div>
      <FileUploader
        multiple={false}
        onFieUploadErrors={(errors) => {
          console.log(errors)
        }}
        onFieUploadSuccess={(_file, res) => {
          {
            console.log(res)
          }
        }}
        options={options}
      />
    </div>
  )
}
