const express = require('express');
const scheduleRouter = express.Router();

const { findById, add, edit, findByStartDay, findById, getAll } = require('../controllers/schedule.controllers');

scheduleRouter.post('/add', add);
scheduleRouter.get('/list', getAll);
scheduleRouter.get('/findById', findById);
scheduleRouter.get('/findByStartDay', findByStartDay);
scheduleRouter.put('/update', edit);

module.exports = scheduleRouter;