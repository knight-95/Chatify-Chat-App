const express = require('express');
// const dotenv = require('dotenv');
const app = express();

// dotenv.config();

app.get('/', (req,res) => {
    res.send("API is running")
})

// const PORT = process.env.PORT || 7000
app.listen(3000,console.log("Server started on PORT 3000"));