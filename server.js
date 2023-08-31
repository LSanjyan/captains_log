const express = require( 'express');
const app = express();
const PORT = process.env.PORT || 5005;

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


app.get('/logs/new', (req, res) => {
    res.render('New');
});






app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})