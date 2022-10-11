const express = require('express')
const { chats } = require('./data/data')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const app = express()
const userRoutes = require('./routes/userRoutes')
dotenv.config({ path: './backend/.env' })
connectDB()

app.use(express.json()) //to accept json data

app.get('/', (req, res) => {
  res.send('API is running')
})

// app.get('/api/chat/:id', (req,res) =>{
//     // console.log(req.params.id);

//     // comparing id's of each of the chats
//     const singleChat = chats.find(c=> c._id===req.params.id);
//     res.send(singleChat);
// })
app.use('/api/user', userRoutes)

const port = process.env.PORT || 5000
app.listen(port, console.log('`Server started on PORT 5000`'))
