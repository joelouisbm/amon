module.exports.find = (req, res) => {
  try {
    res.status(200).json({
      message: "Hello from User Controller",
    });
  } catch (error) {}
};
