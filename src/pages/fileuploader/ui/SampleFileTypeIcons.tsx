import { fileExtensionManager } from '@gui/fluent-ui-allure'

const itemStyle: React.CSSProperties = {
  display: 'inline-flex',
  border: '1px solid #e8e9ea',
  backgroundColor: '#f2f3f4',
  width: 130,
  height: 40,
  alignItems: 'center',
  padding: 15,
  justifyContent: 'space-between',
  borderRadius: 3,
  marginLeft: 15,
  marginBottom: 15,
  boxShadow: '3px 3px 5px rgba(0,0,0,0.3)'
}
const iconStyle: React.CSSProperties = {}
const extensionStyle: React.CSSProperties = {
  fontWeight: 'bold'
}

const containerStyle: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap'
}
export const SampleFileTypeIcons = () => {
  return (
    <div style={containerStyle}>
      {Object.keys(fileExtensionManager.getAllMappings()).map((key) => {
        return (
          <div key={key} style={itemStyle}>
            <span style={iconStyle}>{fileExtensionManager.getMapping(key).icon}</span>
            <span style={extensionStyle}>{key}</span>
          </div>
        )
      })}
    </div>
  )
}
