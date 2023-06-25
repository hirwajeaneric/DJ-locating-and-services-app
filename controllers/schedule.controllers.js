const ScheduleModel = require('../models/schedule.model');
const { StatusCodes } = require('http-status-codes');
const { BadRequestError, NotFoundError } = require('../errors/index');

const add = async (req, res) => {
    const newSchedule = req.body;
    const Schedule = await ScheduleModel.create(req.body);
    res.status(StatusCodes.CREATED).json({ message: 'Created', schedule: Schedule });
};

const getAll = async(req, res) => {
    const schedules = await ScheduleModel.find({})
    res.status(StatusCodes.OK).json({ nbHits: schedules.length, schedules })
};

const findById = async(req, res) => {
    const ScheduleId = req.query.id;
    const Schedule = await ScheduleModel.findById(ScheduleId);
    if (!Schedule) {
        throw new BadRequestError(`Schedule not found!`);
    }
    res.status(StatusCodes.OK).json({ Schedule });
};

const findByStartDay = async(req, res) => {
    const startDay = req.query.startDay;
    const Schedule = await ScheduleModel.findOne({ startDay: startDay });
    res.status(StatusCodes.OK).json({ Schedule });
};

const edit = async(req, res) => {
    const ScheduleId = req.query.id;
    
    const Schedule = await Schedule.findByIdAndUpdate({ _id: ScheduleId}, req.body);
    const updatedSchedule = await ScheduleModel.findById(Schedule._id);
    if (!updatedSchedule) {
        throw new NotFoundError(`Schedule with id ${ScheduleId} not found!`);
    }

    res.status(StatusCodes.OK).json({ message: 'Schedule updated!', payload: updatedSchedule})
};

module.exports = { add, getAll, edit, findById, findByStartDay }