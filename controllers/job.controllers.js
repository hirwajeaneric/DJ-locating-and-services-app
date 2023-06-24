const Job = require('../models/job.model');
const { StatusCodes } = require('http-status-codes');
const { BadRequestError, NotFoundError } = require('../errors/index');
// const sendEmail = require('../utils/email/sendEmail');

const add = async (req, res) => {
    const job = await Job.create(req.body);
    res.status(StatusCodes.CREATED).json({ message: 'Booking Created', job })
};

const getAll = async(req, res) => {
    const jobs = await Job.find({})
    res.status(StatusCodes.OK).json({ nbHits: jobs.length, jobs })
};

const findById = async(req, res) => {
    const jobId = req.query.id;
    const job = await Job.findById(jobId);
    if (!job) {
        throw new BadRequestError(`Job not found!`);
    }
    res.status(StatusCodes.OK).json({ job });
};

const remove = async(req, res) => {
    const jobId = req.query.id;
    const deletedJob = await Job.findByIdAndRemove({ _id: jobId});

    if (!deletedJob) {
        throw new NotFoundError(`Job with id ${jobId} not found!`);
    }

    res.status(StatusCodes.OK).json({ message: 'Job deleted'})
};

const edit = async(req, res) => {
    const job = req.body;
    const jobId = req.query.id;
    var updatedJob = {};

    if (!updatedJob) {
        throw new NotFoundError(`Job with id ${jobId} not found!`);
    }
    res.status(StatusCodes.OK).json({ message: 'Job updated', payload: updatedJob})
};

module.exports = { add, getAll, edit, findById, remove };