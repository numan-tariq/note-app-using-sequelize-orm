const { devices } = require('../../@services');
const { handleError } = require('../../@utils/common/helper');

/**
 * @description default route for the App
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns Http Page
 */
 exports.default = (req, res, next) => {
  try {
    return res.render('index', { title: 'Express' });
  } catch (err) {
    return handleError(res, err);
  }
}

/**
 * @description Get all devices
 * @param {*} req
 * @param {*} res
 * @returns all devices
 */
exports.getAllDevices = async(req, res, next) => {
  try {
    await devices.getDevices(res);
    return res.status(200);
  } catch (err) {
    return handleError(res, err);
  }
}

/**
 * @description Get all devices
 * @param {*} req
 * @param {*} res
 * @returns all devices
 */
 exports.getAllNotesOfDevice = async(req, res, next) => {
  try {
    await devices.getAllNotesDevices(req, res);
    return res.status(200);
  } catch (err) {
    return handleError(res, err);
  }
}

/**
 * @description insert new device
 * @param {*} req
 * @param {*} res
 * @returns
 */
exports.insertNewDevice = async(req, res) => {
  try {
    await devices.insertDevice(req, res);
  } catch (err) {
    return handleError(res, err);
  }
}

/**
 * @description update device
 * @param {*} req
 * @param {*} res
 * @returns
 */
 exports.updateADevice = async(req, res) => {
  try {
    await devices.updateDevice(req.params.id, req, res);
  } catch (err) {
    return handleError(res, err);
  }
}

/**
 * @description delete device
 * @param {*} req
 * @param {*} res
 * @returns
 */
 exports.deleteADevice = async(req, res) => {
  try {
    await devices.deleteDevice(req.params.id, res);
  } catch (err) {
    return handleError(res, err);
  }
}