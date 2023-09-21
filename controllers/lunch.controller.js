const { join } = require("path");

const { Lunch } = require(join(__dirname, "..", "models", "index"));

export const redeemedLunch = async (req, res) => {
    //req.user is equal to the user's id stored in the authentication middleware
    //id is the id of the lunch being passed throught url params
    const {id} = req.params;
await Lunch.update(
    { redeemed: true },
    { where: { id:id, senderId: req.user} }
  );
  return res.status(200).json({
    success: true,
    message: "Lunch has successfully been redeemed",
    data: {},
  });
};

module.exports = {
  redeemedLunch,
};
