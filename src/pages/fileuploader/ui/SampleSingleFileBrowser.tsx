import { FileBrowser } from '@gui/fluent-ui-allure'
export const SampleSingleFileBrowser = () => {
  return (
    <div>
      {/* 可以使用buttonText来自定义文字，使用iconName属性来自定义图标 */}
      {/* 可以用style来设置宽度，默认的input[type=file]的name是file，可以通过设置formName属性来改变 */}
      {/* accept: https://www.w3schools.com/TAGS/att_input_accept.asp */}
      <FileBrowser
        accept='image/*'
        required={true}
        label='Certificate file (.pfx)'
        style={{ width: 600 }}
        onSelectionChanged={(file) => {
          console.log(file.name)
        }}
      />
    </div>
  )
}
