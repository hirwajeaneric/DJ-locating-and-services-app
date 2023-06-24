const express = require('express');
const jobRouter = express.Router();

const { findById, add, remove, edit, getAll } = require('../controllers/job.controllers');

jobRouter.post('/add', add);
jobRouter.get('/list', getAll);
jobRouter.get('/findById', findById);
jobRouter.put('/update', edit);
jobRouter.delete('/delete', remove);

module.exports = jobRouter;