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

  // useEffect
  useEffect(() => {
    if(user){
      const socket = io(import.meta.env.VITE_REACT_APP_ServerLocation, {
        query:{
          userId: user?._id
        }
      });

      setSocket(socket);

      socket.on("getOnlineUsers", (users) => {
        setOnlineUsers(users);
      })

      return () => socket.close();
    }else{
      if(socket){
        socket.close();
        setSocket(null);
      }
    }
  }, [user])
  return <SocketContext.Provider value={{socket, onlineUsers}}>{children}</SocketContext.Provider>
}