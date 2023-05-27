type sides = 'left' | 'right'
type MessageProps = {
  text: string
  side: sides
  user: string
}

const containerStyles: Record<sides, string> = {
  left: 'bg-gray-100 justify-start',
  right: 'bg-gray-200 justify-end',
}

const userStyles: Record<sides, string> = {
  left: 'bg-emerald-800',
  right: 'border-b-2 border-emerald-800 bg-emerald-400 text-black',
}

const textStyles: Record<sides, string> = {
  left: 'bg-emerald-50',
  right: '',
}

function Message({ text, side, user }: MessageProps) {
  return (
    <div
      className={`${containerStyles[side]} 
      flex w-full px-4 py-2`}
    >
      <div className="flex w-fit max-w-xl flex-col overflow-hidden rounded-md border-2 border-emerald-800">
        {side === 'left' && (
          <span className={`${userStyles[side]} px-3 py-1 text-white`}>
            {user}
          </span>
        )}
        <span className={`${textStyles[side]} px-3 py-1 `}>{text}</span>
      </div>
    </div>
  )
}

export default Message
