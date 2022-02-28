import { ryanData } from './data';

const { response } = require('express');
const express = require('express');
const app = express();

app.set('port', process.env.port || 7000);

app.locals.title = 'Ryan Adams Albums';

app.get('/', (request, response) => {
  response.send('Welcome to Heartbreaker')
})

app.listen(app.get("port"), () => {
  console.log(
    `${app.locals.title} is running on http://localhost:${app.get("port")}.`
  );
});

app.locals.albums = ryanData