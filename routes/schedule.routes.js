const express = require('express');
const scheduleRouter = express.Router();

const { findById, add, edit, findByPropertyId, findByExpectedActivities, findByOwnerId, findByPostingTenantId, getAll } = require('../controllers/schedule.controllers');

scheduleRouter.post('/add', add);
scheduleRouter.get('/list', getAll);
scheduleRouter.get('/findById', findById);
scheduleRouter.get('/findByPropertyId', findByPropertyId);
scheduleRouter.get('/findByExpectedActivities', findByExpectedActivities);
scheduleRouter.get('/findByOwnerId', findByOwnerId);
scheduleRouter.get('/findByPostingTenantId', findByPostingTenantId);
scheduleRouter.put('/update', edit);

module.exports = scheduleRouter;