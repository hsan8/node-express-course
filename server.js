const express = require('express');
const app = express();
const userDetails = {
    fullName: "Ali ben Salah",
    age: 30,
    nationality: "Tunisien"
}
app.get('/user/:id', returnUser);

function returnUser(req, res) {
    var id = req.params.id;
    console.log(id);
    res.send(userDetails);
};
app.listen(8000, function() {
    console.log("server is running")
})