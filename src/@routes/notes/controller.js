const { notes } = require('../../@services');
const { handleError } = require('../../@shared/common/helper');

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
exports.getAllEntity = async(req, res, next) => {
  try {
    await notes.getEntities(res);
    return res.status(200);
  } catch (err) {
    return handleError(res, err);
  }
}
/**
 * @description get entity by id
 * @param {*} req 
 * @param {*} res 
 * @returns entity
 */
 exports.getEntityByID = async(req, res) => {
  try {
    await notes.getByID(req, res);
  } catch (err) {
    return handleError(res, err);
  }
}

/**
 * @description get entity by Note and Tag
 * @param {*} req 
 * @param {*} res 
 * @returns entity
 */
 exports.getEntityByNoteAndTag = async(req, res) => {
  try {
    await notes.getByNameAndTag(req, res);
  } catch (err) {
    return handleError(res, err);
  }
}

/**
 * @description get entity by Tag
 * @param {*} req 
 * @param {*} res 
 * @returns entity
 */
 exports.getEntityByTag = async(req, res) => {
  try {
    await notes.getByTag(req, res);
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