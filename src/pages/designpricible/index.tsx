import { icons } from '~/utils/common'
import Heading from '~/components/atoms/heading'

const DesignPriciplePage = () => {
  return (
    <section className='heading-wrapper'>
      <Heading>Design principle</Heading>
      <section style={{ border: '1px solid rgb(242,242,244', borderRadius: '4px' }}>
        {icons.map((icon, index) => (
          <div
            key={`item ${index}`}
            style={{ padding: '28px', borderBottom: '1px solid rgb(242,243,244', display: 'flex' }}
          >
            <span style={{ width: '40px', height: '40px', fontSize: '32px' }} className={icon.icon} />
            <div style={{ marginLeft: '16px' }}>
              <span style={{ fontWeight: 'bold', color: 'rgb(50,62,77)', fontSize: '16px' }}>{icon.label}</span>
              <div
                style={{
                  marginTop: '5px'
                }}
              >
                {icon.content}
              </div>
            </div>
          </div>
        ))}
      </section>
    </section>
  )
}

export default DesignPriciplePage
