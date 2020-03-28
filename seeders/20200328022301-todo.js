'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('todos', [
      {
        title: 'CREATE勉強会の準備',
        content: 'エラー探し問題を4つ作成',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'レポート作成',
        content: '図書館で本を4冊借りる・引用を5つ抜き出す・レポートを書く',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('todos', null, {});
  }
};
