module.exports = (app, User) => {
  app.put("/user/:id", (req, res) => {
    const id = req.params.id;
    User.update(req.body, { where: { id } }).then((_) => {
      User.findByPk(id).then((element) => {
        res.json(element);
      });
    });
  });
};
