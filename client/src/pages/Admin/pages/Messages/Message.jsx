// Importing react packages
import { useState, useEffect, useRef } from "react";

export default function Message({ chat = "" }) {
  // useRef
  const messageRef = useRef(null);

  // useState
  const [showMore, setShowMore] = useState(false);
  const [more, setMore] = useState(false);

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
  }, [chat]);

  return (
    <div className="flex flex-col gap-5">
      {/* user */}
      <div className="flex justify-end">
        <section
          className={`relative text-white bg-blue-500 flex flex-col max-w-[18rem] min-w-[5rem] ${
            more ? "h-full" : "overflow-hidden max-h-[30rem]"
          } px-2 rounded-lg rounded-tr-none overflow-x-hidden`}
        >
          <div ref={messageRef} className="break-words">
            {chat}
          </div>
          <div className="opacity-60 text-xs text-end">12:42</div>

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
        </section>

        <div className="relative -top-3 w-10 rounded-full">
          <img
            src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
            alt="user avatar"
          />
        </div>
      </div>

      {/* client */}
      <div className="flex">
        <div className="relative -top-3 w-10 rounded-full">
          <div className="absolute top-0 right-0 bg-green-600 w-2 h-2 rounded-full" />
          <img
            src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
            alt="user avatar"
          />
        </div>

        <section
          className={`relative text-white bg-blue-500 flex flex-col max-w-[18rem] min-w-[5rem] ${
            more ? "h-full" : "overflow-hidden max-h-[30rem]"
          } px-2 rounded-lg rounded-tl-none overflow-x-hidden`}
        >
          <div ref={messageRef} className="break-words">
            {chat}
          </div>
          <div className="opacity-60 text-xs text-end">12:44</div>

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
        </section>
      </div>
    </div>
  );
}
