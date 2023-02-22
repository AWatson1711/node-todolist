module.exports = (app, User) => {
  app.get("/", (req, res) => {
    User.findAll().then((user) => {
      res.json({ user });
    });
  });
};
