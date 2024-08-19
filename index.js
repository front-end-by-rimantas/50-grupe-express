import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    return res.send('Labas rytas, Lietuva!');
});

app.get('/about', (req, res) => {
    return res.send('Nori suzinoti apie si projekta? 😏');
});

app.get('*', (req, res) => {
    return res.send('Ups... Norimas puslapis nerastas 🛸');
});

app.listen(port, () => {
    console.log(`App running on: http://localhost:${port}`);
});