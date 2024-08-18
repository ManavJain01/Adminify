// Importing local files
import MessageInput from "./MessageInput";
import Messages from "./Messages";

export default function MessageContainer() {
  return (
    <div className="w-full flex flex-col">
      <>
        {/* Header */}
        <div className="bg-slate-500 flex gap-8 items-center px-4 py-2 mb-2">
          <div className="flex items-center gap-1">
            <span className="label-text">To: </span>
            <span className="font-bold text-gray-900">John doe</span>
          </div>
          <span className="text-sm opacity-50">Typing...</span>
        </div>

        <Messages />
        <MessageInput />
      </>
    </div>
  );
}
