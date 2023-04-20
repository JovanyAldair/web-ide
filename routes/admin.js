const express = require('express')

const router = express.Router()

router.get('/', (req, res)=> {
    res.render('admin/dashboard')
})

router.get('/edit_users', (req, res)=>{
    res.render('admin/editUsers')
})
router.get('/edit_data', (req, res)=>{
    res.render('admin/editData')
})
router.get('/projects', (req, res)=>{
    res.render('admin/projects')
})
router.get('/courses', (req, res)=>{
    res.render('admin/courses')
})

module.exports = router