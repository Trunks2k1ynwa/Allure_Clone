import HighLightTitle from '@/atoms/highlightpage'
import { memo, useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { listRoute } from '~/routes/RouteSystem'

type Props = {
  showResult: boolean
  query: string | undefined
}
type dataType = {
  page: string
  slug: string
}
const SearchResult = memo(({ showResult, query }: Props) => {
  const [values, setValues] = useState<dataType[]>([])
  const pages = useMemo(() => {
    const page: dataType[] = []
    listRoute.map((item: any) => {
      item.routes.map((el: any) => {
        page.push({ page: el.title, slug: el.to })
      })
    })
    return page
  }, [])
  useEffect(() => {
    const result = pages.filter((item) => item.page.toLowerCase().includes(query!.toLowerCase()))
    setValues(result)
  }, [query, pages])
  return (
    <div className={`header-inputSearch_result ${showResult ? 'opacity_1' : 'opacity_0'}`}>
      <div className='result-wrapper'>
        {values.length > 0 ? (
          values.map((item, index) => (
            <Link key={`item ${index}`} to={item.slug}>
              <HighLightTitle subString={query} fullString={item.page} />
            </Link>
          ))
        ) : (
          <span style={{ fontWeight: '600' }}>No results found</span>
        )}
      </div>
    </div>
  )
})

export default SearchResult
