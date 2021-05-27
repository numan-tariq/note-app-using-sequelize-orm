module.exports = (app) => {
  app.use('/notes', require('./notes/routes-config'));
  app.use('/devices', require('./devices/routes-config'));
}