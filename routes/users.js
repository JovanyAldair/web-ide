const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    res.render('users/projects')
})
router.get('/add_project', (req, res)=>{
  res.render('users/addProject')
})
router.get('/edit_project', (req, res)=>{
  res.render('users/editData')
})
router.get('/register', (req, res)=>{
  res.render('users/register')
})

router.post("/register",(req,res)=>{
  const { name, email, password } = req.body

 // Validar nome
     if (!/^[a-zA-ZÀ-ÿ\s]+$/.test(name.trim())) {
      return res.status(400).json({ message: "O campo nome deve conter somente letras." });
    }

       // Validar email
     if (!email) {
      return res.status(400).json({ message: "O campo email é obrigatório." });
        } else if (!validator.isEmail(email)) {
          return res.status(400).json({ message: "O email fornecido é inválido." });
        }

  User.findOne({where:{email:email}}).then(users=>{
      if(users ==undefined){

          const salt=bcrypt.genSaltSync(10)
          const hash=bcrypt.hashSync(password,salt)
         
          User.create({
              name:name,
              email:email,
              password:hash,
              isAdmin: true,
          }).then(()=>{
            res.redirect("/login")
          }).catch((err)=>{
            req.flash('error', 'Esse email já está registado, tente outro!');
            res.redirect("/register")
          })
          }else{  
           req.flash('error', 'Esse email já está registrado, tente outro!');
           res.redirect("/register")
      }
  })
})

router.get("/login", (req,res)=>{
  res.render("users/login")
})

router.post("/login", (req,res)=>{
  const { email, password } = req.body

  User.findOne({where: {email:email}}).then(user=>{
      if(user !=undefined){
          var correct = bcrypt.compareSync(password, user.password)
          if(correct){
              req.session.user={
                  id: user.id,
                  email: user.email,
                  isAdmin: user.isAdmin,
              }
              req.flash('success', 'Usuário logado com sucesso!'); // armazena a mensagem de sucesso
                  res.redirect("/")
              }else{
                  req.flash('error', 'password ou email inválido');
                  res.redirect("/login")
              }
          }else{
              req.flash('error', 'password ou email inválido');
              res.redirect("/login")
          }
      })
      
      router.get("/logout",(req,res)=>{
          req.session.user= undefined;
          res.redirect("/login")
      })
})  

module.exports = router