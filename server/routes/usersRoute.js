const router=require('express').Router()
const usersController=require('../controllers/usersController')

router.get('/getUserById/:id',usersController.getUserById)
router.get('/tryLog/:email/:passWord',usersController.tryLoggin)
router.get('/getUsers',usersController.getUsers)
router.put('/updateUser/:id',usersController.updataUser)
router.delete('/deleteUser/:id',usersController.deleteUser)
router.post('/addUser',usersController.addUser)

module.exports=router