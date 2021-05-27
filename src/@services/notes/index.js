const { notes, devices } = require('../../@models');

/**
 * @description insert new note
 * @param {*} req 
 * @param {*} res 
 */
exports.insertNote = async(req, res) => {
  const device = await devices.findOne({
    where: {
      deviceUUID: req.headers['uuid']
    },
    attributes: ['id']
  });
  return notes.create({
    deviceId: device.id,
    note: req.body.note
  })
  .then((note) => {
    res.json(note);
  });
}

/**
 * @description Get all entities
 * @param {*} req 
 * @param {*} res 
 * @returns all entities
 */
exports.getNotes = async(res) => {
  return await notes.findAll()
    .then((note) => {
      res.json(note);
    });
}


/**
 * @description update note
 * @param {*} req 
 * @param {*} res 
 */
 exports.updateNote = async(id, req, res) => {
  return await notes.findByPk(id)
  .then((note) => {
    note.update({
      note: req.body.note
    })
    .then((note) => {
      res.json(note);
    })
  });
}

/**
 * @description delete note
 * @param {*} req 
 * @param {*} res 
 */
 exports.deleteNote = async(id, res) => {
  return await notes.findByPk(id)
  .then((note) => {
    note.destroy();
  })
  .then(() => {
    res.sendStatus(200);
  });
}