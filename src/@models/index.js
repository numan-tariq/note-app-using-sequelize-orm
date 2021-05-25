const Sequelize = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
})

const Note = sequelize.define('notes', { note: Sequelize.TEXT, tag: Sequelize.STRING });

sequelize.sync({ force: true })
  .then(() => {
    console.log(`Database and Tables created!`);

    Note.bulkCreate([
      { note: 'pick up some bread after work', tag: 'shopping' },
      { note: 'remember to write up meeting notes', tag: 'work' },
      { note: 'learn how to use node orm', tag: 'work' },
      { note: 'shop', tag: 'shopping' }
    ]).then(() => {
      return Note.findAll();
    }).then((notes) => {
      console.log(notes);
    });
  });

exports.Note = Note;