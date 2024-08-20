import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    return res.send('Home page');
});

app.get('/about', (req, res) => {
    return res.send('About page');
});

app.get('/services', (req, res) => {
    return res.send('Services page');
});

app.get('/services/design', (req, res) => {
    return res.send('Services page: design');
});

app.get('/services/ux', (req, res) => {
    return res.send('Services page: UX');
});

app.get('/services/coding', (req, res) => {
    return res.send('Services page: Programming');
});

app.get('/services/*', (req, res) => {
    return res.send('Services page: such service is not recognized...');
});

app.get('/team', (req, res) => {
    return res.send('Team page');
});

app.get('/team/chuck', (req, res) => {
    return res.send('Team member page: Chuck');
});

app.get('/team/prime', (req, res) => {
    return res.send('Team member page: Prime');
});

app.get('/team/:name', (req, res) => {
    return res.send(`Team member "${req.params.name}" page not found.`);
});

app.get('/img', (req, res) => {
    return res.send('Images...');
});

app.get('/img/logo.png', (req, res) => {
    return res.send('Images: logo.png turinys :P');
});

app.get('/nuolaidos', (req, res) => {
    return res.send('Nuolaidu puslapis');
});

app.get('/nuolaidos/vasaros-nuolaida', (req, res) => {
    return res.send('Vasaros nuolaidos puslapis');
});

app.get('/nuolaidos/rudens-nuolaida', (req, res) => {
    return res.send('Rudens nuolaidos puslapis');
});

app.get('/nuolaidos/ziemos-nuolaida', (req, res) => {
    return res.send('Ziemos nuolaidos puslapis');
});

app.get('/nuolaidos/pavasario-nuolaida', (req, res) => {
    return res.send('Pavasario nuolaidos puslapis');
});

app.get('/nuolaidos/*', (req, res) => {
    return res.send('Gaila, bet tokia nuolaida neveikia');
});

app.get('*', (req, res) => {
    return res.send('Ups... 404 page 🛸');
});

app.listen(port, () => {
    console.log(`App running on: http://localhost:${port}`);
});