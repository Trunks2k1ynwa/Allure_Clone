import { SampleSingleFileBrowser } from './ui/SampleSingleFileBrowser'
import { SampleSingleFileUploader } from './ui/SampleSingleFileUploader'
import { SampleUploadLogo } from './ui/SampleUploadLogo'
import { SampleUploadAvatar } from './ui/SampleUploadAvatar'
import { Sample } from './ui/Sample'
import { SampleFileTypeIcons } from './ui/SampleFileTypeIcons'

export const dataFileUploaders = [
  {
    title: 'Single file browser',
    label: 'This control allow user to browse only one file.',
    ui: <SampleSingleFileBrowser />,
    code: `import { FileBrowser } from "@gui/fluent-ui-allure";
    import * as React from "react";
    
    export const SampleSingleFileBrowser = () => {
    
        return (
            <div>
                {/* 可以使用buttonText来自定义文字，使用iconName属性来自定义图标 */}
                {/* 可以用style来设置宽度，默认的input[type=file]的name是file，可以通过设置formName属性来改变 */}
                {/* accept: https://www.w3schools.com/TAGS/att_input_accept.asp */}
               <FileBrowser accept="image/*" required={true} label="Certificate file (.pfx)" style={{width: 600}} onSelectionChanged={file => { console.log(file.name) }} />
            </div>
        );
    };`
  },
  {
    title: 'Single file uploader',
    label: 'This control allow user to upload only one file.',
    ui: <SampleSingleFileUploader />,
    code: `import { Label, Link, SingleFileUploader, Stack } from "@gui/fluent-ui-allure";
    import * as React from "react";
    
    export const SampleSingleFileUploader = () => {
    
        return (
            <Stack>
                {/* 可以使用buttonText来自定义文字，使用iconName属性来自定义图标 */}
                {/* 可以用style来设置宽度 */}
                {/* accept: https://www.w3schools.com/TAGS/att_input_accept.asp */}
                <Label required={true}>Browse the CSV/ZIP file where the records for which you want to restore the fields are configured</Label>
                <Link style={{marginBottom: 8}} underline>Download CSV template</Link>
                <SingleFileUploader accept="image/*" style={{width: 600}} onSelectionChanged={file => { console.log(file.name) }} />
            </Stack>
        );
    };`
  },
  {
    title: 'Basic usage',
    label:
      'This control should support drag and drop for ease of use. Better let user to know which types can be uploaded in advance.tc',
    ui: <Sample />,
    code: `import * as React from "react";
      import { FileUploader, FileUploaderOptions } from "@gui/fluent-ui-allure";
      
      export function formatBytes(n: number) {
          const units = ["bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
          let l = 0;
          while (n >= 1024 && ++l) {
              n = n / 1024;
          }
          return n.toFixed(n < 10 && l > 0 ? 1 : 0) + " " + units[l];
      }
      
      // If used in Panel, add \`layerProps={{ eventBubblingEnabled: true }}\` to Panel
      // If used in Dialog, add \`modalProps={{ layerProps: { eventBubblingEnabled: true } }}\` to Dialog
      // .net api \`HttpContext.Request.Form.Files\` to get files
      export const Sample = () => {
          const options = React.useMemo(() => {
              const option: FileUploaderOptions = {
                  uploadFileEndpoint: "/upload",
                  acceptedFiles: [".doc", ".docx", ".js", ".cs", ".css"],
                  maxFileSize: 1024 * 1024 * 10, // 10MB
                  maxFiles: 6,
                  // requestHeader: {
                  //     Authorization: \`Bearer {token}\`,
                  // },
                  // i18NString: {
                  //     dragBrowseMessage: intl.formatMessage(
                  //         { id: "drap-title", defaultMessage: "Drag your file here, or {0}" },
                  //         {
                  //             0: <a styleName="browse-link">{intl.formatMessage({ id: "browse" })}</a>,
                  //         }
                  //     ),
                  //     fileDesc: intl.formatMessage(
                  //         { id: "file-desc", defaultMessage: "Up to {0} ({1})" },
                  //         {
                  //             0: formatBytes(1024 * 10),
                  //             1: [".doc", ".docx", ".js", ".cs", ".css"].join(', ')
                  //         }
                  //     ),
                  // },
              };
              return option;
          }, []);
      
          return (
              <div>
                  <FileUploader
                      multiple={false}
                      onFieUploadErrors={(errors) => {
                          console.log(errors);
                      }}
                      onFieUploadSuccess={(file, res) => {
                          {
                              console.log(res);
                          }
                      }}
                      options={options}
                  />
              </div>
          );
      };`
  },
  {
    title: 'Upload Logo',
    code: `import { DefaultButton, SecondaryText, Stack } from "@gui/fluent-ui-allure";
    import * as React from "react";
    
    export const SampleUploadLogo = () => {
        const [image, setImage] = React.useState<string>();
        const [errorMessage, setErrorMessage] = React.useState<string>();
    
        const onImageSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
            setErrorMessage(undefined);
            const files = e.currentTarget.files;
            if (files.length > 0) {
                const file = files[0];
                if (file.size > 800 * 1024) {
                    setErrorMessage("File too large.");
                    return;
                }
    
                const reader = new FileReader();
    
                reader.addEventListener(
                    "load",
                    function () {
                        setImage(reader.result as string);
                    },
                    false
                );
    
                reader.readAsDataURL(file);
            } else {
                setImage(undefined);
            }
        };
    
        const fileStyle: React.CSSProperties = {
            display: "inline-block",
            position: "absolute",
            overflow: "hidden",
            left: 0,
            top: 0,
            bottom: 0,
            right: 0,
            opacity: 0,
            cursor: "pointer",
        };
    
        const imageContainerStyle: React.CSSProperties = {
            display: "inline-block",
            width: 214,
            height: 72,
            border: "1px solid #C4C6C8",
            borderRadius: 2,
            backgroundColor: "#E8E9EA",
            backgroundImage: \`url(\${image})\`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
        };
    
        return (
            <Stack horizontal>
                <div style={imageContainerStyle}></div>
                <Stack style={{ marginLeft: 16, padding: "5px 0" }} verticalAlign="space-between" horizontalAlign="start">
                    <Stack horizontal tokens={{ childrenGap: 8 }} style={{ marginBottom: 8 }}>
                        <DefaultButton iconProps={{ iconName: "fas-arrow-up-from-bracket" }}>
                            {/* if accept use [image/*] then all image types will be accepted */}
                            <input multiple={false} accept=".jpg,.png,.gif" onChange={(e) => onImageSelected(e)} style={fileStyle} type="file" /> Upload
                        </DefaultButton>
                        {image && <DefaultButton onClick={() => setImage(undefined)}>Reset</DefaultButton>}
                    </Stack>
    
                    {errorMessage ? <span style={{ color: "red" }}>{errorMessage}</span> : <SecondaryText block>JPG, GIF or PNG. Max size is 800KB. Recommended dimension is 214x72.</SecondaryText>}
                </Stack>
            </Stack>
        );
    };`,
    ui: <SampleUploadLogo />
  },
  {
    title: 'Upload Avatar',
    ui: <SampleUploadAvatar />,
    code: `import { DefaultButton, Persona, PersonaSize, SecondaryText, Stack } from "@gui/fluent-ui-allure";
    import * as React from "react";
    
    export const SampleUploadAvatar = () => {
        const [image, setImage] = React.useState<string>();
        const [errorMessage, setErrorMessage] = React.useState<string>();
    
        const onImageSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
            setErrorMessage(undefined);
            const files = e.currentTarget.files;
            if (files.length > 0) {
                const file = files[0];
                if (file.size > 800 * 1024) {
                    setErrorMessage("File too large.");
                    return;
                }
    
                const reader = new FileReader();
    
                reader.addEventListener(
                    "load",
                    function () {
                        setImage(reader.result as string);
                    },
                    false
                );
    
                reader.readAsDataURL(file);
            } else {
                setImage(undefined);
            }
        };
    
        const fileStyle: React.CSSProperties = {
            display: "inline-block",
            position: "absolute",
            overflow: "hidden",
            left: 0,
            top: 0,
            bottom: 0,
            right: 0,
            opacity: 0,
            cursor: "pointer",
        };
    
        return (
            <Stack horizontal>
                <Persona imageUrl={image} circled size={PersonaSize.size72} text="Will Wang" />
                <Stack style={{ marginLeft: 16, padding: "5px 0" }} verticalAlign="space-between" horizontalAlign="start">
                    <Stack horizontal tokens={{ childrenGap: 8 }} style={{ marginBottom: 8 }}>
                        <DefaultButton iconProps={{iconName: "fas-arrow-up-from-bracket"}}>
                            {/* if accept use [image/*] then all image types will be accepted */}
                            <input multiple={false} accept=".jpg,.png,.gif" onChange={(e) => onImageSelected(e)} style={fileStyle} type="file" /> Upload
                        </DefaultButton>
                        {image && <DefaultButton onClick={() => setImage(undefined)}>Remove</DefaultButton>}
                    </Stack>
    
                    {errorMessage ? <span style={{ color: "red" }}>{errorMessage}</span> : <SecondaryText block>JPG, GIF or PNG. Max size is 800KB. Recommended dimension is 72x72.</SecondaryText>}
                </Stack>
            </Stack>
        );
    };`
  },
  {
    title: 'File types and icons',
    label: 'There are some built-in supported file types and icons.',
    ui: <SampleFileTypeIcons />,
    code: `const containerStyle: React.CSSProperties = {
      display: 'flex',
      flexWrap: 'wrap',
  };
  
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
  };
  const iconStyle: React.CSSProperties = {};
  const extensionStyle: React.CSSProperties = {
      fontWeight: 'bold'
  };
  export const SampleFileTypeIcons = () => {
      return (
          <div style={containerStyle}>
              {Object.keys(fileExtensionManager.getAllMappings()).map((key) => {
                  return (
                      <div key={key} style={itemStyle}>
                          <span style={iconStyle}>{fileExtensionManager.getMapping(key).icon}</span>
                          <span style={extensionStyle}>{key}</span>
                      </div>
                  );
              })}
          </div>
      );
  };`
  }
]
