const router=require('express').Router()
const volunteeringsController=require('../controllers/volunteeringsController')

router.get('/getVolunteeringsById/:id',volunteeringsController.getVolunteeringsById)
router.get('/getVolunteerings',volunteeringsController.getVolunteerings)
router.put('/updateVolunteerings/:id',volunteeringsController.updateVolunteerings)
router.delete('/deleteVolunteerings/:id',volunteeringsController.deleteVolunteerings)
router.post('/addVolunteerings',volunteeringsController.addVolunteerings)

module.exports=router