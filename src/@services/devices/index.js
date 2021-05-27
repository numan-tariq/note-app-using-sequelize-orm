const { devices, notes } = require('../../@models');
const {v4 : uuidv4} = require('uuid')

/**
 * @description insert new device
 * @param {*} req 
 * @param {*} res 
 */
exports.insertDevice = async(req, res) => {
  return devices.create({
    deviceUUID: uuidv4(),
    deviceName: req.body.deviceName
  })
  .then((device) => {
    res.json(device);
  })
  .catch((error) => {
    res.status(400).send(error)
  });
}

/**
 * @description Get all devices
 * @param {*} req 
 * @param {*} res 
 * @returns all devices
 */
exports.getDevices = async(res) => {
  return await devices.findAll()
    .then((device) => {
      res.json(device);
    })
    .catch((error) => {
      res.status(400).send(error)
    });
}
/**
 * @description Get all Notes of Device
 * @param {*} req 
 * @param {*} res 
 * @returns all Notes
 */
 exports.getAllNotesDevices = async(req, res) => {
  return await devices.findByPk(req.params.id, {
    include: [{
      model: notes,
      as: 'notes'
    }]
  })
  .then((device) => {
    if(!device) {
      return res.status(404).send({ message: 'Device Not Found' });
    }
    res.json(device);
  })
  .catch((error) => {
    res.status(400).send(error)
  });
}

/**
 * @description update device
 * @param {*} req 
 * @param {*} res 
 */
 exports.updateDevice = async(id, req, res) => {
  return await devices.findByPk(id)
  .then((device) => {
    device.update({
      deviceName: req.body.deviceName
    })
    .then((device) => {
      res.json(device);
    })
  })
  .catch((error) => {
    res.status(400).send(error)
  });
}

/**
 * @description delete device
 * @param {*} req 
 * @param {*} res 
 */
 exports.deleteDevice = async(id, res) => {
  return await devices.findByPk(id)
  .then((device) => {
    device.destroy();
  })
  .then(() => {
    res.sendStatus(200);
  })
  .catch((error) => {
    res.status(400).send(error)
  });
}