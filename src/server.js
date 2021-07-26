const express = require('express');
const { helloworld } = require("./controllers")
const app = express();

app.use(express.json());


app.post("/hw", helloworld)

app.listen(5000, () => {
    console.log("listen to port 5000");
})