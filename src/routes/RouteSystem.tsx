import Introduction from '@@/introduction'
import Winzard from '@@/winzard'
import ActivityTimeline from '@@/activitytimeline'
import AutoComplete from '@@/autocomplete'
import Avatar from '@@/avatar'
import Breadcumb from '@@/breadcumb'
import Button from '@@/button'
import Calendar from '@@/calendar'
import Carousel from '@@/carousel'
import ChangeLog from '@@/changelog'
import Checkbox from '@@/checkbox'
import CommonI18N from '@@/commoni18n'
import CommonProduct from '@@/commonproduct'
import DatePicker from '@@/datepicker'
import DesignPriciplePage from '@@/designpricible'
import Dialog from '@@/dialog'
import Expander from '@@/expander'
import FileUploader from '@@/fileuploader'
import Filters from '@@/filters'
import Icon from '@@/icon'
import IconGallery from '@@/icongallery'
import Input from '@@/input'
import Loading from '@@/loading'
import Message from '@@/message'
import Modal from '@@/modal'
import NavigationMenu from '@@/navigationmenu'
import NavigationMenuLight from '@@/navigationmenulight'
import Notification from '@@/notification'
import Pagination from '@@/pagination'
import Panel from '@@/panel'
import PeoplePicker from '@@/peoplepicker'
import Popover from '@@/popover'
import Progress from '@@/progress'
import RadioButton from '@@/radiobutton'
import Select from '@@/select'
import Switch from '@@/switch'
import Tab from '@@/tab'
import Table from '@@/table'
import TimePicker from '@@/timepicker'
import Tooltips from '@@/tooltips'
import Tree from '@@/tree'
import Typography from '@@/typography'
import Waffle from '@@/waffle'

type Route = {
  titleGroup: string
  routes: { title: string; to: string; target?: string; icon?: boolean; element?: React.ReactNode }[]
}
export const listRoute: Route[] = [
  {
    titleGroup: 'Allure Design System',
    routes: [
      {
        title: 'Introduction',
        to: '/',
        element: <Introduction />
      },
      {
        title: 'Design principle',
        to: 'design-princible',
        element: <DesignPriciplePage />
      },
      {
        title: 'Design standard',
        to: 'https://xd.adobe.com/view/34543319-c6da-4dd9-be05-fe7b01ae133b-6107/',
        target: '_blank'
      },
      {
        title: 'Change log',
        to: 'change-log',
        element: <ChangeLog />
      }
    ]
  },
  {
    titleGroup: 'Basic',
    routes: [
      {
        title: 'Button',
        to: 'button',
        element: <Button />
      },
      {
        title: 'Icon Gallery',
        to: 'icon-gallery',
        element: <IconGallery />
      },
      {
        title: 'Icon',
        to: 'icon',
        element: <Icon />
      },
      {
        title: 'Common I18N Terms',
        to: 'common-i18n-terms',
        element: <CommonI18N />
      },
      {
        title: 'Common Product',
        to: 'common-product',
        element: <CommonProduct />
      },
      {
        title: 'Typography',
        to: 'typography',
        element: <Typography />
      }
    ]
  },
  {
    titleGroup: 'Navigation',
    routes: [
      {
        title: 'Breadcumb',
        to: 'breadcrumb',
        element: <Breadcumb />
      },
      {
        title: 'Navigation Menu',
        to: 'navigationmenu',
        element: <NavigationMenu />
      },
      {
        title: 'Navigationmenu Light',
        to: 'navigationmenulight',
        icon: true,
        element: <NavigationMenuLight />
      },
      {
        title: 'Tab',
        to: 'tab',
        element: <Tab />
      },
      {
        title: 'Tree',
        to: 'tree',
        element: <Tree />
      },
      {
        title: 'Winzard',
        to: 'winzard',
        element: <Winzard />
      }
    ]
  },
  {
    titleGroup: 'Form',
    routes: [
      {
        title: 'AutoComplete',
        to: 'autocomplete',
        element: <AutoComplete />
      },
      {
        title: 'Avatar',
        to: 'avatar',
        element: <Avatar />
      },
      {
        title: 'Checkbox',
        to: 'checkbox',
        element: <Checkbox />
      },
      {
        title: 'DatePicker',
        to: 'datepicker',
        element: <DatePicker />
      },
      {
        title: 'Expander',
        to: 'expander',
        element: <Expander />
      },
      {
        title: 'FileUpoader',
        to: 'fileuploader',
        element: <FileUploader />
      },
      {
        title: 'Input',
        to: 'input',
        element: <Input />
      },
      {
        title: 'PeoplePicker',
        to: 'peoplepicker',
        element: <PeoplePicker />
      },
      {
        title: 'Readio button',
        to: 'raido',
        element: <RadioButton />
      },
      {
        title: 'Select',
        to: 'select',
        element: <Select />
      },
      {
        title: 'Switch',
        to: 'switch',
        element: <Switch />
      },
      {
        title: 'TimePicker',
        to: 'timepicker',
        element: <TimePicker />
      }
    ]
  },
  {
    titleGroup: 'Data',
    routes: [
      {
        title: 'Calender',
        to: 'fullcalendar',
        icon: true,
        element: <Calendar />
      },
      {
        title: 'Carousel',
        to: 'carousel',
        icon: true,
        element: <Carousel />
      },
      {
        title: 'Filter',
        to: 'filter',
        element: <Filters />
      },
      {
        title: 'Pagination',
        to: 'pagination',
        element: <Pagination />
      },
      {
        title: 'Table',
        to: 'table',
        element: <Table />
      },
      {
        title: 'Tooltips',
        to: 'tooltip',
        element: <Tooltips />
      }
    ]
  },
  {
    titleGroup: 'Feedback',
    routes: [
      {
        title: 'Message',
        to: 'message',
        element: <Message />
      },
      {
        title: 'Notification',
        to: 'notification',
        element: <Notification />
      }
    ]
  },
  {
    titleGroup: 'Others',
    routes: [
      {
        title: 'Dialog',
        to: 'dialog',
        element: <Dialog />
      },
      {
        title: 'Modal',
        to: 'modal',
        element: <Modal />
      },
      {
        title: 'Loading',
        to: 'loading',
        element: <Loading />
      },
      {
        title: 'Panel',
        to: 'panel',
        element: <Panel />
      },
      {
        title: 'Popover',
        to: 'popover',
        element: <Popover />
      },
      {
        title: 'Progress',
        to: 'progress',
        element: <Progress />
      },
      {
        title: 'Waffle',
        to: 'waffle',
        element: <Waffle />
      },
      {
        title: 'Acivity timeline',
        to: 'activity-timeline',
        element: <ActivityTimeline />
      }
    ]
  }
]
