import { Pagination, PrimaryButton } from '@gui/fluent-ui-allure'
import * as React from 'react'

export const SampleControlled = () => {
  const [pageNumber, setPageNumber] = React.useState(1)

  return (
    <div>
      <Pagination
        totalPages={5}
        pageNumber={pageNumber}
        onPageChanged={(page: number) => setPageNumber(page)}
        ariaLabel='Pagination'
      />

      <PrimaryButton size='small' style={{ marginLeft: 16 }} onClick={() => setPageNumber(4)}>
        Go to page 4
      </PrimaryButton>
    </div>
  )
}
