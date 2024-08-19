// Importing React Packages
import { useState, useEffect } from 'react';

// Importing Services
import { loginService } from '../services/reportService'


// Importing local files

export const useReport = () => {
  const getUserLogins = async () => {
    try {
      const id = localStorage.getItem('authToken');
      if(id){
        const res = await loginService(id);
        return res;
      }else{
        throw new Error('User Not Logged in.');
      }
    } catch (error) {
      console.error("Error fetching user logins: ", error.message);
      throw error;
    }
  };

  return { getUserLogins };
};
