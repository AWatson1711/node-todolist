const jwt = require("jsonwebtoken");
const privateKey = require("../auth/key");
module.exports = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "pas de token" });
  }
  jwt.verify(token, privateKey, (error, decodedToken) => {
    if (error) {
      return res
        .status(401)
        .json({ message: "mauvais token, autorisation refused", data: error });
    }
    const userId = decodedToken.userId;
    if (req.body.userId && req.body.userId !== userId) {
      res.status(401).json({ message: "id incorecte" });
    } else {
      next();
    }
  });
};
