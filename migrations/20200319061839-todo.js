'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('todos', 'title', {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
          after: 'id'
        })
      ])
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('todos', 'title')
      ])
    })
  }
};
