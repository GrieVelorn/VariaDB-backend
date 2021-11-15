const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("./authModel.js");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({ message: "Welcome to the auth router" });
});

router.post("/register", (req, res) => {
  const creds = req.body;
  const rounds = 8;
  const hash = bcryptjs.hashSync(creds.password, rounds);
  creds.password = hash;
  db.add(creds)
    .then((data) => {
      res.status(201).json({ info: data, LoginInfo: creds });
    })
    .catch((err) => {
      res.status(401).json({ message: "invalid credentials", err });
    });
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  db.login(username)
    .then(([user]) => {
      console.log("user", user);
      if (user && bcryptjs.compareSync(password, user.password)) {
        const token = createToken(user);
        res.status(200).json({
          token,
          message: "Welcome to your new backend. Lets analyze some stuff.",
          userInfo: {
            id: user.id,
            name: user.username,
          },
        });
      } else {
        res.status(401).json({ message: "invalid input" });
      }
    })
    .catch((err) => console.log(err));
});

function createToken(user) {
  const payload = {
    id: user.id,
    username: user.username,
  };
  const secret = "We'll keep it safe for you.";
  const options = {
    expiresIn: "10d",
  };
  return jwt.sign(payload, secret, options);
}

module.exports = router;
