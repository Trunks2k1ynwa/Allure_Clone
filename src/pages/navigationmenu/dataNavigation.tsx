import * as React from 'react'
import { INavLinkGroup, INavLink, Nav } from '@gui/fluent-ui-allure'

const sidebarStyle = {
  width: 'fit-content',
  height: 500
  // background: '#171D24'
}

const logoStyle = {
  padding: '12px 16px'
}

const imageStyle: React.CSSProperties = {
  maxHeight: 48,
  maxWidth: 180
}

const navs: INavLinkGroup[] = [
  {
    links: [
      {
        name: 'Dashboard',
        url: '#/navigationmenu',
        key: 'k1',
        iconProps: {
          iconName: 'fas-chart-pie'
        }
      },
      {
        name: 'User Management',
        title: 'User Management',
        url: '',
        iconProps: {
          iconName: 'fas-user'
        },
        isExpanded: true,
        key: 'k2',
        links: [
          {
            name: 'Sub nav item1',
            url: '#/navigationmenu',
            iconProps: {
              iconName: 'fas-arrow-right'
            },
            key: 'k21'
          },
          {
            name: 'Sub nav item2',
            url: '#/navigationmenu',
            iconProps: {
              iconName: 'fas-arrow-right'
            },
            key: 'k22'
          },
          {
            name: 'Sub nav item3',
            url: '#/navigationmenu',
            iconProps: {
              iconName: 'fas-arrow-right'
            },
            key: 'k23'
          }
        ]
      },
      {
        name: 'User Management with long title',
        title: 'User Management with long title',
        url: '',
        iconProps: {
          iconName: 'fas-user'
        },
        isExpanded: true,
        key: 'k202',
        links: [
          {
            name: 'Sub nav item1 with long long titlelong long titlelong long titlelong long titlelong long titleg titlelong long titlelong long titleg titlelong long titlelong long titleg titlelong long titlelong long title',
            url: '#/navigationmenu',
            iconProps: {
              iconName: 'fas-arrow-right'
            },
            key: 'k212'
          },
          {
            name: 'Sub nav item2',
            url: '#/navigationmenu',
            iconProps: {
              iconName: 'fas-arrow-right'
            },
            key: 'k222'
          }
        ]
      },
      {
        name: 'Templates',
        url: '#/navigationmenu',
        iconProps: {
          iconName: 'fas-layer-group'
        },
        key: 'k5'
      }
    ]
  },
  {
    links: [
      {
        name: 'Help',
        url: '#/navigationmenu',
        iconProps: {
          iconName: 'fas-circle-question'
        },
        key: 'k8'
      },
      {
        name: 'Settings',
        url: '#/navigationmenu',
        iconProps: {
          iconName: 'fas-gear'
        },
        key: 'k9'
      }
    ]
  }
]

interface IState {
  selectedKey: string
  isCollapsed: boolean
}

export class NavView extends React.Component<unknown, IState> {
  constructor(props: any) {
    super(props)
    this.state = { selectedKey: 'k1', isCollapsed: false }
  }
  _onLinkClick(ev?: any, item?: INavLink) {
    this.setState({ selectedKey: item?.key })
  }
  _onCollapsedCheck(isCollapsed?: boolean) {
    this.setState({ isCollapsed: isCollapsed })
  }
  setLogo(): JSX.Element {
    return (
      <div style={logoStyle}>
        <img
          style={imageStyle}
          src={'https://res.cdn.avepointonlineservices.com/onlineproductlogo/allure_in_dark.png'}
        />
      </div>
    )
  }

  render() {
    return (
      <div style={sidebarStyle}>
        <Nav
          enableAnimationEffect={true}
          onLinkClick={(e, i) => this._onLinkClick(e, i)}
          selectedKey={this.state.selectedKey}
          groups={navs1}
          onRenderLogo={this.setLogo}
          onCollapsedCheck={(i) => this._onCollapsedCheck(i)}
          expandTooltip='Expand'
          collapseTooltip='Collapse'
          isCollapsed={this.state.isCollapsed}
        />
      </div>
    )
  }
}
const sidebarStyle1 = {
  width: 'fit-content',
  height: 500,
  background: '#171D24'
}

