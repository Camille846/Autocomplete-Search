const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.static('public'));

app.use(routes);

app.listen(3000, () => {
  console.log('> [app] Running on http://localhost:3000');
});
