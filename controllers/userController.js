const { Sequelize } = require('sequelize');

 const User = require('../models/auth.model.js'); //the name of the user model was chaged to auth.model, Federick, are we sticking to this??

// Controller function to get user/staff details by UUID
async function getUserById(req, res) {
  try {
    const userId = req.params.id; 

    const user = await User.findOne({ where: { id: userId } });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json(user); //still not sure on the format of the response, calling on a code reviewer here!!!
  } catch (error) {
    console.error('Error fetching user/staff:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  getUserById,
};
