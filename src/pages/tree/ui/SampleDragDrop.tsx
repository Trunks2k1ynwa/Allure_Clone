import {
  TreeView,
  TreeViewExpandChangeEvent,
  TreeViewItemClickEvent,
  processTreeViewItems,
  Icon,
  ItemRenderProps,
  TreeViewItemDragOverEvent,
  TreeViewItemDragEndEvent,
  TreeViewDragAnalyzer,
  moveTreeViewItem,
  TreeViewDragClue
} from '@gui/fluent-ui-allure'
import { useRef, useState } from 'react'
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
export const SampleIcon = () => {
  const [expand, setExpand] = useState({ ids: ['1', '2-1', '2-2'], idField: 'id' })
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
        item={TreeItem}
        onExpandChange={onExpandChange}
        aria-multiselectable={true}
        onItemClick={onItemClick}
      />
    </div>
  )
}
interface TreeViewDataItem {
  id: string
  text: string
  expanded?: boolean
  checked?: boolean
  selected?: boolean
  items?: TreeViewDataItem[]
}

const treeData: TreeViewDataItem[] = [
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
export const SampleDragDrop = () => {
  const dragClue = useRef<any>()
  const dragOverCnt = useRef<number>(0)
  const isDragDrop = useRef<boolean>(false)
  const [tree, setTree] = useState(treeData)
  const [expand, setExpand] = useState({ ids: ['1'], idField: 'id' })
  const [selected, setSelected] = useState([''])

  const getClueClassName = (event: any) => {
    const eventAnalyzer = new TreeViewDragAnalyzer(event).init()

    if (eventAnalyzer.isDropAllowed) {
      switch (eventAnalyzer.getDropOperation()) {
        case 'child':
          return 'dragdrop-child'
        case 'before':
          return 'dragdrop-before'
        case 'after':
          return 'dragdrop-after'
        default:
          break
      }
    }

    return 'k-i-cancel'
  }
  const DOM_KENDO_ITEM_ID_FIELD = '_kendoItemId'
  const getElement = (x: number, y: number): { element: Element; id: string } => {
    let node = document.elementFromPoint(x, y) as any
    while (node && !node[DOM_KENDO_ITEM_ID_FIELD]) {
      node = node.parentNode
    }
    if (node && node[DOM_KENDO_ITEM_ID_FIELD]) {
      return { element: node, id: node[DOM_KENDO_ITEM_ID_FIELD] }
    }
    return { element: node, id: '' }
  }

  const onItemDragOver = (event: TreeViewItemDragOverEvent) => {
    const { target } = event
    const { element } = getElement(event.clientX, event.clientY)
    const className = getClueClassName(event)
    target.element.querySelectorAll('div.k-treeview-mid').forEach((item) => {
      item.classList.remove('dragdrop-child', 'dragdrop-before', 'dragdrop-after')
    })
    element.classList.add(className)
    dragOverCnt.current++
    dragClue.current.show(event.pageY + 10, event.pageX, event.item.text, '')
  }

  const onItemDragEnd = (event: TreeViewItemDragEndEvent) => {
    isDragDrop.current = dragOverCnt.current > 0
    dragOverCnt.current = 0
    dragClue.current.hide()
    event.target.element.querySelectorAll('div.k-treeview-mid').forEach((item) => {
      item.classList.remove('dragdrop-child', 'dragdrop-before', 'dragdrop-after', 'k-i-cancel')
    })
    const eventAnalyzer = new TreeViewDragAnalyzer(event).init()

    if (eventAnalyzer.isDropAllowed) {
      const updatedTree: any = moveTreeViewItem(
        event.itemHierarchicalIndex,
        tree,
        eventAnalyzer.getDropOperation() || 'child',
        eventAnalyzer.destinationMeta.itemHierarchicalIndex
      )
      setTree(updatedTree)
      if (selected.includes(event.itemHierarchicalIndex)) {
        // 移动的是被选中的节点
        setSelected([eventAnalyzer.destinationMeta.itemHierarchicalIndex])
      }
    }
  }
  const onItemClick = (event: TreeViewItemClickEvent) => {
    // if (!isDragDrop.current) {
    setSelected([event.itemHierarchicalIndex])
    // }
  }
  const onExpandChange = (event: TreeViewExpandChangeEvent) => {
    // if (!isDragDrop.current) {
    const ids = expand.ids.slice()
    const index = ids.indexOf(event.item.id)

    index === -1 ? ids.push(event.item.id) : ids.splice(index, 1)
    setExpand({ ids, idField: 'id' })
    // }
  }

  return (
    <div style={{ width: 430 }}>
      <TreeView
        data={processTreeViewItems(tree, { select: selected, expand: expand })}
        draggable={true}
        onItemDragOver={onItemDragOver}
        onItemDragEnd={onItemDragEnd}
        expandIcons={true}
        onExpandChange={onExpandChange}
        aria-multiselectable={true}
        onItemClick={onItemClick}
      />
      <TreeViewDragClue
        style={{
          display: 'flex',
          height: 40,
          width: 430,
          background: '#FFFFFFE6 0% 0% ',
          boxShadow: '0px 0px 12px #00000029'
        }}
        ref={dragClue}
      />
    </div>
  )
}
