var express = require('express');
var router = express.Router();
// sequelizeで定義したデータベースの読み込み
const db = require('../models/index');

// 一覧表示
router.get('/', (req, res) => {
  db.todo.findAll({}).then((results) => {
    res.render('todos/index.ejs', {todos: results} );
  });
});

// 個別表示
router.get('/:id', (req, res) => {
  db.todo.findByPk(req.params.id).then((results) => {
    res.render('todos/show.ejs', {todo: results} );
  });
})

// 新規作成
router.post('/', (req, res) => {
  const param = {
    content: req.body.todoContent
  };
  db.todo.create( param ).then((results) => {
    res.redirect('/');
  });
})

// 編集画面
router.get('/:id/edit', (req, res) => {
  db.todo.findByPk(req.params.id).then((results) => {
    res.render('todos/edit.ejs', {todo: results} );
  });
})

// 更新
router.put('/:id', (req, res) => {
  const param = {
    content: req.body.todoContent
  };
  const filter = {
    where: {
      id: req.params.id
    }
  };
  db.todo.update(param, filter).then((results) => {
    res.redirect('/');
  });
});

// 削除
router.delete('/:id', (req, res) => {
  const filter = {
    where: {
      id: req.params.id
    }
  };
  db.todo.destroy(filter).then((results) => {
    res.redirect('/');
  });
});

module.exports = router;
