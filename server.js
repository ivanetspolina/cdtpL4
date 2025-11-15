const express = require('express');
const app = express();

app.use(express.json());

app.all('/', (req, res) => {
  const name =
    req.query.name ||
    (req.body && req.body.name) ||
    'Polina';

  const region =
    process.env.GCP_REGION ||
    process.env.REGION ||
    'unknown';

  res
    .status(200)
    .type('text/html; charset=utf-8')
    .send(`<!doctype html>
<html>
  <body>
    <h1>Hi, ${name}!</h1>
    <p>runtime: nodejs</p>
    <p>region: ${region}</p>
  </body>
</html>`);
});

const PORT = process.env.PORT || 7777;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
