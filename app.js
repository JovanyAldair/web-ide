const express = require('express')
const app = express()
const port = 8000
const ide = require("./routes/ide")
const admin = require("./routes/admin")
const users = require("./routes/users")
const course = require("./routes/course")
const ejs = require('ejs')


// ejs

app.set('view engine', 'ejs')
app.set('views', './views')
app.use(express.static('public'))

// --------------- rotas --------------


app.use('/ide', ide)
app.use('/admin', admin)
app.use('/users', users)
app.use('/course', course)



app.listen(port, ()=>{
    console.log('servidor rodando...')
})