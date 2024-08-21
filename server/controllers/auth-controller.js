const register = async (req, res) => {
  try {
    console.log(req.body);
    const name = req.body;

    res.status(200).json({ message: "Request Received Successfully", query: name });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}
module.exports = { register };
