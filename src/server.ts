import express from 'express';

const app = express();

app.get("/test-get", (req, res) => {
  return res.send('teste get')
});

app.post("/test-post", (req, res) => {
  return res.send('teste post');
});

app.listen(3000, () => { console.log('Server is running') });