import { NonClickable1 } from './ui/NonClickable1'
import { NonClickable2 } from './ui/NonClickable2'
import { NonClickable3 } from './ui/NonClickable3'
import { NonClickable4 } from './ui/NonClickable4'
import { SampleRoot } from './ui/SampleRoot'

export const dataBreadcrumb = [
  {
    title: 'Usage',
    elements: [
      {
        label: 'When there is only 1 level breadcrumb, it is not clickable. But the text color is black.',
        ui: <SampleRoot />,
        code: `import * as React from "react";
        import { Breadcrumb, IBreadcrumbItem } from "@gui/fluent-ui-allure";
        
        export const SampleRoot = () => {
            const items: IBreadcrumbItem[] = [{ text: "Home", key: "Home" }];
        
            return <Breadcrumb items={items} maxDisplayedItems={10} ariaLabel="Breadcrumb with items rendered as buttons" overflowAriaLabel="More links" />;
        };`
      }
    ]
  },
  {
    title: 'Usage',
    elements: [
      {
        label: 'Some links may not be clickable.',
        ui: <NonClickable1 />,
        code: `import * as React from 'react';
      import { Breadcrumb, IBreadcrumbItem } from '@gui/fluent-ui-allure';
      
      export const SampleNonClickable = () => {
          function onItemClick(ev: React.MouseEvent<HTMLElement>, item: IBreadcrumbItem): void {
              console.log(\`Breadcrumb item with key \${item.key}" has been clicked.\`);
          }
      
          const items: IBreadcrumbItem[] = [
              { text: 'Home(non-clickable)', key: 'k1' },
              { text: 'Sub', key: 'k2', onClick: onItemClick },
              { text: 'Sub2(non-clickable)', key: 'k3' },
              { text: 'Detail', key: 'k4' },
          ];
      
          return <Breadcrumb items={items} maxDisplayedItems={10} ariaLabel='Breadcrumb with items rendered as buttons' overflowAriaLabel='More links' />;
      };`
      },
      {
        label: 'Example for multi-parent nodes. This is a common style.',
        ui: <NonClickable2 />,
        code: `import * as React from "react";
        import { Breadcrumb, IBreadcrumbItem } from "@gui/fluent-ui-allure";
        
        export const SampleNonClickable = () => {
            function onItemClick(ev: React.MouseEvent<HTMLElement>, item: IBreadcrumbItem): void {
                console.log(\`Breadcrumb item with key "\${item.key}" has been clicked.\`);
            }
        
            const items: IBreadcrumbItem[] = [
                { text: "Home(non-clickable)", key: "k1" },
                { text: "Sub", key: "k2", onClick: onItemClick },
                { text: "Sub2(non-clickable)", key: "k3" },
                { text: "Detail", key: "k4" },
            ];
        
            return <Breadcrumb items={items} maxDisplayedItems={10} ariaLabel="Breadcrumb with items rendered as buttons" overflowAriaLabel="More links" />;
        };`
      },
      {
        label:
          'Show ... in the middle of breadcrumb when there are so many nodes that cannot show all at the same time. Always keep the first level and the last level visible.',
        ui: <NonClickable3 />,
        code: `import * as React from "react";
        import { Breadcrumb, IBreadcrumbItem } from "@gui/fluent-ui-allure";
        
        export const SampleNonClickable = () => {
            function onItemClick(ev: React.MouseEvent<HTMLElement>, item: IBreadcrumbItem): void {
                console.log(\`Breadcrumb item with key "\${item.key}" has been clicked.\`);
            }
        
            const items: IBreadcrumbItem[] = [
                { text: "Home(non-clickable)", key: "k1" },
                { text: "Sub", key: "k2", onClick: onItemClick },
                { text: "Sub2(non-clickable)", key: "k3" },
                { text: "Detail", key: "k4" },
            ];
        
            return <Breadcrumb items={items} maxDisplayedItems={10} ariaLabel="Breadcrumb with items rendered as buttons" overflowAriaLabel="More links" />;
        };`
      },
      {
        label:
          'Show ... at the beginning of breadcrumb when there are so many nodes that cannot show all at the same time. Always keep the last level visible.',
        ui: <NonClickable4 />,
        code: `import * as React from "react";
        import { Breadcrumb, IBreadcrumbItem } from "@gui/fluent-ui-allure";
        
        export const SampleNonClickable = () => {
            function onItemClick(ev: React.MouseEvent<HTMLElement>, item: IBreadcrumbItem): void {
                console.log(\`Breadcrumb item with key "\${item.key}" has been clicked.\`);
            }
        
            const items: IBreadcrumbItem[] = [
                { text: "Home(non-clickable)", key: "k1" },
                { text: "Sub", key: "k2", onClick: onItemClick },
                { text: "Sub2(non-clickable)", key: "k3" },
                { text: "Detail", key: "k4" },
            ];
        
            return <Breadcrumb items={items} maxDisplayedItems={10} ariaLabel="Breadcrumb with items rendered as buttons" overflowAriaLabel="More links" />;
        };`
      }
    ]
  }
]
