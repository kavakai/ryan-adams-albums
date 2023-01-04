
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')
const { ryanData } = require('./data');

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.set('port', process.env.PORT || 4020);
app.locals.title = 'Ryan Adams Albums';

app.locals.albums = ryanData

app.get('/', (request, response) => {
  const ryanAdamsAlbums = app.locals.albums
  if (!ryanAdamsAlbums) {
    return response.sendStatus(404)
  }
  return response.status(200).json(ryanAdamsAlbums)
})

app.get('/:id', (request, response) => {
  const { id } = request.params;
  const { albums } = app.locals.albums;
  
  const albumToVIew = albums.find(album => album.id === parseInt(id));

  if (!albumToVIew) {
    return response.status(404).json({
      message: `No found album with id of #${id}.`
    })
  }
  return response.status(200).json(albumToVIew)
});

app.listen(app.get("port"), () => {
  console.log(
    `${app.locals.title} is running on http://localhost:${app.get("port")}.`
  );
});

module.exports = app;
