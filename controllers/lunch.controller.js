const { join } = require("path");

const { Lunch } = require(join(__dirname, "..", "models", "index"));

export const redeemedLunch = async (req, res) => {
    //req.user is equal to the user's id stored in the authentication middleware
await Lunch.update(
    { redeemed: true },
    { where: { senderId: req.user} }
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
