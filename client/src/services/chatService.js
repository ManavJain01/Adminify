// Importing Axios Packages
import axios from "axios";

// All Users for Conversations
export const conversationService = async (id) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_REACT_APP_ServerLocation}/user/users`,
      { params: { id: id } }
    );

    if (response.status !== 200) {
      throw new Error("Failed to get Conversations");
    }

    return response.data;
  } catch (error) {
    throw error;
  }
};

// message sending to receiver
export const messageSendService = async (userId, id, message) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_REACT_APP_ServerLocation}/messages/send/${id}`,
      {message},
      { params: { id: userId } }
    );

    if (response.status !== 200) {
      throw new Error("Failed to sent message");
    }

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const allMessageService = async (userId, id) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_REACT_APP_ServerLocation}/messages/${id}`,
      { params: { id: userId } }
    );

    if (response.status !== 200) {
      throw new Error("Failed to get messages");
    }

    return response.data;
  } catch (error) {
    throw error;
  }
}