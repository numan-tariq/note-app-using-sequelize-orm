const { notes } = require('../../@models');

/**
 * @description insert new note
 * @param {*} req 
 * @param {*} res 
 */
exports.insertNote = async(req, res) => {
  return notes.create({
    id: req.body.id,
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