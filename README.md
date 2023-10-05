# React + TypeScript + Vite

## Package

- redux-toolkit
- react-router-dom
- i18next
- sass
- react-syntax-highlighter
- prettier + Eslint + EditorConfig

## Design System : Atomic Design

### Atoms

- They are all small items such as : buttons, labels,input, etc

### Molecules

- Molecules are a group of atoms that are put together
- Think of a title, read more button, visibility status, comments icon, etc in one card

### Organisms

- Organisms provide for us blocks to work and now we can relative together to create a component of UI
- Vd : Header is a `Organisms`, that includes 3 `Molecules` : Logo, Menu, GroupSearch

### Template

- The structure is the same, header, hero, detail, sidebar, footer. A template can include multiple organisms this way.

### Page

- These are the actual pages that we have been designing since the beginning of webdesign. In the case of our activity stream cards we will create a page with a menu, activity stream, footer, etc..

## Page errors

- Wizard
- FileUploader
- Calender
