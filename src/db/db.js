const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "todolist", // nom de la bdd
  "root", // Id de co
  "root", //mdp
  {
    host: "localhost",
    port: 8889,
    dialect: "mariadb",
  },
);

sequelize
  .authenticate()
  .then((_) => console.log("La connexion a la bdd a réussi"))
  .catch((error) => console.error(error));

sequelize
  .sync()
  .then((_) => console.log("la methode sync est réussi"))
  .catch((error) => console.error(error));

module.exports = sequelize;
