// Importing Services
import { signup as signupService, login as loginService } from '../services/userService'

export const useUser = () => {
  const signup = async (data) => {
    try {
      const user = await signupService(data);    
      
      // setting localStorage variables
      localStorage.setItem("authToken", user.authToken);
      
      return user.data;
    } catch (error) {
      console.log("Error Signing Up in UseUser Hook: ", error); 
    }
  }
  
  const login = async (data) => {
    try {
      const user = await loginService(data);
  
      // setting localStorage variables
      localStorage.setItem("authToken", user.authToken); 
      return user.data;
    } catch (error) {
      console.log("Error Logging In in UseUser Hook: ", error); 
    }
  }

  return { signup, login }
}