const bcrypt = require("bcrypt");

module.exports = (app, User) => {
  app.post("/adduser", (req, res) => {
    const password = req.body.password;
    const email = req.body.email;
    // bcrypt prend deux param
    // 1er -> element ciblé
    // 2iem -> temps de hash (10)
    bcrypt.hash(password, 10).then((hash) => {
      User.create({
        email: email,
        password: hash,
      }).then((element) => {
        console.log(element.toJSON());
        res.json(element);
      });
    });
  });
};
