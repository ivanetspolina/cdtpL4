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
  <body style="font-family: Arial, sans-serif; text-align: center; padding-top: 40px;>
    <h1 style="font-size: 2.5rem; color: #2c3e50;>Hi, ${name}!</h1>
    <p style="font-size: 1.1rem; color: #555555;">runtime: nodejs</p>
    <p style="font-size: 1.1rem; color: #555555;">region: ${region}</p>
  </body>
</html>`);
});

const PORT = process.env.PORT || 7777;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
