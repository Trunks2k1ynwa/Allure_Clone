import { useEffect, useState } from 'react'
import Heading from '@/atoms/heading'

const CommonProduct = () => {
  type Product = {
    name: string
    icon: string
  }
  const [dataProduct, setDataProduct] = useState<Product[]>()
  useEffect(() => {
    fetch('data/dataProduct.json')
      .then((res) => res.json())
      .then((data) => {
        setDataProduct(data)
      })
  }, [])
  return (
    <section id='commonProduct-wrapper'>
      <div className='heading-wrapper'>
        <Heading>Common Product</Heading>
        <p>
          Allure depends on @gui/common-i18n-terms which is a package including some common function that can be used in
          your projects.
        </p>
      </div>

      <table>
        <tbody>
          <tr style={{ textAlign: 'left' }}>
            <th>name icon</th>
            <th></th>
          </tr>
          {dataProduct?.map((data, index) => (
            <tr key={`item ${index}`}>
              <td>{data.name}</td>
              <td>{data.icon}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default CommonProduct
