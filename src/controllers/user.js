module.exports.find = (req, res) => {
  try {
    res.status(200).json({
      message: "Hello from Controller",
    });
  } catch (error) {}
};

module.exports.create = (req, res) => {
  const { body } = req;
  try {
  } catch (error) {}
};
