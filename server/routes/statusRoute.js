const router=require('express').Router()
const statusVolenteeringController=require('../controllers/statusVolenteeringController')

router.get('/getStatusVolenteeringById/:id',statusVolenteeringController.getStatusById)
router.get('/getStatusVolenteering',statusVolenteeringController.getStatusVolenteering)
router.put('/updateKindVolunteerings/:id',statusVolenteeringController.updateStatusVolenteering)
// router.delete('/deleteKindVolunteerings/:id',kindVolunteeringsController.deleteKindVolunteering)
// router.post('/addKindVolunteerings',kindVolunteeringsController.addKindVolunteering)

module.exports=router