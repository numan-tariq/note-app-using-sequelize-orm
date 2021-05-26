const { notes } = require('../../@services');
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
 * @description Get all entities
 * @param {*} req
 * @param {*} res
 * @returns all entities
 */
exports.getAllNotes = async(req, res, next) => {
  try {
    await notes.getNotes(res);
    return res.status(200);
  } catch (err) {
    return handleError(res, err);
  }
}

/**
 * @description insert new note
 * @param {*} req
 * @param {*} res
 * @returns
 */
exports.insertNewNote = async(req, res) => {
  try {
    await notes.insertNote(req, res);
  } catch (err) {
    return handleError(res, err);
  }
}

/**
 * @description update note
 * @param {*} req
 * @param {*} res
 * @returns
 */
 exports.updateANote = async(req, res) => {
  try {
    await notes.updateNote(req.params.id, req, res);
  } catch (err) {
    return handleError(res, err);
  }
}

/**
 * @description delete note
 * @param {*} req
 * @param {*} res
 * @returns
 */
 exports.deleteANote = async(req, res) => {
  try {
    await notes.deleteNote(req.params.id, res);
  } catch (err) {
    return handleError(res, err);
  }
}