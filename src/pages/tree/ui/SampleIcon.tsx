import * as React from 'react'

import {
  TreeView,
  TreeViewExpandChangeEvent,
  ItemRenderProps,
  TreeViewItemClickEvent,
  processTreeViewItems,
  Icon
} from '@gui/fluent-ui-allure'

interface TreeViewDataItem {
  id: string
  text: string
  expanded?: boolean
  selected?: boolean
  items?: TreeViewDataItem[]
}

const tree: TreeViewDataItem[] = [
  {
    id: '1',
    text: 'Nutrition',
    items: [
      {
        id: '2-1',
        text: 'Vegetables',
        items: [
          {
            id: '2-1-1',
            text: 'Carrot'
          },
          {
            id: '2-1-2',
            text: 'Potato'
          },
          {
            id: '2-1-3',
            text: 'Cabbage'
          }
        ]
      },
      {
        id: '2-2',
        text: 'Fats',
        items: [
          {
            id: '2-2-1',
            text: 'Oil'
          },
          {
            id: '2-2-2',
            text: 'Nuts'
          }
        ]
      },
      {
        id: '2-3',
        text: 'Proteins',
        items: [
          {
            id: '2-3-1',
            text: 'Egg'
          },
          {
            id: '2-3-2',
            text: 'Fish'
          },
          {
            id: '2-3-3',
            text: 'Milk'
          }
        ]
      }
    ]
  }
]

const TreeItem = (props: ItemRenderProps) => {
  const item = props.item as TreeViewDataItem
  let iconName = 'far-file-lines'
  if (item.id.length == 1 || item.id.length == 3) {
    iconName = item.expanded ? 'far-folder-open' : 'far-folder'
  }

  return (
    <span>
      <Icon style={{ marginRight: 10, width: 16 }} iconName={iconName} />
      {item.text}
    </span>
  )
}

export const SampleIcon = () => {
  const [expand, setExpand] = React.useState({ ids: ['1', '2-1', '2-2'], idField: 'id' })
  const [select, setSelect] = React.useState([''])
  const onItemClick = (event: TreeViewItemClickEvent) => {
    setSelect([event.itemHierarchicalIndex])
  }
  const onExpandChange = (event: TreeViewExpandChangeEvent) => {
    const ids = expand.ids.slice()
    const index = ids.indexOf(event.item.id)

    index === -1 ? ids.push(event.item.id) : ids.splice(index, 1)
    setExpand({ ids, idField: 'id' })
  }

  return (
    <div style={{ width: 430 }}>
      <TreeView
        data={processTreeViewItems(tree, { select: select, expand: expand })}
        expandIcons={true}
        item={TreeItem}
        onExpandChange={onExpandChange}
        aria-multiselectable={true}
        onItemClick={onItemClick}
      />
    </div>
  )
}
