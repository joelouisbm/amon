module.exports.find = (req, res) => {
  try {
    res.status(200).json({
      message: "Hello from Controller",
    });
  } catch (error) {}
};
