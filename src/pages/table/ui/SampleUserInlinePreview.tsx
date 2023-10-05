import {
  Stack,
  IColumn,
  TooltipHost,
  HeadingText,
  HeadingType,
  Text,
  IStackStyles,
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
} from '@gui/fluent-ui-allure'
import * as React from 'react'

interface IFacepileSampleProps {
  users: string[]
}

const FacepileSample = (props: IFacepileSampleProps) => {
  const data = props.users.map<IFacepilePersona>((user) => {
    return { personaName: user }
  })

  const overflowButtonProps = {
    ariaLabel: 'More users',
    onClick: (ev: React.MouseEvent<HTMLButtonElement>) => {
      setOverflowTarget(ev.target)
      setShowOverflow(true)
    },
    title: ''
  }
  const styles: Partial<IFacepileStyles> = {
    members: {
      selectors: {
        '.ms-Facepile-member:not(:first-child)': {
          marginLeft: -9
        }
      }
    },
    descriptiveOverflowButton: {
      marginLeft: -9
    }
  }
  const calloutStyle: React.CSSProperties = {
    width: 260,
    maxHeight: 300,
    padding: 0,
    overflowY: 'auto',
    overflowX: 'hidden',
    boxShadow: '0px 2px 12px #323E4D29'
  }
  const personaWrapperStyle: React.CSSProperties = {
    height: 40,
    padding: 8
  }
  const getPersonaCoinControl = (persona: IFacepilePersona): JSX.Element | null => {
    return (
      <TooltipHost content={persona.personaName}>
        <PersonaCoin allowPhoneInitials={false} text={persona.personaName} size={PersonaSize.size24} />
      </TooltipHost>
    )
  }
  const [overflowTarget, setOverflowTarget] = React.useState(null)
  const [showOverflow, setShowOverflow] = React.useState(false)
  return (
    <Stack horizontal verticalAlign='center' tokens={{ childrenGap: 16 }}>
      <Facepile
        styles={styles}
        showTooltip={false}
        maxDisplayablePersonas={5}
        overflowButtonType={OverflowButtonType.descriptive}
        overflowButtonProps={overflowButtonProps}
        personaSize={PersonaSize.size24}
        onRenderPersonaCoin={getPersonaCoinControl}
        personas={data}
        ariaDescription='To move through the items use left and right arrow keys.'
        ariaLabel='Example list of Facepile personas'
      />
      {showOverflow && (
        <Callout
          style={calloutStyle}
          isBeakVisible={false}
          role='dialog'
          gapSpace={0}
          target={overflowTarget}
          onDismiss={() => setShowOverflow(false)}
          setInitialFocus
        >
          {data.slice(5).map((persona) => {
            return (
              <div style={personaWrapperStyle}>
                <Persona circled text={persona.personaName} size={PersonaSize.size24} hidePersonaDetails={false} />
              </div>
            )
          })}
        </Callout>
      )}
    </Stack>
  )
}

interface itemProps {
  name: string
  description: string
  status: string
  users: string[]
}

export const SampleUserInlinePreview: React.FunctionComponent = () => {
  const pageStyles: IStackStyles = {
    root: {
      '.ms-DetailsRow': {
        borderBottom: '1px solid #f3f2f1'
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
            borderRadius: '50%'
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
          fontSize: '14px'
        }
      }
    }
  }

  //#region detailsList
  const columns: IColumn[] = [
    {
      key: 'name',
      name: 'Name'
    },
    {
      key: 'description',
      name: 'Description'
    },
    {
      key: 'status',
      name: 'Status'
    },
    {
      key: 'user',
      name: 'User'
    }
  ].map((column) => {
    return {
      ...column,
      minWidth: 80,
      isResizable: true,
      maxWidth: 200
    }
  })

  const items: itemProps[] = [
    {
      name: 'Tamara',
      description: 'Lorem ipsum dolor sit amet',
      status: 'Running',
      users: [
        'Chris Wang',
        'Kate Green',
        'Mike Blue',
        'Black Widow',
        'Scarlet Johansson',
        'Colin Jost',
        'Nancy Meyers',
        'Melanie Sloan',
        'Jane Fost'
      ]
    },
    {
      name: 'Scottie',
      description: 'Lorem ipsum dolor sit amet',
      status: 'Running',
      users: [
        'Chris Wang',
        'Kate Green',
        'Mike Blue',
        'Black Widow',
        'Scarlet Johansson',
        'Colin Jost',
        'Nancy Meyers',
        'Melanie Sloan',
        'Jane Fost'
      ]
    },
    {
      name: 'Kathleen',
      description: 'Lorem ipsum dolor sit amet',
      status: 'Running',
      users: [
        'Chris Wang',
        'Kate Green',
        'Mike Blue',
        'Black Widow',
        'Scarlet Johansson',
        'Colin Jost',
        'Nancy Meyers',
        'Melanie Sloan',
        'Jane Fost'
      ]
    },
    {
      name: 'Kane',
      description: 'Lorem ipsum dolor sit amet',
      status: 'Running',
      users: [
        'Chris Wang',
        'Kate Green',
        'Mike Blue',
        'Black Widow',
        'Scarlet Johansson',
        'Colin Jost',
        'Nancy Meyers',
        'Melanie Sloan',
        'Jane Fost'
      ]
    },
    {
      name: 'Dave',
      description: 'Lorem ipsum dolor sit amet',
      status: 'Running',
      users: [
        'Chris Wang',
        'Kate Green',
        'Mike Blue',
        'Black Widow',
        'Scarlet Johansson',
        'Colin Jost',
        'Nancy Meyers',
        'Melanie Sloan',
        'Jane Fost'
      ]
    }
  ]

  const onRenderItemColumn: (item: itemProps, index: number, column: IColumn) => React.ReactNode = (
    item,
    _index,
    column
  ) => {
    switch (column.key) {
      case 'name':
        return (
          <div className='ms-detailsList-item-wrap'>
            <HeadingText type={HeadingType.DefaultBold} block>
              {item.name}
            </HeadingText>
          </div>
        )
      case 'description':
        return (
          <div className='ms-detailsList-item-wrap'>
            <Text block>{item.description}</Text>
          </div>
        )
      case 'status':
        return (
          <div className='ms-detailsList-item-wrap'>
            <div className='ms-detailsList-status-wrap'>
              <div className='ms-detailsList-status-tip'></div>
              <Text block>{item.status}</Text>
            </div>
          </div>
        )
      case 'user':
        return (
          <div className='ms-detailsList-item-wrap'>
            <FacepileSample users={item.users} />
          </div>
        )
      default:
        return <div></div>
    }
  }
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
  )
}
