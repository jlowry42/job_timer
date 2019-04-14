const express = require('express');

const server = express();
server.get('/', (req, res) => {
  res.send('sanity check!!')
})

const port = 4000;

server.listen(port, () => console.log(`server is listening on port ${port}`));
