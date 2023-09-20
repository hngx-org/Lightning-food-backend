//check if a user is an admin
async function isAdmin(userId) {
    const user = await getUserById(userId);
    if (!user) {
      throw new Error("User not found");
    }
    // Check if the user has admin privileges
    if (user.role === "admin") {
      return true;
    } else {
      return false;
    }
  }
  
  //retrieve user data by ID
  async function getUserById(userId) {
    const users = [
      { id: 1, username: "admin", role: "admin" },
      { id: 2, username: "user1", role: "user" },
    ];
    return users.find((user) => user.id === userId);
  }
  
  module.exports = isAdmin;
  