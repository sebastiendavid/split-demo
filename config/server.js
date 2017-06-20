const fs = require('fs');

module.exports = app => {
  app.get('/package.json', (req, res) => {
    fs.readFile('./package.json', { encoding: 'utf8' }, (error, data) => {
      if (error) res.status(500).text(error.message);
      res.type('text/json').send(data);
    });
  });

  app.get('/api/users.json', (req, res) => {
    const users = [];
    for (let n = 1; n <= 20; n += 1) {
      users.push({ id: n, name: `name#${n}` });
    }
    res.json(users);
  });
};
