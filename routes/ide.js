const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    res.render('ide/ide')
})


module.exports = router