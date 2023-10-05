import Heading from '@/atoms/heading'
import UiCodeHighLight from '@/molecules/uicodehighlight'
import { Notification, Stack, DefaultButton, useTheme } from '@gui/fluent-ui-allure'
import * as React from 'react'

const NotificationCpn = () => {
  return (
    <section>
      <div className='heading-wrapper'>
        <Heading>Notification</Heading>
        <p>
          Notification is a message bar that displays successful, warning and error feedback information at the top
          right.
        </p>
      </div>
      <div className='heading-wrapper'>
        <Heading type='subheading'>Basic Usage</Heading>
        <div>
          <p>
            1. Provide system feedback after performing an action such as: updating successfully, deleting successfully,
            etc.
          </p>
          <p> 2. The Newest one is on the top. A maximum of 4 messages can be displayed at the same time.</p>
          <p> 3. Feedback will auto close in 5 seconds. Users can also close manually by cpcking "X".</p>
          <p>4 .When the error result needs the user to pay attention to, use dialog to show the alert.</p>
        </div>
      </div>
      <UiCodeHighLight
        uiChildren={<Sample />}
        codeString={`import { Notification, Stack, DefaultButton, useTheme } from "@gui/fluent-ui-allure";
import * as React from "react";
import * as ReactDOM from "react-dom";

let i = 0;
export const Sample = () => {
    const demoImageUrl = "https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/persona-female.png";

    const primaryColor = useTheme().palette.themePrimary;

    const [notifications, setNotifications] = React.useState([]);

    const notificationsRef = React.useRef(notifications);

    function removeNotification(notifications: { key: number }[], key: number) {
        const index = notifications.findIndex((n) => n.key == key);
        if (index != -1) {
            notifications.splice(index, 1);
            setNotifications([...notifications]);
        }
    }

    function addNotification(type: number) {
        let element: React.ReactNode;
        i++;
        const key = i;
        if (type == 1) {
            element = (
                <Notification
                    key={i}
                    style={{ marginTop: 2 }}
                    mode="dark"
                    coinType="success"
                    onDismiss={() => {
                        removeNotification(notificationsRef.current, key);
                    }}
                    headerText="Nelly Miller"
                >
                    Assigned a new task to you in Project Rocketship
                </Notification>
            );
        } else if (type == 2) {
            element = (
                <Notification
                    key={i}
                    style={{ marginTop: 2 }}
                    mode="dark"
                    coinType="warning"
                    headerText="Migration finished"
                    onDismiss={() => {
                        removeNotification(notificationsRef.current, key);
                    }}
                >
                    Great news! Klaman SLACK Test Project finished with no errors.
                </Notification>
            );
        } else if (type == 3) {
            element = (
                <Notification
                    key={i}
                    style={{ marginTop: 2 }}
                    mode="dark"
                    coinType="dangerous"
                    headerText="Migration finished"
                    onDismiss={() => {
                        removeNotification(notificationsRef.current, key);
                    }}
                >
                    Great news! Klaman SLACK Test Project finished with no errors.
                </Notification>
            );
        } else if (type == 4) {
            element = (
                <Notification
                    key={i}
                    style={{ marginTop: 2 }}
                    styles={{ coin: { color: primaryColor } }}
                    mode="dark"
                    coinType="customized"
                    coinIconName="fas-file-export"
                    headerText="Migration finished"
                    onDismiss={() => {
                        removeNotification(notificationsRef.current, key);
                    }}
                >
                    Great news! Klaman SLACK Test Project finished with no errors.
                </Notification>
            );
        }

        const newArray = [...notifications, { key: i, element }];
        setNotifications(newArray);
        notificationsRef.current = newArray;
        setTimeout(() => {
            removeNotification(notificationsRef.current, key);
        }, 5000);
    }

    return (
        <Stack horizontal tokens={{ childrenGap: 20 }}>
            <DefaultButton onClick={() => addNotification(1)}>Successful</DefaultButton>
            <DefaultButton onClick={() => addNotification(3)}>Error</DefaultButton>
            <DefaultButton onClick={() => addNotification(2)}>Warning</DefaultButton>
            <DefaultButton onClick={() => addNotification(4)}>Customized</DefaultButton>

            <div style={{ position: "absolute", right: 10, top: 0, zIndex: 1000 }}>
                {notifications.map((notification) => {
                    return notification.element;
                })}
            </div>
        </Stack>
    );
};`}
      />
    </section>
  )
}

export default NotificationCpn

let i = 0
export const Sample = () => {
  const primaryColor = useTheme().palette.themePrimary

  const [notifications, setNotifications] = React.useState([])

  const notificationsRef = React.useRef(notifications)

  function removeNotification(notifications: { key: number }[], key: number) {
    const index = notifications.findIndex((n) => n.key == key)
    if (index != -1) {
      notifications.splice(index, 1)
      setNotifications([...notifications])
    }
  }

  function addNotification(type: number) {
    let element: React.ReactNode
    i++
    const key = i
    if (type == 1) {
      element = (
        <Notification
          key={i}
          style={{ marginTop: 2 }}
          mode='dark'
          coinType='success'
          onDismiss={() => {
            removeNotification(notificationsRef.current, key)
          }}
          headerText='Nelly Miller'
        >
          Assigned a new task to you in Project Rocketship
        </Notification>
      )
    } else if (type == 2) {
      element = (
        <Notification
          key={i}
          style={{ marginTop: 2 }}
          mode='dark'
          coinType='warning'
          headerText='Migration finished'
          onDismiss={() => {
            removeNotification(notificationsRef.current, key)
          }}
        >
          Great news! Klaman SLACK Test Project finished with no errors.
        </Notification>
      )
    } else if (type == 3) {
      element = (
        <Notification
          key={i}
          style={{ marginTop: 2 }}
          mode='dark'
          coinType='dangerous'
          headerText='Migration finished'
          onDismiss={() => {
            removeNotification(notificationsRef.current, key)
          }}
        >
          Great news! Klaman SLACK Test Project finished with no errors.
        </Notification>
      )
    } else if (type == 4) {
      element = (
        <Notification
          key={i}
          style={{ marginTop: 2 }}
          styles={{ coin: { color: primaryColor } }}
          mode='dark'
          coinType='customized'
          coinIconName='fas-file-export'
          headerText='Migration finished'
          onDismiss={() => {
            removeNotification(notificationsRef.current, key)
          }}
        >
          Great news! Klaman SLACK Test Project finished with no errors.
        </Notification>
      )
    }

    const newArray = [...notifications, { key: i, element }]
    setNotifications(newArray)
    notificationsRef.current = newArray
    setTimeout(() => {
      removeNotification(notificationsRef.current, key)
    }, 5000)
  }

  return (
    <Stack horizontal tokens={{ childrenGap: 20 }}>
      <DefaultButton onClick={() => addNotification(1)}>Successful</DefaultButton>
      <DefaultButton onClick={() => addNotification(3)}>Error</DefaultButton>
      <DefaultButton onClick={() => addNotification(2)}>Warning</DefaultButton>
      <DefaultButton onClick={() => addNotification(4)}>Customized</DefaultButton>

      <div style={{ position: 'absolute', right: 10, top: 0, zIndex: 1000 }}>
        {notifications.map((notification) => {
          return notification.element
        })}
      </div>
    </Stack>
  )
}
