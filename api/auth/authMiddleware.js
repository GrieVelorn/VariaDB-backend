const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  const secret = "We'll keep it safe for you.";

  if (token) {
    jwt.verify(token, secret, (error, decodedToken) => {
      if (error) {
        res.status(401).json({ you: "shall not pass!" });
      } else {
        req.decodedToken = decodedToken;
        next();
      }
    });
  } else {
    res
      .status(401)
      .json({ message: "please provide valid creditials for access rights." });
  }
};
