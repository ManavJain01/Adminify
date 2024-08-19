// Importing Models
const Model = require("../models/reportModel");

const loginReports = async (userId, key, socketId, message) => {
  try{
    if(message){
      await Model.findOneAndUpdate(
        {},
        {
          $push: {
            [`user_logins.connections.${userId}`]: {
              key: key || 0,
              message: message,
              socketId: socketId
            }
          }
        },
        { new: true, upsert: true }
      )
    }
  } catch (error) {
    console.error("Error Occurred while adding login reports:", error.message);
  }
};


module.exports = { loginReports };
