const express=require('express')
const router= express.Router()
const signupTemplateCopy=  require('./modules/signupModule')

router.post('/signup',(req,res)=>{
    const signedUpUser = new signupTemplateCopy({
        fullName:req.body.fullName,
        username:req.body.username,
        email:req.body.email,
        password:req.body.password,
    })
    signedUpUser.save().then(
        data=>{
            res.json(data)
        }
    )
    .catch(err=>{
        res.json(err)
    })
})


router.post('/signin',(req,res)=>{
    var mail=req.body.email
    var pass=req.body.password
    signupTemplateCopy.find({"email":mail},{"password":pass}).then(
        (data)=>{
            res.json(data)
           
        }
    )
    .catch(err=>{
        res.json(err)
    })
})

module.exports = router