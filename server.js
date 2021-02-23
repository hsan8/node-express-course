const express = require('express');
const app = express();
const userDetails = {
    fullName: "Ali ben Salah",
    age: 30,
    nationality: "Tunisien"
}
app.get('/', returnUser);

function returnUser(req, res) {
    res.send(userDetails);
};
app.listen(8000, function() {
    console.log("server is running")
})