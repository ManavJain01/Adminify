// Importing Services
const service = require("../services/MessageService");

const getMessages = async (req, res) => {
  try {
    const { id } = req.params;
    const senderId = req.user._id;

    const result = await service.messages(id, senderId);
    res.status(200).send(result);
  } catch (error) {
    console.log("Error: ", error.message);
    res.status(400).send(error.message);
  }
};

const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id } = req.params;
    const senderId = req.user._id;

    const result = await service.messageSent(message, id, senderId);
    res.status(200).send(result);
  } catch (error) {
    console.log("Error: ", error.message);
    res.status(400).send(error.message);
  }
};

// Exporting controllers
module.exports = { getMessages, sendMessage };
