// Importing Models
const Model = require("../models/reportModel");

const loginReports = async (userId, key, socketId, message) => {
  try{
    if(message){
      await Model.findOneAndUpdate(
        {},
        {
          $push: {
            [`user_logins.${userId === "undefined" || userId === undefined ? "Unknown" : userId}`]: {
              key: key || 0,
              message: message,
              socketId: socketId,
              timestamp: new Date()
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

const fetchLogins = async () => {
  try{
    const logins = await Model.find({}).select(['user_logins']);

    return logins;
  } catch (error) {
    console.error("Error Occurred while adding login reports:", error.message);
  }
};


module.exports = { loginReports, fetchLogins };
