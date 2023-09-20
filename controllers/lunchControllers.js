const Lunch = require('../models/lunches.model');


//GET endpoint to retrieve all available lunches for a user
exports.getAllLunch = async(req, res) => {
    const userId = req.params.userId;

    try {
        //Query the lunch model to find available lunches for the user
        const availableLunches = await Lunch.findAll({
            attributes: ['id', 'receiverId', 'senderId', 'quantity', 'redeemed', 'note', 'created_at'],
            where: {
                receiver_id: userId, //user is the receiver
                redeemed: false, //lunch is not yrt redeemed
            }
        });
        if (!availableLunches) {
            return res.status(404).json({
              success: false,
              message: 'availableLunches not found',
              data: null,
            });
          }
        res.status(200).json({message: 'Lunches retrieved successfully', data: availableLunches});
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
            data: null,
        });
    }
}
