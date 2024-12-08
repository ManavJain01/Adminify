// Importing React Packages
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Importing Services
import {
  subscriptionList,
  createSubscriptionService,
  updateSubscriptionService,
  deleteSubscriptionService
} from "../services/subscriptionService";

export const useSubscription = () => {
  // useNavigate
  const navigate = useNavigate();

  // Functions
  const AllSubscriptions = async () => {
    try {
      const id = localStorage.getItem("authToken");
      if(id) {
        const res = await subscriptionList(id);
        
        return res.data;
      } else throw new Error("No Token Found");
    } catch (error) {
      console.error("Error Getting Subscriptions: ", error.message);
    }
  };

  const CreateSubscription = async (subscription) => {
    try {
      const id = localStorage.getItem("authToken");
      if(id) {
        const res = await createSubscriptionService(subscription, id);
        
        return res.data;
      } else throw new Error("No Token Found");
    } catch (error) {
      console.error("Error Creating Subscription: ", error.message);
    }
  };

  const UpdateSubscription = async (subscription) => {
    try {
      const id = localStorage.getItem("authToken");
      if(id) {
        const res = await updateSubscriptionService(subscription, id);

        return res.data;
      } else throw new Error("No Token Found");
    } catch (error) {
      console.error("Error Updating Subscription: ", error.message);
    }
  };

  const DeleteSubscription = async (subscriptionId, companyId) => {
    try {
      const id = localStorage.getItem("authToken");
      if(id) {        
        const res = await deleteSubscriptionService(subscriptionId, companyId, id);
        
        return res.data;
      }
    } catch (error) {
      console.error("Error Deleting Subscription: ", error.message);
    }
  };

  return {
    AllSubscriptions,
    CreateSubscription,
    UpdateSubscription,
    DeleteSubscription
  };
}