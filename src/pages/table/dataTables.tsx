import { SampleIcon } from '@@/button/ButtonComponent'
import { SampleBasic } from './ui/SampleBasic'
import { SampleHiddenButtons } from './ui/SampleHiddenButtons'
import { SampleMultipleSelect } from './ui/SampleMultipleSelect'
import { SampleSort } from './ui/SampleSort'
import { SampleUserInlinePreview } from './ui/SampleUserInlinePreview'
import { SampleMultiLine } from './ui/SampleMultiLine'
import { SampleCustom } from './ui/SampleCustom'
export const dataTables = [
  {
    title: 'Basic Usage',
    label:
      'The first column is usually the key column. If it can drill down to see details, make the first column bold. The column can be of several types: text, image, icon with text, link, and avatar with description.',
    ui: <SampleBasic />,
    code: `import {
      Stack,
      IColumn,
      TooltipHost,
      HeadingText,
      HeadingType,
      Text,
      Link,
      IStackStyles,
      ShimmeredDetailsList,
      CheckboxVisibility,
      Toggle,
      SelectionMode,
      DetailsListLayoutMode,
  } from "@gui/fluent-ui-allure";
  import * as React from "react";
  
  interface itemProps {
      name: string;
      description: string;
      status: string;
      link: string;
  }
  
  export const SampleBasic: React.FunctionComponent = () => {
      const [enableSelectText, setEnableSelectText] = React.useState(false);
      const [firstColumnClickable, setFirstColumnClickable] = React.useState(false);
  
      const pageStyles: IStackStyles = {
          root: {
              ".clickable": {
                  cursor: "pointer",
                  fontWeight: "bold",
                  ":hover": {
                      textDecoration: "underline",
                  },
              },
              ".ms-DetailsRow": {
                  borderBottom: "1px solid #f3f2f1",
              },
  
              ".ms-detailsList-item-wrap": {
                  padding: "10px 0",
  
                  ".ms-detailsList-status-wrap": {
                      display: "flex",
                      alignItems: "center",
  
                      ".ms-detailsList-status-tip": {
                          width: "6px",
                          height: "6px",
                          marginRight: "4px",
                          backgroundColor: "green",
                          borderRadius: "50%",
                      },
                  },
  
                  ".ms-detailsList-name-tooltip": {
                      display: "inline-block",
                  },
  
                  ".ms-detailsList-link-data": {
                      fontSize: "14px",
                  },
              },
          },
      };
  
      //#region detailsList
      const columns: IColumn[] = [
          {
              key: "name",
              name: "Name",
          },
          {
              key: "description",
              name: "Description",
          },
          {
              key: "status",
              name: "Status",
          },
          {
              key: "link",
              name: "Link",
          },
      ].map((column) => {
          return {
              ...column,
              minWidth: 80,
              isResizable: true,
              maxWidth: 200,
          };
      });
  
      const items: itemProps[] = [
          {
              name: \`Kathleen\`,
              description: \`Lorem ipsum dolor sit amet\`,
              status: \`Running\`,
              link: \`\`,
          },
          {
              name: \`Scottie\`,
              description: \`Lorem ipsum dolor sit amet\`,
              status: \`Running\`,
              link: \`\`,
          },
          {
              name: \`Dave\`,
              description: \`Lorem ipsum dolor sit amet\`,
              status: \`Running\`,
              link: \`\`,
          },
          {
              name: \`Kane\`,
              description: \`Lorem ipsum dolor sit amet\`,
              status: \`Running\`,
              link: \`\`,
          },
          {
              name: \`Tamara\`,
              description: \`Lorem ipsum dolor sit amet\`,
              status: \`Running\`,
              link: \`\`,
          },
      ];
  
      const onRenderItemColumn: (item: itemProps, index: number, column: IColumn) => React.ReactNode = (item, _index, column) => {
          switch (column.key) {
              case "name":
                  return (
                      <div className="ms-detailsList-item-wrap">
                          <TooltipHost calloutProps={{ gapSpace: 0 }} closeDelay={10} content={item.name} hostClassName="ms-detailsList-name-tooltip">
                              <Text block className={firstColumnClickable ? "clickable" : ""}>
                                  {item.name}
                              </Text>
                          </TooltipHost>
                      </div>
                  );
              case "description":
                  return (
                      <div className="ms-detailsList-item-wrap">
                          <Text block>{item.description}</Text>
                      </div>
                  );
              case "status":
                  return (
                      <div className="ms-detailsList-item-wrap">
                          <div className="ms-detailsList-status-wrap">
                              <div className="ms-detailsList-status-tip"></div>
                              <Text block>{item.status}</Text>
                          </div>
                      </div>
                  );
              case "link":
                  return (
                      <div className="ms-detailsList-item-wrap">
                          <Link
                              className="ms-detailsList-link-data"
                              underline
                              onMouseDown={(e) => {
                                  e.stopPropagation();
                              }}
                          >
                              Link to data
                          </Link>
                      </div>
                  );
              default:
                  return <div></div>;
          }
      };
  
      //#endregion
      return (
          <Stack styles={pageStyles}>
              <Stack horizontal tokens={{ childrenGap: 16 }}>
                  <Toggle
                      checked={enableSelectText}
                      onChange={(_, checked) => {
                          setEnableSelectText(checked);
                      }}
                      label="Enable text selection"
                      inlineLabel
                  />
                  <Toggle
                      checked={firstColumnClickable}
                      onChange={(_, checked) => {
                          setFirstColumnClickable(checked);
                      }}
                      label="Make the first column clickable"
                      inlineLabel
                  />
              </Stack>
              <ShimmeredDetailsList
                  compact
                  checkboxVisibility={CheckboxVisibility.hidden}
                  key={"detailsList"}
                  setKey={"detailsList"}
                  columns={columns}
                  // layoutMode={enableTableWider ? DetailsListLayoutMode.fixedColumns : DetailsListLayoutMode.justified}
                  items={items}
                  selectionMode={enableSelectText ? SelectionMode.none : SelectionMode.multiple} // 如果需要能够选择表格中的文字，将selectionMode设置为none或single均可
                  onRenderItemColumn={onRenderItemColumn}
              ></ShimmeredDetailsList>
          </Stack>
      );
  };`
  },
  {
    title: 'Multiple select',
    label:
      'This table allows you to do multiple selections. In general, only available actions can be shown at the top of the table.',
    ui: <SampleMultipleSelect />,
    code: `import { Stack, IColumn, TooltipHost, HeadingText, HeadingType, Text, Link, IStackStyles, ShimmeredDetailsList, SelectionMode, CheckboxVisibility } from "@gui/fluent-ui-allure";
    import * as React from "react";
    
    interface itemProps {
        name: string;
        description: string;
        status: string;
        link: string;
    }
    
    export const SampleMultipleSelect: React.FunctionComponent = () => {
        const pageStyles: IStackStyles = {
            root: {
                ".ms-DetailsRow": {
                    borderBottom: "1px solid #f3f2f1",
                },
    
                ".ms-detailsList-item-wrap": {
                    padding: "10px 0",
    
                    ".ms-detailsList-status-wrap": {
                        display: "flex",
                        alignItems: "center",
    
                        ".ms-detailsList-status-tip": {
                            width: "6px",
                            height: "6px",
                            marginRight: "4px",
                            backgroundColor: "green",
                            borderRadius: "50%",
                        },
                    },
    
                    ".ms-detailsList-name-tooltip": {
                        display: "inline-block",
                    },
    
                    ".ms-detailsList-link-data": {
                        fontSize: "14px",
                    },
                },
            },
        };
    
        //#region detailsList
        const columns: IColumn[] = [
            {
                key: "name",
                name: "Name",
            },
            {
                key: "description",
                name: "Description",
            },
            {
                key: "status",
                name: "Status",
            },
            {
                key: "link",
                name: "Link",
            },
        ].map((column) => {
            return {
                ...column,
                minWidth: 80,
                isResizable: true,
                maxWidth: 160,
            };
        });
    
        const items: itemProps[] = new Array(5).fill(0).map((_item, index) => {
            const _index: string = \`\${index + 1}\`.padStart(3, "0");
            return {
                key: \`\${_index}\`,
                name: \`name\${_index}\`,
                description: \`description\${_index}\`,
                status: \`status\${_index}\`,
                link: \`link\${_index}\`,
            };
        });
    
        const onRenderItemColumn: (item: itemProps, index: number, column: IColumn) => React.ReactNode = (item, _index, column) => {
            switch (column.key) {
                case "name":
                    return (
                        <div className="ms-detailsList-item-wrap">
                            <TooltipHost calloutProps={{ gapSpace: 0 }} closeDelay={10} content={item.name} hostClassName="ms-detailsList-name-tooltip">
                                <HeadingText type={HeadingType.DefaultBold} block>
                                    {item.name}
                                </HeadingText>
                            </TooltipHost>
                        </div>
                    );
                case "description":
                    return (
                        <div className="ms-detailsList-item-wrap">
                            <Text block>{item.description}</Text>
                        </div>
                    );
                case "status":
                    return (
                        <div className="ms-detailsList-item-wrap">
                            <div className="ms-detailsList-status-wrap">
                                <div className="ms-detailsList-status-tip"></div>
                                <Text block>{item.status}</Text>
                            </div>
                        </div>
                    );
                case "link":
                    return (
                        <div className="ms-detailsList-item-wrap">
                            <Link
                                className="ms-detailsList-link-data"
                                underline
                                href="https://www.bing.com"
                                target="_blank"
                                onMouseDown={(e) => {
                                    e.stopPropagation();
                                }}
                            >
                                Link to data
                            </Link>
                        </div>
                    );
                default:
                    return <div></div>;
            }
        };
    
        //#endregion
        return (
            <Stack styles={pageStyles}>
                <ShimmeredDetailsList
                    compact
                    checkboxVisibility={CheckboxVisibility.always}
                    selectionMode={SelectionMode.multiple}
                    key={"detailsList"}
                    setKey={"detailsList"}
                    columns={columns}
                    items={items}
                    selectionPreservedOnEmptyClick
                    onRenderItemColumn={onRenderItemColumn}
                ></ShimmeredDetailsList>
            </Stack>
        );
    };`
  },
  {
    title: 'Sort',
    label:
      'For some specified columns, click the column directly can sort. By default, is ascending order. Add this feature according to requirements.',
    ui: <SampleSort />,
    code: `import {
      Stack,
      IColumn,
      TooltipHost,
      HeadingText,
      HeadingType,
      Text,
      Link,
      IStackStyles,
      ShimmeredDetailsList,
      CheckboxVisibility
  } from "@gui/fluent-ui-allure";
  import * as React from "react";
  
  interface itemProps {
      name: string;
      description: string;
      status: string;
      link: string;
  }
  
  export const SampleSort: React.FunctionComponent = () => {
      const pageStyles: IStackStyles = {
          root: {
              '.ms-DetailsRow': {
                  borderBottom: '1px solid #f3f2f1',
              },
  
              '.ms-detailsList-item-wrap': {
                  padding: '10px 0',
  
                  '.ms-detailsList-status-wrap': {
                      display: 'flex',
                      alignItems: 'center',
  
                      '.ms-detailsList-status-tip': {
                          width: '6px',
                          height: '6px',
                          marginRight: '4px',
                          backgroundColor: 'green',
                          borderRadius: '50%',
                      }
                  },
  
                  '.ms-detailsList-name-tooltip': {
                      display: 'inline-block',
                  },
  
                  '.ms-detailsList-link-data': {
                      fontSize: "14px"
                  }
              }
          },
      };
  
      //#region detailsList
      const initColumns: IColumn[] = [
          {
              key: 'name',
              name: 'Name',
              isSorted: true,
              isSortedDescending: true,
              styles: {
                  cellTitle: {
                      cursor: "pointer"
                  }
              }
          } as IColumn,
          {
              key: 'description',
              name: 'Description',
              styles: {
                  cellTitle: {
                      cursor: "pointer"
                  }
              }
          },
          {
              key: 'status',
              name: 'Status',
              styles: {
                  cellTitle: {
                      cursor: "pointer"
                  }
              }
          },
          {
              key: 'link',
              name: 'Link',
              styles: {
                  cellTitle: {
                      cursor: "pointer"
                  }
              }
          }
      ].map((column) => {
          return ({
              ...column,
              minWidth: 80,
              isResizable: true,
              maxWidth: 160,
          })
      });
  
      const initItems: itemProps[] = new Array(5).fill(0).map((_item, index) => {
          const _index: string = (\`\${index + 1}\`).padStart(3, '0');
          return ({
              key: \`\${_index}\`,
              name: \`name\${_index}\`,
              description: \`description\${_index}\`,
              status: \`status\${_index}\`,
              link: \`link\${_index}\`,
          })
      });
  
      const onColumnHeaderClick: (ev: React.MouseEvent<HTMLElement, MouseEvent>, column: IColumn) => void = (_ev, column) => {
          const newColumns: IColumn[] = [...columns];
          newColumns.forEach((newColumn) => {
              if (newColumn.key === column.key) {
                  newColumn.isSorted = true;
                  newColumn.isSortedDescending = !newColumn.isSortedDescending;
                  sortInfo.current.sortKey = column.key;
                  sortInfo.current.isSortedDescending = newColumn.isSortedDescending;
              } else {
                  newColumn.isSorted = false;
                  newColumn.isSortedDescending = false;
              }
          })
          setColumns(newColumns);
          getItems();
      };
  
      const onRenderItemColumn: (item: itemProps, index: number, column: IColumn) => React.ReactNode = (item, _index, column) => {
          switch (column.key) {
              case "name":
                  return <div className='ms-detailsList-item-wrap'>
                      <TooltipHost
                          calloutProps={{ gapSpace: 0 }}
                          closeDelay={10}
                          content={item.name}
                          hostClassName="ms-detailsList-name-tooltip"
                      >
                          <HeadingText type={HeadingType.DefaultBold} block>
                              {item.name}
                          </HeadingText>
                      </TooltipHost>
                  </div>
              case "description":
                  return <div className='ms-detailsList-item-wrap'>
                      <Text block>{item.description}</Text>
                  </div>;
              case "status":
                  return <div className='ms-detailsList-item-wrap'>
                      <div className='ms-detailsList-status-wrap'>
                          <div className='ms-detailsList-status-tip'></div>
                          <Text block>{item.status}</Text>
                      </div>
                  </div>;
              case "link":
                  return <div className='ms-detailsList-item-wrap'>
                      <Link className='ms-detailsList-link-data' underline>Link to data</Link>
                  </div>;
              default:
                  return <div></div>;
          }
      };
  
      const getItems = (): void => {
          const newItems: any[] = [...initItems];
          if (sortInfo.current.sortKey) {
              newItems.sort((a, b) => {
                  return (a[sortInfo.current.sortKey].localeCompare(b[sortInfo.current.sortKey])) * (sortInfo.current.isSortedDescending ? -1 : 1)
              });
          }
          setItems(newItems);
      };
  
      //#endregion
  
      const sortInfo = React.useRef({
          sortKey: "name",
          isSortedDescending: true
      });
      const [columns, setColumns] = React.useState(initColumns);
      const [items, setItems] = React.useState([]);
      React.useEffect(() => {
          getItems();
      }, []);
      return (
          <Stack styles={pageStyles}>
              <ShimmeredDetailsList
                  compact
                  checkboxVisibility={CheckboxVisibility.hidden}
                  key={'detailsList'}
                  setKey={'detailsList'}
                  columns={columns}
                  onColumnHeaderClick={onColumnHeaderClick}
                  items={items}
                  onRenderItemColumn={onRenderItemColumn}
              ></ShimmeredDetailsList>
          </Stack>
      );
  };`
  },
  {
    title: 'Hidden buttons',
    label:
      'Show the ... action at the last column of the table immediately when hovering each row. For the keyboard, when the row gets focused, the … action should show up.',
    ui: <SampleHiddenButtons />,
    code: `import { Stack, IColumn, TooltipHost, HeadingText, HeadingType, Text, Link, IconButton, IStackStyles, ShimmeredDetailsList, CheckboxVisibility } from "@gui/fluent-ui-allure";
    import * as React from "react";
    
    interface itemProps {
        name: string;
        description: string;
        status: string;
        link: string;
    }
    
    export const SampleHiddenButtons: React.FunctionComponent = () => {
        const pageStyles: IStackStyles = {
            root: {
                ".ms-DetailsRow": {
                    borderBottom: "1px solid #f3f2f1",
    
                    ":hover": {
                        ".detailslist-more": {
                            opacity: "1 !important",
                        },
                    },
                },
    
                ".ms-detailsList-item-wrap": {
                    padding: "10px 0",
    
                    ".ms-detailsList-status-wrap": {
                        display: "flex",
                        alignItems: "center",
    
                        ".ms-detailsList-status-tip": {
                            width: "6px",
                            height: "6px",
                            marginRight: "4px",
                            backgroundColor: "green",
                            borderRadius: "50%",
                        },
                    },
    
                    ".ms-detailsList-name-tooltip": {
                        display: "inline-block",
                    },
    
                    ".ms-detailsList-link-data": {
                        fontSize: "14px",
                    },
                },
    
                ".detailslist-more": {
                    opacity: 0,
    
                    ".ms-Button-icon": {
                        width: "22px",
                    },
    
                    ".ms-Button-menuIcon": {
                        display: "none",
                    },
                },
            },
        };
    
        //#region detailsList
        const getColumns = (): IColumn[] => {
            const columns: Partial<IColumn>[] = [
                {
                    key: "name",
                    name: "Name",
                },
                {
                    key: "description",
                    name: "Description",
                },
                {
                    key: "status",
                    name: "Status",
                },
                {
                    key: "link",
                    name: "Link",
                },
                {
                    key: "more",
                    name: "",
                    minWidth: 50,
                    maxWidth: 50,
                    isResizable: false,
                },
            ];
            return columns.map((column) => {
                return {
                    ...column,
                    key: column.key,
                    name: column.name,
                    minWidth: column.minWidth || 80,
                    isResizable: column.isResizable === false ? false : true,
                    maxWidth: column.maxWidth || 160,
                };
            });
        };
    
        const items: itemProps[] = new Array(5).fill(0).map((_item, index) => {
            const _index: string = \`\${index + 1}\`.padStart(3, "0");
            return {
                key: \`\${_index}\`,
                name: \`name\${_index}\`,
                description: \`description\${_index}\`,
                status: \`status\${_index}\`,
                link: \`link\${_index}\`,
            };
        });
    
        const onRenderItemColumn: (item: itemProps, index: number, column: IColumn) => React.ReactNode = (item, _index, column) => {
            switch (column.key) {
                case "name":
                    return (
                        <div className="ms-detailsList-item-wrap">
                            <TooltipHost calloutProps={{ gapSpace: 0 }} closeDelay={10} content={item.name} hostClassName="ms-detailsList-name-tooltip">
                                <HeadingText type={HeadingType.DefaultBold} block>
                                    {item.name}
                                </HeadingText>
                            </TooltipHost>
                        </div>
                    );
                case "description":
                    return (
                        <div className="ms-detailsList-item-wrap">
                            <Text block>{item.description}</Text>
                        </div>
                    );
                case "status":
                    return (
                        <div className="ms-detailsList-item-wrap">
                            <div className="ms-detailsList-status-wrap">
                                <div className="ms-detailsList-status-tip"></div>
                                <Text block>{item.status}</Text>
                            </div>
                        </div>
                    );
                case "link":
                    return (
                        <div className="ms-detailsList-item-wrap">
                            <Link
                                className="ms-detailsList-link-data"
                                underline
                                onMouseDown={(e) => {
                                    e.stopPropagation();
                                }}
                            >
                                Link to data
                            </Link>
                        </div>
                    );
                case "more":
                    return (
                        <div className="detailslist-more">
                            <IconButton
                                iconProps={{ iconName: "fas-ellipsis" }}
                                bordered
                                menuProps={{
                                    items: [
                                        {
                                            key: "action1",
                                            text: "Action1",
                                            onClick: () => {
                                                alert("Action1");
                                            },
                                        },
                                        {
                                            key: "action2",
                                            text: "Action2",
                                            onClick: () => {
                                                alert("Action2");
                                            },
                                        },
                                    ],
                                }}
                            ></IconButton>
                        </div>
                    );
                default:
                    return <div></div>;
            }
        };
        //#endregion
        return (
            <Stack styles={pageStyles}>
                <ShimmeredDetailsList
                    compact
                    checkboxVisibility={CheckboxVisibility.always}
                    key={"detailsList"}
                    setKey={"detailsList"}
                    columns={getColumns()}
                    items={items}
                    selectionPreservedOnEmptyClick
                    onRenderItemColumn={onRenderItemColumn}
                ></ShimmeredDetailsList>
            </Stack>
        );
    };`
  },
  {
    title: 'Icon',
    label: 'You can add an icon to highlight the data you want to represent.',
    ui: <SampleIcon />,
    code: `import { Stack, IColumn, TooltipHost, HeadingText, HeadingType, Text, Link, IStackStyles, Icon, ShimmeredDetailsList, CheckboxVisibility, TooltipOverflowMode } from "@gui/fluent-ui-allure";
    import * as React from "react";
    
    interface itemProps {
        name: string;
        description: string;
        status: string;
        link: string;
    }
    
    export const SampleIcon: React.FunctionComponent = () => {
        const pageStyles: IStackStyles = {
            root: {
                ".ms-DetailsRow": {
                    borderBottom: "1px solid #f3f2f1",
                },
    
                ".ms-detailsList-item-wrap": {
                    padding: "10px 0",
    
                    ".ms-detailsList-status-wrap": {
                        display: "flex",
                        alignItems: "center",
    
                        ".ms-detailsList-status-tip": {
                            width: "6px",
                            height: "6px",
                            marginRight: "4px",
                            backgroundColor: "green",
                            borderRadius: "50%",
                        },
                    },
    
                    ".ms-detailsList-name-tooltip": {
                        display: "inline-flex",
                        alignItems: "center",
    
                        ".ms-detailsList-name-icon": {
                            marginRight: "8px",
                        },
                    },
    
                    ".ms-detailsList-link-data": {
                        fontSize: "14px",
                    },
                },
            },
        };
    
        //#region detailsList
        const columns: IColumn[] = [
            {
                key: "name",
                name: "Name",
            },
            {
                key: "description",
                name: "Description",
            },
            {
                key: "status",
                name: "Status",
            },
            {
                key: "link",
                name: "Link",
            },
        ].map((column) => {
            return {
                ...column,
                minWidth: 80,
                isResizable: true,
                maxWidth: 160,
            };
        });
    
        const items: itemProps[] = new Array(5).fill(0).map((_item, index) => {
            const _index: string = \`\${index + 1}\`.padStart(3, "0");
            return {
                key: \`\${_index}\`,
                name: \`name\${_index}\`,
                description: \`description\${_index}\`,
                status: \`status\${_index}\`,
                link: \`link\${_index}\`,
            };
        });
    
        const onRenderItemColumn: (item: itemProps, index: number, column: IColumn) => React.ReactNode = (item, _index, column) => {
            switch (column.key) {
                case "name":
                    return (
                        <div className="ms-detailsList-item-wrap">
                            <TooltipHost calloutProps={{ gapSpace: 0 }} closeDelay={10} content={item.name} hostClassName="ms-detailsList-name-tooltip">
                                <Icon iconName="fas-file-pdf" className="ms-detailsList-name-icon"></Icon>
                                <HeadingText type={HeadingType.DefaultBold} block>
                                    {item.name}
                                </HeadingText>
                            </TooltipHost>
                        </div>
                    );
                case "description":
                    return (
                        <div className="ms-detailsList-item-wrap">
                            <Text block>{item.description}</Text>
                        </div>
                    );
                case "status":
                    return (
                        <div className="ms-detailsList-item-wrap">
                            <div className="ms-detailsList-status-wrap">
                                <div className="ms-detailsList-status-tip"></div>
                                <Text block>{item.status}</Text>
                            </div>
                        </div>
                    );
                case "link":
                    return (
                        <div className="ms-detailsList-item-wrap">
                            <Link
                                className="ms-detailsList-link-data"
                                underline
                                onMouseDown={(e) => {
                                    e.stopPropagation();
                                }}
                            >
                                Link to data
                            </Link>
                        </div>
                    );
                default:
                    return <div></div>;
            }
        };
        //#endregion
        return (
            <Stack styles={pageStyles}>
                <ShimmeredDetailsList
                    compact
                    checkboxVisibility={CheckboxVisibility.hidden}
                    key={"detailsList"}
                    setKey={"detailsList"}
                    columns={columns}
                    items={items}
                    onRenderItemColumn={onRenderItemColumn}
                ></ShimmeredDetailsList>
            </Stack>
        );
    };`
  },
  {
    title: 'User inline preview',
    label: 'Add avatars preview in table. Show [+N] when there are more than 5 users.',
    ui: <SampleUserInlinePreview />,
    code: `import {
      Stack,
      IColumn,
      TooltipHost,
      HeadingText,
      HeadingType,
      Text,
      Link,
      IStackStyles,
      Icon,
      ShimmeredDetailsList,
      CheckboxVisibility,
      IFacepilePersona,
      IFacepileStyles,
      PersonaCoin,
      Facepile,
      OverflowButtonType,
      PersonaSize,
      Callout,
      Persona
  } from "@gui/fluent-ui-allure";
  import * as React from "react";
  
  interface IFacepileSampleProps {
      users: string[];
  }
  
  const FacepileSample = (props: IFacepileSampleProps) => {
  
      const data = props.users.map<IFacepilePersona>(user => { return { personaName: user } });
  
      const overflowButtonProps = {
          ariaLabel: "More users",
          onClick: (ev: React.MouseEvent<HTMLButtonElement>) => {
              setOverflowTarget(ev.target);
              setShowOverflow(true);
          },
          title: "",
      };
      const styles: Partial<IFacepileStyles> = {
          members: {
              selectors: {
                  ".ms-Facepile-member:not(:first-child)": {
                      marginLeft: -9,
                  },
              },
          },
          descriptiveOverflowButton: {
              marginLeft: -9,
          },
      };
      const calloutStyle: React.CSSProperties = {
          width: 260,
          maxHeight: 300,
          padding: 0,
          overflowY: 'auto',
          overflowX: 'hidden',
          boxShadow: '0px 2px 12px #323E4D29'
      };
      const personaWrapperStyle: React.CSSProperties = {
          height: 40,
          padding: 8,
      };
      const getPersonaCoinControl = (persona: IFacepilePersona): JSX.Element | null => {
          return (
              <TooltipHost content={persona.personaName}>
                  <PersonaCoin allowPhoneInitials={false} text={persona.personaName} size={PersonaSize.size24} />
              </TooltipHost>
          );
      };
      const [overflowTarget, setOverflowTarget] = React.useState(null);
      const [showOverflow, setShowOverflow] = React.useState(false);
      return (
          <Stack horizontal verticalAlign="center" tokens={{ childrenGap: 16 }}>
              <Facepile
                  styles={styles}
                  showTooltip={false}
                  maxDisplayablePersonas={5}
                  overflowButtonType={OverflowButtonType.descriptive}
                  overflowButtonProps={overflowButtonProps}
                  personaSize={PersonaSize.size24}
                  onRenderPersonaCoin={getPersonaCoinControl}
                  personas={data}
                  ariaDescription="To move through the items use left and right arrow keys."
                  ariaLabel="Example list of Facepile personas"
              />
              {showOverflow && (
                  <Callout style={calloutStyle} isBeakVisible={false} role="dialog" gapSpace={0} target={overflowTarget} onDismiss={() => setShowOverflow(false)} setInitialFocus>
                      {data.slice(5).map((persona) => {
                          return <div style={personaWrapperStyle}><Persona circled text={persona.personaName} size={PersonaSize.size24} hidePersonaDetails={false} /></div>;
                      })}
                      
                  </Callout>
              )}
          </Stack>
      );
  };
  
  
  
  interface itemProps {
      name: string;
      description: string;
      status: string;
      users: string[];
  }
  
  export const SampleUserInlinePreview: React.FunctionComponent = () => {
      const pageStyles: IStackStyles = {
          root: {
              '.ms-DetailsRow': {
                  borderBottom: '1px solid #f3f2f1',
              },
              '.ms-detailsList-item-wrap': {
                  padding: '10px 0',
                  '.ms-detailsList-status-wrap': {
                      display: 'flex',
                      alignItems: 'center',
                      '.ms-detailsList-status-tip': {
                          width: '6px',
                          height: '6px',
                          marginRight: '4px',
                          backgroundColor: 'green',
                          borderRadius: '50%',
                      }
                  },
  
                  '.ms-detailsList-name-tooltip': {
                      display: 'inline-flex',
                      alignItems: 'center',
  
                      '.ms-detailsList-name-icon': {
                          marginRight: '8px'
                      }
                  },
  
                  '.ms-detailsList-link-data': {
                      fontSize: "14px"
                  }
              }
          }
      }
  
      //#region detailsList
      const columns: IColumn[] = [
          {
              key: 'name',
              name: 'Name',
          },
          {
              key: 'description',
              name: 'Description',
          },
          {
              key: 'status',
              name: 'Status',
          },
          {
              key: 'user',
              name: 'User',
          }
      ].map((column) => {
          return ({
              ...column,
              minWidth: 80,
              isResizable: true,
              maxWidth: 200,
          })
      })
  
      const items: itemProps[] = [
          { name: 'Tamara', description: 'Lorem ipsum dolor sit amet', status: 'Running', users: ["Chris Wang", "Kate Green", "Mike Blue", "Black Widow", "Scarlet Johansson", "Colin Jost", "Nancy Meyers", "Melanie Sloan", "Jane Fost"] },
          { name: 'Scottie', description: 'Lorem ipsum dolor sit amet', status: 'Running', users: ["Chris Wang", "Kate Green", "Mike Blue", "Black Widow", "Scarlet Johansson", "Colin Jost", "Nancy Meyers", "Melanie Sloan", "Jane Fost"] },
          { name: 'Kathleen', description: 'Lorem ipsum dolor sit amet', status: 'Running', users: ["Chris Wang", "Kate Green", "Mike Blue", "Black Widow", "Scarlet Johansson", "Colin Jost", "Nancy Meyers", "Melanie Sloan", "Jane Fost"] },
          { name: 'Kane', description: 'Lorem ipsum dolor sit amet', status: 'Running', users: ["Chris Wang", "Kate Green", "Mike Blue", "Black Widow", "Scarlet Johansson", "Colin Jost", "Nancy Meyers", "Melanie Sloan", "Jane Fost"] },
          { name: 'Dave', description: 'Lorem ipsum dolor sit amet', status: 'Running', users: ["Chris Wang", "Kate Green", "Mike Blue", "Black Widow", "Scarlet Johansson", "Colin Jost", "Nancy Meyers", "Melanie Sloan", "Jane Fost"] },
      ];
  
      const onRenderItemColumn: (item: itemProps, index: number, column: IColumn) => React.ReactNode = (item, _index, column) => {
          switch (column.key) {
              case "name":
                  return <div className='ms-detailsList-item-wrap'>
                      <HeadingText type={HeadingType.DefaultBold} block>
                          {item.name}
                      </HeadingText>
                  </div>
              case "description":
                  return <div className='ms-detailsList-item-wrap'>
                      <Text block>{item.description}</Text>
                  </div>;
              case "status":
                  return <div className='ms-detailsList-item-wrap'>
                      <div className='ms-detailsList-status-wrap'>
                          <div className='ms-detailsList-status-tip'></div>
                          <Text block>{item.status}</Text>
                      </div>
                  </div>;
              case "user":
                  return <div className='ms-detailsList-item-wrap'>
                      <FacepileSample users={item.users} />
                  </div>;
              default:
                  return <div></div>;
          }
      };
      //#endregion
      return (
          <Stack styles={pageStyles}>
              <ShimmeredDetailsList
                  compact
                  checkboxVisibility={CheckboxVisibility.hidden}
                  key={'detailsList'}
                  setKey={'detailsList'}
                  columns={columns}
                  items={items}
                  onRenderItemColumn={onRenderItemColumn}
              ></ShimmeredDetailsList>
          </Stack>
      );
  };`
  },
  {
    title: 'Multi-line',
    label: 'Can show additional information in one column.',
    ui: <SampleMultiLine />,
    code: `import { Stack, IColumn, Text, Link, Persona, IStackStyles, ShimmeredDetailsList, CheckboxVisibility } from "@gui/fluent-ui-allure";
    import * as React from "react";
    
    interface itemProps {
        name: string;
        description: string;
        status: string;
        link: string;
    }
    
    export const SampleMultiLine: React.FunctionComponent = () => {
        const pageStyles: IStackStyles = {
            root: {
                '.ms-DetailsRow': {
                    borderBottom: '1px solid #f3f2f1',
                    '.ms-DetailsRow-fields': {
                        height: '62px',
                        alignItems: 'center'
                    }
                },
    
                '.ms-detailsList-item-wrap': {
                    padding: '10px 0',
    
                    '.ms-detailsList-status-wrap': {
                        display: 'flex',
                        alignItems: 'center',
    
                        '.ms-detailsList-status-tip': {
                            width: '6px',
                            height: '6px',
                            marginRight: '4px',
                            backgroundColor: 'green',
                            borderRadius: '50%',
                        }
                    },
    
                    '.ms-detailsList-link-data': {
                        fontSize: "14px"
                    }
                },
    
                '.ms-detailsList-item-persona': {
                    '.ms-Persona-primaryText': {
                        fontWeight: 'bold',
                        color: '#323E4D',
                    },
    
                    '.ms-Persona-secondaryText': {
                        fontSize: '14px',
                        color: '#323E4D',
                    },
    
                    '.ms-Persona-initials': {
                        borderRadius: '8px'
                    }
                }
            }
        }
    
        //#region detailsList
        const columns: IColumn[] = [
            {
                key: 'name',
                name: 'Name',
            },
            {
                key: 'status',
                name: 'Status',
            },
            {
                key: 'link',
                name: 'Link',
            }
        ].map((column) => {
            return ({
                ...column,
                minWidth: 80,
                isResizable: true,
                maxWidth: 160,
            })
        })
    
        const items: itemProps[] = new Array(5).fill(0).map((_item, index) => {
            const _index: string = (\`\${index + 1}\`).padStart(3, '0');
            return ({
                key: \`\${_index}\`,
                name: \`name\${_index}\`,
                description: \`description\${_index}\`,
                status: \`status\${_index}\`,
                link: \`link\${_index}\`,
            })
        })
    
        const onRenderItemColumn: (item: itemProps, index: number, column: IColumn) => React.ReactNode = (item, _index, column) => {
            switch (column.key) {
                case "name":
                    return <Persona
                        className='ms-detailsList-item-persona'
                        coinSize={40}
                        text={item.name}
                        secondaryText={item.description}
                        hidePersonaDetails={false}
                    />
                case "status":
                    return <div className='ms-detailsList-item-wrap'>
                        <div className='ms-detailsList-status-wrap'>
                            <div className='ms-detailsList-status-tip'></div>
                            <Text block>{item.status}</Text>
                        </div>
                    </div>;
                case "link":
                    return <div className='ms-detailsList-item-wrap'>
                        <Link className='ms-detailsList-link-data' underline>Link to data</Link>
                    </div>;
                default:
                    return <div></div>;
            }
        };
        //#endregion
        return (
            <Stack styles={pageStyles}>
                <ShimmeredDetailsList
                    compact
                    checkboxVisibility={CheckboxVisibility.hidden}
                    key={'detailsList'}
                    setKey={'detailsList'}
                    columns={columns}
                    items={items}
                    onRenderItemColumn={onRenderItemColumn}
                ></ShimmeredDetailsList>
            </Stack>
        );
    };`
  },
  {
    title: 'Custom',
    label:
      'You can choose whether to use Views, Advanced Search, pagination method and table style. They are all flexible. The following control is a demo to show what the whole table looks like.',
    ui: <SampleCustom />,
    code: `import { Stack, IColumn, Text, Link, Persona, IStackStyles, ShimmeredDetailsList, CheckboxVisibility } from "@gui/fluent-ui-allure";
    import * as React from "react";
    
    interface itemProps {
        name: string;
        description: string;
        status: string;
        link: string;
    }
    
    export const SampleMultiLine: React.FunctionComponent = () => {
        const pageStyles: IStackStyles = {
            root: {
                '.ms-DetailsRow': {
                    borderBottom: '1px solid #f3f2f1',
                    '.ms-DetailsRow-fields': {
                        height: '62px',
                        alignItems: 'center'
                    }
                },
    
                '.ms-detailsList-item-wrap': {
                    padding: '10px 0',
    
                    '.ms-detailsList-status-wrap': {
                        display: 'flex',
                        alignItems: 'center',
    
                        '.ms-detailsList-status-tip': {
                            width: '6px',
                            height: '6px',
                            marginRight: '4px',
                            backgroundColor: 'green',
                            borderRadius: '50%',
                        }
                    },
    
                    '.ms-detailsList-link-data': {
                        fontSize: "14px"
                    }
                },
    
                '.ms-detailsList-item-persona': {
                    '.ms-Persona-primaryText': {
                        fontWeight: 'bold',
                        color: '#323E4D',
                    },
    
                    '.ms-Persona-secondaryText': {
                        fontSize: '14px',
                        color: '#323E4D',
                    },
    
                    '.ms-Persona-initials': {
                        borderRadius: '8px'
                    }
                }
            }
        }
    
        //#region detailsList
        const columns: IColumn[] = [
            {
                key: 'name',
                name: 'Name',
            },
            {
                key: 'status',
                name: 'Status',
            },
            {
                key: 'link',
                name: 'Link',
            }
        ].map((column) => {
            return ({
                ...column,
                minWidth: 80,
                isResizable: true,
                maxWidth: 160,
            })
        })
    
        const items: itemProps[] = new Array(5).fill(0).map((_item, index) => {
            const _index: string = (\`\${index + 1}\`).padStart(3, '0');
            return ({
                key: \`\${_index}\`,
                name: \`name\${_index}\`,
                description: \`description\${_index}\`,
                status: \`status\${_index}\`,
                link: \`link\${_index}\`,
            })
        })
    
        const onRenderItemColumn: (item: itemProps, index: number, column: IColumn) => React.ReactNode = (item, _index, column) => {
            switch (column.key) {
                case "name":
                    return <Persona
                        className='ms-detailsList-item-persona'
                        coinSize={40}
                        text={item.name}
                        secondaryText={item.description}
                        hidePersonaDetails={false}
                    />
                case "status":
                    return <div className='ms-detailsList-item-wrap'>
                        <div className='ms-detailsList-status-wrap'>
                            <div className='ms-detailsList-status-tip'></div>
                            <Text block>{item.status}</Text>
                        </div>
                    </div>;
                case "link":
                    return <div className='ms-detailsList-item-wrap'>
                        <Link className='ms-detailsList-link-data' underline>Link to data</Link>
                    </div>;
                default:
                    return <div></div>;
            }
        };
        //#endregion
        return (
            <Stack styles={pageStyles}>
                <ShimmeredDetailsList
                    compact
                    checkboxVisibility={CheckboxVisibility.hidden}
                    key={'detailsList'}
                    setKey={'detailsList'}
                    columns={columns}
                    items={items}
                    onRenderItemColumn={onRenderItemColumn}
                ></ShimmeredDetailsList>
            </Stack>
        );
    };`
  }
]
