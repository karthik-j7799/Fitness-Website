const express=require('express')
const router=express.Router()
const customercontroller=require('./Customer/customerController')
const doctorController=require('./Doctor/doctorController')
const gymController=require('./Gym/gymController')
const trainer=require('./Tranier/trainerController')
const tutorial=require('./Tranier/tutorialController')
const pgm=require('./Tranier/pgmController')
const subscription=require('./Subscriptions/subscriptionController')
const chat=require('./Chats/chatController')
const admin = require('./Admin/AdminController')


//cust  routes
router.post('/registerCustomer',customercontroller.registerCustomer)
router.post('/loginCustomer',customercontroller.login)
router.post('/viewCustomers',customercontroller.viewCustomers)
router.post('/editCustomerById/:id',customercontroller.editCustomerById)
router.post('/chckAuth',customercontroller.requireAuth)
router.post('/viewCustomerById/:id',customercontroller.viewCustomerById)
router.post('/forgotPwd',customercontroller.forgotPwd)
router.post('/deleteCustomerById/:id',customercontroller.deleteCustomerById)
router.post('/addCustUpdate/:id',customercontroller.upload,customercontroller.addCustUpdate)
router.post('/viewCustomerProgressById/:id',customercontroller.viewCustomerProgressById)
router.post('/viewCustomerProgressforHome',customercontroller.viewCustomerProgressforHome)
router.post('/deleteCustomerProgressById/:id',customercontroller.deleteCustomerProgressById)
router.post('/viewCustomerProgressByCustId/:id',customercontroller.viewCustomerProgressByCustId)


//doctors
router.post('/registerDoctor',doctorController.upload,doctorController.registerDoctor)
router.post('/viewAllDoctors',doctorController.viewApprovedDoctors)
router.post('/viewDoctorById/:id',doctorController.viewDoctorById)
router.post('/editDoctorById/:id',doctorController.editDoctorById)
router.post('/loginDoctor',doctorController.login)
router.post('/showrequestsDoctor',doctorController.viewDoctorRequests)
router.post('/approveDoctor/:id',doctorController.ApproveDoctor)
router.post('/deleteDrById/:id',doctorController.deleteDrById)

//gym
router.post('/registerGym',gymController.registerGym)
router.post('/loginGym',gymController.login)
router.post('/viewGyms',gymController.viewGyms)
router.post('/editGymById/:id',gymController.editGymById)
router.post('/chckAuth',gymController.requireAuth)
router.post('/viewGymById/:id',gymController.viewGymById)
router.post('/removeGymById/:id',gymController.removeGymById)
router.post('/bookGym',gymController.bookGym)
router.post('/acceptGymReqsById/:id',gymController.acceptGymReqsById)
router.post('/viewGymReqsById/:id',gymController.viewGymReqsById)
router.post('/viewGymReqsByCustId/:id',gymController.viewGymReqsByCustId)
router.post('/ViewGymMembers/:id',gymController.ViewGymMembers)
router.post('/addImages/:id',gymController.upload.array('img'),gymController.addImages)
router.post('/deleteGymMembersById/:id',gymController.deleteGymMembersById)


//trainer
router.post('/registertrainer',trainer.upload,trainer.registerTrainer)
router.post('/logintrainer',trainer.login)
router.post('/viewtrainers',trainer.viewTrainers)
router.post('/edittrainerById/:id',trainer.editTrainerById)
router.post('/chckAuth',trainer.requireAuth)
router.post('/viewtrainerById/:id',trainer.viewTrainerById)
router.post('/removetrainerById/:id',trainer.removeTrainerById)
router.post('/viewtrainerRequests',trainer.viewTrainerRequests)
router.post('/approveTrainer/:id',trainer.ApproveTrainer)
router.post('/forgotPwd',trainer.forgotPwd)


//tutorial routes
router.post('/addtutorial',tutorial.upload,tutorial.addTutorial)
router.post('/viewtutorials',tutorial.viewtutorials)
router.post('/viewtutorialById/:id',tutorial.viewTutorialById)
router.post('/removetutorialById',tutorial.removeTutorialById)
router.post('/viewTutorialRequestsByPgmId/:id',tutorial.viewTutorialRequestsByPgmId)


router.post('/approvetutorial/:id',tutorial.Approvetutorial)
router.post('/viewTutorialByTrainerId/:id',tutorial.viewtutorialByTrainerId)
router.post('/viewtutorialByPgmId/:id',tutorial.viewtutorialByPgmId)

//pgm routes

router.post('/viewPgms',pgm.viewPgms)
router.post('/Approvepgm/:id',pgm.Approvepgm)
router.post('/addPgm/:id',pgm.addPgm)
router.post('/removePgmById/:id',pgm.removePgmById)
router.post('/viewPgmRequests/:id',pgm.viewPgmRequests)
router.post('/viewPgmByTrainerId/:id',pgm.viewPgmByTrainerId)
router.post('/viewtutorials/:id',pgm.viewPgmById)



//subsription  routes
router.post('/subscribePgm',subscription.subscribePgm)
router.post('/viewSubscriptionsByCId/:id',subscription.viewSubscriptionsByCId)
router.post('/addRating/:id',subscription.addRating)
router.post('/unsubscribePgmByCId/:id',subscription.unsubscribePgmByCId)
router.post('/viewUnSubscriptionsByCId/:id',subscription.viewUnSubscriptionsByCId)
router.post('/viewMysubscriptions/:id',subscription.viewMysubscriptions)

//chat routes
router.post('/createChat',chat.createChat)
router.post('/viewChatForDrwithCust',chat.viewChatForDrwithCust)
router.post('/ViewPatientstoChat/:id',chat.ViewPatientstoChat)

router.post('/viewCustomersforDr/:id',chat.viewCustomersforDr)
router.post('/ViewTrainerstoChat/:id',chat.ViewTrainerstoChat)
router.post('/viewChatForTrainerwithCust',chat.viewChatForTrainerwithCust)
router.post('/ViewCustomerstoChat/:id',chat.ViewCustomerstoChat)

//admin routes

router.post('/changeUserCredentials',admin.changeUserCredentials)


router.post('/contactAdmin',admin.contactAdmin)
router.post('/viewContacts',admin.viewContacts)

module.exports=router