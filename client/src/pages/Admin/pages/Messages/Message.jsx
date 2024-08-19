// Importing react packages
import { useState, useEffect, useRef } from "react";

// Importing React Packages
import { useSelector } from "react-redux";

// Importing local files
import { extractTime } from "../../../../utils/extractTime";

export default function Message({ message }) {
  // useRef
  const messageRef = useRef(null);

  // useSelector
  const user = useSelector((state) => state.user.data);

  // variables
  const shakeClass = message.shouldShake ? "shake" : ""

  // useState
  const [showMore, setShowMore] = useState(false);
  const [more, setMore] = useState(false);
  const [sender, setSender] = useState(false);

  if(user?._id === message.senderId) setSender(true);
  const formattedTime = extractTime(message.createdAt);

  // useEffect
  useEffect(() => {
    if (messageRef.current) {
      const contentHeight = messageRef.current.scrollHeight;

      if (contentHeight > 480) {
        // 30rem in pixels
        setShowMore(true);
      } else {
        setShowMore(false);
      }
    }
  }, [message?.message]);

  return (
    <div className="flex flex-col gap-5">
      {sender
        ?<div className="flex justify-end">
          <section
            className={`relative text-white bg-blue-500 flex flex-col max-w-[18rem] min-w-[5rem] ${
              more ? "h-full" : "overflow-hidden max-h-[30rem]"
            } px-2 py-1 rounded-lg rounded-tr-none overflow-x-hidden`}
          >
            <div ref={messageRef} className="break-words">
              {message.message}
            </div>
            <div className="flex items-end">
              {showMore && (
                <button
                onClick={() => setMore(!more)}
                className={`tracking-widest font-semibold text-center text-2xl backdrop-blur-xl ${
                  more ? "opacity-50" : "absolute bottom-0 opacity-80"
                } w-full`}
                >
                  {more ? <span>less</span> : <span>more</span>}
                </button>
              )}
            
              <span className="opacity-60 text-xs">{formattedTime}</span>
            </div>
          </section>

          <div className="relative -top-5 w-10 rounded-full">
            <img
              src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
              alt="user avatar"
            />
          </div>
        </div>
        :<div className="flex">
          <div className="relative -top-5 w-10 rounded-full">
            <div className="absolute top-0 right-0 bg-green-600 w-2 h-2 rounded-full" />
            <img
              src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
              alt="user avatar"
            />
          </div>

          <section
            className={`relative text-white bg-gray-700 flex flex-col max-w-[18rem] min-w-[5rem] ${
              more ? "h-full" : "overflow-hidden max-h-[30rem]"
            } px-2 py-1 rounded-lg rounded-tl-none overflow-x-hidden`}
          >
            <div ref={messageRef} className={`${shakeClass} break-words`}>
              {message.message}
            </div>
            <div className="flex items-end">
              {showMore && (
                <button
                  onClick={() => setMore(!more)}
                  className={`tracking-widest font-semibold text-center text-2xl backdrop-blur-xl ${
                    more ? "opacity-50" : "absolute bottom-0 opacity-80"
                  } w-full`}
                >
                  {more ? <span>less</span> : <span>more</span>}
                </button>
              )}
              <span className="opacity-60 text-xs">{formattedTime}</span>
            </div>

          </section>
        </div>
      }
    </div>
  );
}
