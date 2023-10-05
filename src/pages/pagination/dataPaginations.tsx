import { Sample } from './ui/Sample'
import { SampleControlled } from './ui/SampleControlled'

export const dataPaginations = [
  {
    title: 'Basic Usage',
    label: [
      '1. Next and Previous links are user-friendly options to navigate to the next and previous pages one by one.',
      '2. The user can also jump to a specified page by selecting from the dropdown list.'
    ],
    ui: <Sample />,
    code: `import {
      Pagination
  } from "@gui/fluent-ui-allure";
  import * as React from "react";
  
  export const Sample = () => {
  
  
      return (
          <div>
              <Pagination totalPages={25} onPageChanged={page => console.log(page)} ariaLabel="Pagination"  />
          </div>
      );
  };`
  },
  {
    title: 'For Dev Notice',
    label: ['This demo shows the jump page code logic to developers and will not be used in the actual design pages.'],
    ui: <SampleControlled />,
    code: `import { Pagination, PrimaryButton } from "@gui/fluent-ui-allure";
    import * as React from "react";
    
    export const SampleControlled = () => {
        const [pageNumber, setPageNumber] = React.useState(1);
    
        return (
            <div>
                <Pagination totalPages={5} pageNumber={pageNumber} onPageChanged={(page) => setPageNumber(page)} ariaLabel="Pagination" />
    
                <PrimaryButton size="small" style={{ marginLeft: 16 }} onClick={() => setPageNumber(4)}>
                    Go to page 4
                </PrimaryButton>
            </div>
        );
    };`
  }
]
