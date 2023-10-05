import {
  TreeView,
  TreeViewExpandChangeEvent,
  TreeViewItemClickEvent,
  processTreeViewItems
} from '@gui/fluent-ui-allure'
import { useState } from 'react'

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
interface TreeViewDataItem {
  id: string
  text: string
  expanded?: boolean
  selected?: boolean
  items?: TreeViewDataItem[]
}
export const SampleBasic = () => {
  const [expand, setExpand] = useState({ ids: ['1', '2-2'], idField: 'id' })
  const [select, setSelect] = useState([''])
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
        onExpandChange={onExpandChange}
        onItemClick={onItemClick}
      />
    </div>
  )
}
