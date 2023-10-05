import { Link } from 'react-router-dom'
import './index.scss'
import Heading from '@/atoms/heading'
import { environments } from '~/utils/common'
import CodeHighlight from '~/components/atoms/codehighlight'
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight'
import { a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'

const Introduction = () => {
  const [copy, setCopy] = useState<boolean>(false)
  const { t } = useTranslation()
  return (
    <section className='container-wrapper'>
      <div className='heading-wrapper'>
        <Heading>{t('introduction.title')}</Heading>
        <p>{t('introduction.label')}</p>
      </div>
      <div className='heading-wrapper'>
        <Heading type='subheading'>{t('introduction.subTitle')}</Heading>
        <p>{t('introduction.subLabel')}</p>
        <Link to='https://www.w3.org/TR/WCAG20/'>{t('introduction.link')}</Link>
      </div>
      <div className='heading-wrapper'>
        <Heading type='subheading'>{t('introduction.environment')}</Heading>
        <table style={{ borderCollapse: 'collapse', width: '100%', tableLayout: 'fixed' }}>
          <tbody>
            <tr>
              {environments.map((item, index) => (
                <td key={`item ${index}`} style={{ border: ' 1px solid rgb(242, 243, 244)', padding: '8px' }}>
                  <img src={item.img} alt='' />
                  <span style={{ display: 'block', marginTop: '5px', color: 'rgb(50, 62, 77)', fontWeight: '600' }}>
                    {item.name}
                  </span>
                </td>
              ))}
            </tr>
            <tr>
              {environments.map((item, index) => (
                <td key={`item ${index}`} style={{ border: ' 1px solid rgb(242, 243, 244)', padding: '8px' }}>
                  {item.version}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
      <div className='heading-wrapper'>
        <Heading type='subheading'>{t('introduction.Installation')}</Heading>
        <p>
          {t('introduction.Installation')}
          <Link to='https://proget.avepoint.net/feeds/avepoint-npm/@gui/fluent-ui-allure'>avepoint-npm</Link>
        </p>
        <section style={{ border: '1px solid rgb(242, 243, 244)', padding: '8px' }}>
          <SyntaxHighlighter language='react' style={a11yLight}>
            @gui:registry=https://proget.avepoint.net/npm/avepoint-npm/
            registry=https://proget.avepoint.net/npm/npm.org/
          </SyntaxHighlighter>
        </section>
        <p>{t('introduction.uiInstall')}</p>
        <section style={{ border: '1px solid rgb(242, 243, 244)', padding: '8px' }}>
          <code>npm install @gui/fluent-ui-allure</code>
        </section>
        <div className='heading-wrapper'>
          <Heading type='subheading'>{t('introduction.usage')}</Heading>
          <p>{t('introduction.labelUsage')}</p>
          <CodeHighlight
            copy={copy}
            setCopy={setCopy}
            style={{ border: '1px solid rgb(242, 243, 244)' }}
            showCode={true}
            codeString={`import { ThemeProvider, getAllureTheme, Themes, Language } from '@gui/fluent-ui-allure';
  import * as React from 'react';
  import { initReactI18next } from 'react-i18next';
  
  const Content = () => {
      return (
          <ThemeProvider theme={getAllureTheme(Themes.Cabolt, Language.EN)}>
              <div />
          </ThemeProvider>
      );
  };`}
          />
        </div>
      </div>
    </section>
  )
}

export default Introduction
