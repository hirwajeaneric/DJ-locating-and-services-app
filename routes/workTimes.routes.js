const express = require('express');
const workTimeRouter = express.Router();

const { findById, getAll, add, edit, findByJoinPost, findByPropertyId, remove } = require('../controllers/workTime.controllers');

workTimeRouter.post('/add', add);
workTimeRouter.get('/list', getAll);
workTimeRouter.get('/findById', findById);
workTimeRouter.get('/findByJoinPost', findByJoinPost);
workTimeRouter.get('/findByPropertyId', findByPropertyId);
workTimeRouter.put('/update', edit);
workTimeRouter.delete('/delete', remove);

module.exports = workTimeRouter;