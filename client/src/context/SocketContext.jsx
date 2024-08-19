// Importing React Packages
import { useState, useEffect, createContext, useContext } from "react";

// Importing React Packages
import { useSelector } from "react-redux";

// importing socket.io
import io from 'socket.io-client'

const SocketContext = createContext();

export const useSocketContext = () => {
  return useContext(SocketContext);
}

export const SocketContextProvider = ({ children }) => {
  // useSelector
  const user = useSelector((state) => state.user.data);
  
  // useState
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState(null);
  const [typingStatus, setTypingStatus] = useState({});

  // useEffect
  useEffect(() => {
    if(user){
      const socket = io(import.meta.env.VITE_REACT_APP_ServerLocation, {
        auth:{
          query: user?._id,
          userId: user?._id
        }
      });

      setSocket(socket);

      socket.on("getOnlineUsers", (users) => {
        setOnlineUsers(users);
      })

      socket.on("typing", (data) => {     
        setTypingStatus(prev => ({
          ...prev,
          [data.userId]: data.conversationId 
        }));
      });

      socket.on("stopTyping", (data) => {
        setTypingStatus(prev => {
          const newStatus = { ...prev };          
          delete newStatus[data.userId];
          return newStatus;
        });
      });

      return () => socket.close();
    }else{
      if(socket){
        socket.close();
        setSocket(null);
      }
    }
  }, [user])
  return <SocketContext.Provider value={{socket, onlineUsers, typingStatus}}>{children}</SocketContext.Provider>
}