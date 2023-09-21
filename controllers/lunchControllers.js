const { Op } = require('sequelize');
const Lunch = require('../models/lunches.model');
const User = require('../models/user.model');

//GET endpoint to retrieve all available lunches for a user
const getAllLunch = async (req, res) => {
  const userId = req.user.id;

  try {
    //Query the lunch model to find available lunches for the user
    const allLunches = await Lunch.findAll({
      where: {
        [Op.or]: [{ senderId: userId }, { receiverId: userId }], //User is either the sender or receiver
      },
    });

    // Check if there are no lunches found
    if (!allLunches || allLunches.length === 0) {
      return res.status(200).json({
        success: true,
        message: 'No lunches found for this user',
        data: [],
      });
    }

    res.status(200).json({
      success: true,
      message: 'Lunches retrieved successfully',
      data: allLunches,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
      data: null,
    });
  }
};

module.exports = { getAllLunch };
