// Importing local files
import Conversation from './Conversation'

export default function Conversations() {
  return (
    <div className="py-2 flex flex-col overflow-auto custom-scrollbar">
    {/* <div className=""> */}
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
    </div>
  )
}