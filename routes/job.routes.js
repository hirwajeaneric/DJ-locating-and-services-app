const express = require('express');
const jobRouter = express.Router();

const { findById, add, remove, edit, findByOwnerId, findByStatus, findByTenantId, getAll } = require('../controllers/job.controllers');

jobRouter.post('/add', add);
jobRouter.get('/list', getAll);
jobRouter.get('/findById', findById);
jobRouter.get('/findByOwnerId', findByOwnerId);
jobRouter.get('/findByStatus', findByStatus);
jobRouter.get('/findByTenantId', findByTenantId);
jobRouter.put('/update', edit);
jobRouter.delete('/delete', remove);

module.exports = jobRouter;