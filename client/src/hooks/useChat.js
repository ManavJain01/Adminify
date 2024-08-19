// Importing React Packages
import { useState, useEffect } from 'react';

// Importing Services
import { conversationService, messageSendService, allMessageService } from '../services/chatService'

// Importing Zustand
import useConversation from '../zustand/useConversation';

// Importing Socket io
import { useSocketContext } from '../context/SocketContext';

// Importing local files
import notificationSound from '../../public/assets/sounds/notification.mp3'

export const useChat = () => {
  // zustand
  const {messages, setMessages, selectedConversation } = useConversation();

  // socket io
  const { socket } = useSocketContext();

  // useState
  const [loading, setLoading] = useState(false);
  
  // useEffect
  useEffect(() => {
    const getMessages = async () => {
      try {
        const id = localStorage.getItem('authToken');
        if(id){
          setLoading(true);
          const res = await allMessageService(id, selectedConversation._id);
          // setMessages(res);
        }else{
          throw new Error('User Not Logged in.');
        }
      } catch (error) {
        console.error("Error getting messages: ", error.message);
        throw error;
      } finally {
        setLoading(false);
      }
    }

    if(selectedConversation?._id) getMessages();
  }, [selectedConversation?._id, setMessages])

  useEffect(() => {
    // listenMessages
    socket?.on("newMessage", (newMessage) => {
      newMessage.shouldShake = true;const sound = new Audio(notificationSound);
      sound.play();
      setMessages([...messages, newMessage]);
    })

    return () => socket?.off("newMessage");
  }, [socket, setMessages, messages])

  const getConversations = async (data) => {
    try {
      const id = localStorage.getItem('authToken');
      if(id){
        setLoading(true);
        const res = await conversationService(id);
        return res;
      }else{
        throw new Error('User Not Logged in.');
      }
    } catch (error) {
      console.error("Error getting conversations: ", error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const sendMessage = async (message) => {
    try {
      const id = localStorage.getItem('authToken');
      if(id){
        setLoading(true);
        const res = await messageSendService(id, selectedConversation._id, message);
        return res;
      }else{
        throw new Error('User Not Logged in.');
      }
    } catch (error) {
      console.error("Error sending message: ", error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  }

  return { loading, messages, getConversations, sendMessage };
};
