const router=require('express').Router()
const kindVolunteeringsController=require('../controllers/kindVolunteeringsController')

router.get('/getKindVolunteeringById/:id',kindVolunteeringsController.getKindVolunteeringById)
router.get('/getKindVolunteerings',kindVolunteeringsController.getKindVolunteering)
router.put('/updateKindVolunteerings/:id',kindVolunteeringsController.updateKindVolunteering)
router.delete('/deleteKindVolunteerings/:id',kindVolunteeringsController.deleteKindVolunteering)
router.post('/addKindVolunteerings',kindVolunteeringsController.addKindVolunteering)

module.exports=router