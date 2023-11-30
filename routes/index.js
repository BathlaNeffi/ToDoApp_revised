const express = require('express');
const router=express.Router();
const homeController=require('../controller/home_controller');

router.get('/',homeController.home)
router.post('/add-Task',homeController.post);
router.get('/delete-task',homeController.delete);
module.exports=router;