const express = require('express');
const router = express.Router();
const todosController = require('../controllers/todosControllers');

// 一覧表示
router.get('/', (req, res) => {
  todosController.index(req, res);
});

// 個別表示
router.get('/:id', (req, res) => {
  todosController.show(req, res);
})

// 新規作成
router.post('/', (req, res) => {
  todosController.create(req, res);
})

// 編集画面
router.get('/:id/edit', (req, res) => {
  todosController.edit(req, res);
})

// 更新
router.put('/:id', (req, res) => {
  todosController.update(req, res);
});

// 削除
router.delete('/:id', (req, res) => {
  todosController.delete(req, res);
});

module.exports = router;
