module.exports = (app, User) => {
  app.delete("/user/:id", (req, res) => {
    const id = req.params.id;
    User.findByPk(id).then((element) => {
      const elementDeleted = element;
      element.destroy({ where: { id: element.id } }).then((_) => {
        res.json(elementDeleted);
      });
    });
  });
};
