const express = require( 'express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5005;


app.use(bodyParser.urlencoded({ extended: true}));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


app.get('/logs/new', (req, res) => {
    res.render('New');
});

app.post('/logs' , (req, res) => {
    console.log(req.body);
    res.send('received');
});






app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})