const logoStyle1 = {
  display: 'flex'
}

const imageStyle1: React.CSSProperties = {
  width: 48,
  height: 48,
  margin: 'auto'
}

const navs1: INavLinkGroup[] = [
  {
    links: [
      {
        name: 'Dashboard',
        url: '#/navigationmenu',
        key: 'k1',
        iconProps: {
          iconName: 'fas-chart-pie'
        }
      },
      {
        name: 'User Management',
        title: 'User Management',
        url: '',
        iconProps: {
          iconName: 'fas-user'
        },
        isExpanded: true,
        key: 'k2',
        links: [
          {
            name: 'Sub nav item1',
            url: '#/navigationmenu',
            iconProps: {
              iconName: 'fas-arrow-right'
            },
            key: 'k21'
          },
          {
            name: 'Sub nav item2',
            url: '#/navigationmenu',
            iconProps: {
              iconName: 'fas-arrow-right'
            },
            key: 'k22'
          },
          {
            name: 'Sub nav item3',
            url: '#/navigationmenu',
            iconProps: {
              iconName: 'fas-arrow-right'
            },
            key: 'k23'
          }
        ]
      },
      {
        name: 'Templates',
        url: '#/navigationmenu',
        iconProps: {
          iconName: 'fas-layer-group'
        },
        key: 'k5'
      }
    ]
  },
  {
    links: [
      {
        name: 'Help',
        url: '#/navigationmenu',
        iconProps: {
          iconName: 'fas-circle-question'
        },
        key: 'k8'
      },
      {
        name: 'Settings',
        url: '#/navigationmenu',
        iconProps: {
          iconName: 'fas-gear'
        },
        key: 'k9'
      }
    ]
  }
]

// interface IProps {
// }

interface IState {
  selectedKey: string
}

export class NavigationCollapsedView extends React.Component<unknown, IState> {
  constructor(props: any) {
    super(props)
    this.state = { selectedKey: 'k1' }
  }
  _onLinkClick(ev?: any, item?: INavLink) {
    console.log(ev)
    this.setState({ selectedKey: item?.key })
  }
  setLogo(): JSX.Element {
    return (
      <div style={logoStyle1}>
        <img style={imageStyle1} src='logo.png' />
      </div>
    )
  }

