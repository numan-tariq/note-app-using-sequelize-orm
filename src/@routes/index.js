module.exports = (app) => {
  app.use('/notes', require('./notes/routes-config'));
}