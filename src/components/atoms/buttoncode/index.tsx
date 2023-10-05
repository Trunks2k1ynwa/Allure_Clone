import { Dispatch, SetStateAction, memo } from 'react'
import './index.scss'
type Props = {
  setShowCode: Dispatch<SetStateAction<boolean>>
  showCode: boolean
}

const ButtonCode = memo(({ setShowCode, showCode }: Props) => {
  return (
    <button onClick={() => setShowCode(!showCode)} className='button-wrapper'>
      <span>
        {showCode && <i className='fa-solid fa-code' />}
        {!showCode && <i className='fa-solid fa-sort-down' />}
      </span>
    </button>
  )
})

export default ButtonCode
