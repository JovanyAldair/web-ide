const express = require('express')

const router = express.Router()

router.get('/desenvolvimento_web/introducao_ao_html', (req, res)=> {
    res.render('course/introduction')
})



module.exports = router