  render() {
    return (
      <div style={sidebarStyle1}>
        <Nav
          onLinkClick={(e, i) => this._onLinkClick(e, i)}
          selectedKey={this.state.selectedKey}
          groups={navs}
          onRenderLogo={this.setLogo}
          collapsedMode={true}
        />
      </div>
    )
  }
}
export const dataNavigation = [
  {
    ui: <NavView />,
    code: `import * as React from 'react';
    import { INavLinkGroup, INavLink, Nav } from '@gui/fluent-ui-allure';
    
    const sidebarStyle = {
      width: 'fit-content',
      height: 500,
      // background: '#171D24'
    };
    
    const logoStyle = {
      padding: "12px 16px"
    };
    
    const imageStyle: React.CSSProperties = {
      maxHeight: 48,
      maxWidth: 180
    };
    
    const navs: INavLinkGroup[] = [
      {
        links: [
          {
            name: 'Dashboard',
            url: '#/navigationmenu',
            key: 'k1',
            iconProps: {
              iconName: 'fas-chart-pie'
            },
          },
          {
            name: 'User Management',
            title: 'User Management',
            url: '',
            iconProps: {
              iconName: 'fas-user'
            },
            isExpanded: true,
            key: 'k2',
            links: [
              {
                name: 'Sub nav item1',
                url: '#/navigationmenu',
                iconProps: {
                  iconName: 'fas-arrow-right'
                },
                key: 'k21',
              },
              {
                name: 'Sub nav item2',
                url: '#/navigationmenu',
                iconProps: {
                  iconName: 'fas-arrow-right'
                },
                key: 'k22',
              },
              {
                name: 'Sub nav item3',
                url: '#/navigationmenu',
                iconProps: {
                  iconName: 'fas-arrow-right'
                },
                key: 'k23',
              }
            ]
          },
          {
            name: 'User Management with long title',
            title: 'User Management with long title',
            url: '',
            iconProps: {
              iconName: 'fas-user'
            },
            isExpanded: true,
            key: 'k202',
            links: [
              {
                name: 'Sub nav item1 with long long titlelong long titlelong long titlelong long titlelong long titleg titlelong long titlelong long titleg titlelong long titlelong long titleg titlelong long titlelong long title',
                url: '#/navigationmenu',
                iconProps: {
                  iconName: 'fas-arrow-right'
                },
                key: 'k212',
              },
              {
                name: 'Sub nav item2',
                url: '#/navigationmenu',
                iconProps: {
                  iconName: 'fas-arrow-right'
                },
                key: 'k222',
              }
            ]
          },
          {
            name: 'Templates',
            url: '#/navigationmenu',
            iconProps: {
              iconName: 'fas-layer-group'
            },
            key: 'k5',
          }
        ]
      },
      {
        links: [
          {
            name: 'Help',
            url: '#/navigationmenu',
            iconProps: {
              iconName: 'fas-circle-question'
            },
            key: 'k8',
          },
          {
            name: 'Settings',
            url: '#/navigationmenu',
            iconProps: {
              iconName: 'fas-gear'
            },
            key: 'k9',
          }
        ]
      }
    ];
    
    
    // interface IProps {
    // }
    
    interface IState {
      selectedKey: string;
      isCollapsed: boolean;
    }
    
    export class NavView extends React.Component<unknown, IState> {
      constructor(props: any) {
        super(props);
        this.state = { selectedKey: 'k1', isCollapsed: false };
      }
      _onLinkClick(ev?: any, item?: INavLink) {
        this.setState({ selectedKey: item.key });
      }
      _onCollapsedCheck(isCollapsed?: boolean) {
        this.setState({ isCollapsed: isCollapsed });
      }
      setLogo(): JSX.Element {
        return <div style={logoStyle}>
          <img style={imageStyle} src={"https://res.cdn.avepointonlineservices.com/onlineproductlogo/allure_in_dark.png"} />
        </div>
      }
    
      render() {
        return (
          <div style={sidebarStyle}>
            <Nav
              enableAnimationEffect={true}
              onLinkClick={(e, i) => this._onLinkClick(e, i)}
              selectedKey={this.state.selectedKey}
              groups={navs}
              onRenderLogo={this.setLogo}
              onCollapsedCheck={(i) => this._onCollapsedCheck(i)}
              expandTooltip="Expand"
              collapseTooltip="Collapse"
              isCollapsed={this.state.isCollapsed} />
          </div>
    
        );
      }
    }`
  },
  {
    ui: <NavigationCollapsedView />,
    code: `import * as React from 'react';
    import { INavLinkGroup, INavLink, Nav } from '@gui/fluent-ui-allure';
    import { Logo } from '../../../server/Images';
    const sidebarStyle = {
      width: 'fit-content',
      height: 500,
      background: '#171D24'
    };
    
    const logoStyle = {
      display: 'flex',
    };
    
    const imageStyle: React.CSSProperties = {
      width: 48,
      height: 48,
      margin: 'auto'
    };
    
    const navs: INavLinkGroup[] = [
      {
        links: [
          {
            name: 'Dashboard',
            url: '#/navigationmenu',
            key: 'k1',
            iconProps: {
              iconName: 'fas-chart-pie'
            },
          },
          {
            name: 'User Management',
            title:'User Management',
            url: '',
            iconProps: {
              iconName: 'fas-user'
            },
            isExpanded: true,
            key: 'k2',
            links: [
              {
                name: 'Sub nav item1',
                url: '#/navigationmenu',
                iconProps: {
                  iconName: 'fas-arrow-right'
                },
                key: 'k21',
              },
              {
                name: 'Sub nav item2',
                url: '#/navigationmenu',
                iconProps: {
                  iconName: 'fas-arrow-right'
                },
                key: 'k22',
              },
              {
                name: 'Sub nav item3',
                url: '#/navigationmenu',
                iconProps: {
                  iconName: 'fas-arrow-right'
                },
                key: 'k23',
              }
            ]
          },
          {
            name: 'Templates',
            url: '#/navigationmenu',
            iconProps: {
              iconName: 'fas-layer-group'
            },
            key: 'k5',
          }
        ]
      },
      {
        links: [
          {
            name: 'Help',
            url: '#/navigationmenu',
            iconProps: {
              iconName: 'fas-circle-question'
            },
            key: 'k8',
          },
          {
            name: 'Settings',
            url: '#/navigationmenu',
            iconProps: {
              iconName: 'fas-gear'
            },
            key: 'k9',
          }
        ]
      }
    ];
    
    // interface IProps {
    // }
    
    interface IState {
      selectedKey: string;
    }
    
    export class NavigationCollapsedView extends React.Component<unknown, IState> {
      constructor(props: any) {
        super(props);
        this.state = { selectedKey: 'k1' };
      }
      _onLinkClick(ev?: any, item?: INavLink) {
        console.log(ev);
        this.setState({ selectedKey: item.key });
      }
      setLogo(): JSX.Element {
        return <div style={logoStyle}>
          <img style={imageStyle} src={Logo} />
        </div>
      }
    
      render() {
        return (
          <div style={sidebarStyle}>
            <Nav
              onLinkClick={(e, i) => this._onLinkClick(e, i)}
              selectedKey={this.state.selectedKey}
              groups={navs}
              onRenderLogo={this.setLogo}
              collapsedMode={true} />
          </div>
        );
      }
    }const sidebarStyle = {
      width: 'fit-content',
      height: 500,
      background: '#171D24'
    };
    
    const logoStyle = {
      display: 'flex',
    };
    
    const imageStyle: React.CSSProperties = {
      width: 48,
      height: 48,
      margin: 'auto'
    };
    
    const navs: INavLinkGroup[] = [
      {
        links: [
          {
            name: 'Dashboard',
            url: '#/navigationmenu',
            key: 'k1',
            iconProps: {
              iconName: 'fas-chart-pie'
            },
          },
          {
            name: 'User Management',
            title:'User Management',
            url: '',
            iconProps: {
              iconName: 'fas-user'
            },
            isExpanded: true,
            key: 'k2',
            links: [
              {
                name: 'Sub nav item1',
                url: '#/navigationmenu',
                iconProps: {
                  iconName: 'fas-arrow-right'
                },
                key: 'k21',
              },
              {
                name: 'Sub nav item2',
                url: '#/navigationmenu',
                iconProps: {
                  iconName: 'fas-arrow-right'
                },
                key: 'k22',
              },
              {
                name: 'Sub nav item3',
                url: '#/navigationmenu',
                iconProps: {
                  iconName: 'fas-arrow-right'
                },
                key: 'k23',
              }
            ]
          },
          {
            name: 'Templates',
            url: '#/navigationmenu',
            iconProps: {
              iconName: 'fas-layer-group'
            },
            key: 'k5',
          }
        ]
      },
      {
        links: [
          {
            name: 'Help',
            url: '#/navigationmenu',
            iconProps: {
              iconName: 'fas-circle-question'
            },
            key: 'k8',
          },
          {
            name: 'Settings',
            url: '#/navigationmenu',
            iconProps: {
              iconName: 'fas-gear'
            },
            key: 'k9',
          }
        ]
      }
    ];
    
    // interface IProps {
    // }
    
    interface IState {
      selectedKey: string;
    }
    
    export class NavigationCollapsedView extends React.Component<unknown, IState> {
      constructor(props: any) {
        super(props);
        this.state = { selectedKey: 'k1' };
      }
      _onLinkClick(ev?: any, item?: INavLink) {
        console.log(ev);
        this.setState({ selectedKey: item.key });
      }
      setLogo(): JSX.Element {
        return <div style={logoStyle}>
          <img style={imageStyle} src={Logo} />
        </div>
      }
    
      render() {
        return (
          <div style={sidebarStyle}>
            <Nav
              onLinkClick={(e, i) => this._onLinkClick(e, i)}
              selectedKey={this.state.selectedKey}
              groups={navs}
              onRenderLogo={this.setLogo}
              collapsedMode={true} />
          </div>
        );
      }
    }`
  }
]
