const logoutController = (req, res) => {
  const token = req.cookies.token || req.headers.authorization;

  if (!token) {
    // If no token is found, the user is already logged out.
    return res.status(401).json({ message: 'User is not logged in.' });
  }

  try {
    return res.status(200).json({ message: 'User logged out successfully.' });
  } catch (error) {
    console.error(error);
    return res.status(200).json({ message: 'User logged out successfully.' });
  }
};

module.exports = logoutController;
