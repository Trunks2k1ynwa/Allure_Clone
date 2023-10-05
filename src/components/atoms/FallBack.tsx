type Props = {
  error: Error
  resetErrorBoundary: () => void
}
const FallbackRender = ({ error, resetErrorBoundary }: Props) => {
  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}
      role='alert'
    >
      <img style={{ width: '300px' }} src='something-went-wrong.png' alt='' />
      <p style={{ color: 'red', fontWeight: 'bold', fontSize: '30px', margin: '10px 0' }}>
        Opps! Something went wrong!
      </p>
      <p style={{ color: 'red' }}>{error}</p>
      <button
        style={{
          cursor: 'pointer',
          width: 'fit-content',
          padding: '10px 20px',
          borderRadius: '5px',
          background: 'white',
          color: 'red',
          fontWeight: 'bold'
        }}
        onClick={resetErrorBoundary}
      >
        Reset
      </button>
    </div>
  )
}
export default FallbackRender
