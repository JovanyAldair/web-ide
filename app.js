const express = require('express')
const app = express()
const port = 8003
const ide = require("./routes/ide")
const ejs = require('ejs')


// ejs

app.set('view engine', 'ejs')
app.set('views', './views')
app.use(express.static('public'))

// --------------- routes --------------


app.use('/ide', ide)


app.listen(port, () => {
    console.log('The server is ')
})