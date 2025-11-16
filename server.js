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
  <body style="font-family: "Times New Roman", sans-serif; text-align: center; padding-top: 40px;>
    <h1 style="font-size: 36px; color: #2c3e50; font-weight: bold;>Hi, ${name}!</h1>
    <p style="font-size: 24px; color: #1C8139;">runtime: nodejs</p>
    <p style="font-size: 24px; color: #7E57C2;">region: ${region}</p>
  </body>
</html>`);
});

const PORT = process.env.PORT || 7777;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
