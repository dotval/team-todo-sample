# 開発環境
- Node.js v12.13.1
- MySQL v5.7.29
- jQuery 3.4

# セットアップ手順
```
$ git clone https://github.com/gs-create/team-todo-sample.git
$ cd team-todo-sample
$ npm install
$ npx sequelize-cli db:create
$ npx sequelize-cli db:migrate
$ npx sequelize-cli db:seed:all
$ npm start
```
