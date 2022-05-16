"use strict";

const bcrypt = require("bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("users", [
      {
        name: "ika",
        profession: "admin micro",
        role: "admin",
        email: "example@gmail.com",
        password: await bcrypt.hash("rahasia1234", 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "yein",
        profession: "prontend",
        role: "student",
        email: "example1@gmail.com",
        password: await bcrypt.hash("rahasiaku1234", 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
