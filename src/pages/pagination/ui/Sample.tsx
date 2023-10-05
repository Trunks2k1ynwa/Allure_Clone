import { Pagination } from '@gui/fluent-ui-allure'

export const Sample = () => {
  return (
    <div>
      <Pagination totalPages={25} onPageChanged={(page) => console.log(page)} ariaLabel='Pagination' />
    </div>
  )
}
