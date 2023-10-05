import './index.scss'

type Props = {
  fullString: string
  subString: string | undefined
}

const HighLightTitle = ({ fullString, subString }: Props) => {
  const index = fullString.toLowerCase().indexOf(subString!.toLowerCase())
  if (index === -1) return <span>{fullString}</span>
  return (
    <span className='highligh-title'>
      {fullString.substring(0, index)}
      <span className='highlight'>{fullString.substring(index, index + subString!.length)}</span>
      {fullString.substring(index + subString!.length)}
    </span>
  )
}

export default HighLightTitle
