const fs = require('fs');

module.exports = (app) => {
  app.get('/package.json', (req, res) => {
    fs.readFile('./package.json', { encoding: 'utf8' }, (error, data) => {
      if (error) res.status(500).text(error.message);
      res.type('text/json').send(data);
    });
  });
};
