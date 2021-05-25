const { Note } = require('../../@models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
/**
 * @description Get all entities
 * @param {*} req 
 * @param {*} res 
 * @returns all entities
 */
exports.getEntities = async(res) => {
  return await Note.findAll()
    .then((notes) => {
      res.json(notes);
    });
}

/**
 * @description get entity by id
 * @param {*} req 
 * @param {*} res 
 * @returns entity
 */
exports.getByID = async(req, res) => {
  return await Note.findAll({ 
    where: { 
      id: req.params.id 
    } 
  })
  .then((notes) => {
    res.json(notes)
  });
}

/**
 * @description get entity by Note and Tag
 * @param {*} req 
 * @param {*} res 
 * @returns entity
 */
exports.getByNameAndTag = async(req, res) => {
  return await Note.findAll({ 
    where: { 
      note: req.query.note, 
      tag: req.query.tag 
    } 
  })
  .then((notes) => {
    res.json(notes)
  });
}

/**
 * @description get entity by Tag
 * @param {*} req 
 * @param {*} res 
 * @returns entity
 */
exports.getByTag = async(req, res) => {
  return await Note.findAll({ 
    limit: 2,
    where: { 
      tag: {
        [Op.or]: [].concat(req.query.tag)
      }
    }
  })
  .then((notes) => {
    res.json(notes)
  });
}