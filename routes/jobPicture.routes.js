const express = require('express');
const jobPictureRouter = express.Router();

const { findById, getAll, add, attachFile, edit, findByLocation, findByMapCoordinates, findByOwnerId, findByPostId, findByStatus, remove, upload } = require('../controllers/jobPicture.controllers');


jobPictureRouter.post('/add', upload.array('pictures', 12), attachFile, add);
jobPictureRouter.get('/list', getAll);
jobPictureRouter.get('/findById', findById);
jobPictureRouter.put('/update', upload.array('pictures', 12), attachFile, edit);
jobPictureRouter.delete('/delete', remove);
jobPictureRouter.get('/findByLocation', findByLocation);
jobPictureRouter.get('/findByMapCoordinates', findByMapCoordinates);
jobPictureRouter.get('/findByOwnerId', findByOwnerId);
jobPictureRouter.get('/findByPostId', findByPostId);
jobPictureRouter.get('/findByStatus', findByStatus);

module.exports = jobPictureRouter;