const express = require('express')
const cors = require('cors')
const { loadDefaultData } = require('./models/loadDefaultData')


const app = express()
const port = 8000
const bodyParser=require('body-parser')



app.use(cors());
const mongoose=require('mongoose')
 

//returns the user name
// app.get('/getUserName', (req, res) => {
//   res.send('Noa');
// })
app.use(bodyParser.urlencoded({extended:false }))
app.use(bodyParser.json())

const usersRouter=require('./routes/usersRoute')
app.use('/users',usersRouter)
const kindVolunteeringsRouter=require('./routes/kindVolunteeringsRoute')
app.use('/kindVolunteerings',kindVolunteeringsRouter)
const statusRoute= require('./routes/statusRoute')
app.use('/statusVolenteering',statusRoute)
const volunteeringForVolunteerRouter=require('./routes/voluntreeringForVoluntreerRoute')
app.use('/volunteeringForVolunteer',volunteeringForVolunteerRouter)
const volunteeringsRouter=require('./routes/volunteeringsRoute')
app.use('/volunteerings',volunteeringsRouter)


mongoose.connect("mongodb+srv://efrat:e1f2r3a7t4@cluster0.u0nrtxn.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
  console.log("connect to mongo")
})

mongoose.connection.on('connected', () => {
  console.log('MongoDb Connected!')
  //  loadDefaultData()
})
// app.get('/', (req, res) => {
//   res.send('connect')
// })

app.listen(port, () => {
  console.log(`my project app listening on port ${port}`)
})