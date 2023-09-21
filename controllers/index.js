const { join } = require("path");

const { Lunch } = require(join(__dirname, "..", "models", "index"));

export const redeemedLunch = async (req, res) => {
await Lunch.update(
    { redeemed: true },
    { where: { id: req.user } }
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
