const router = require('express').Router();
const {createConversation,getConversation} = require('../controller/conversationController')

router.post("/createcon",createConversation)
router.get("/getCon",getConversation)













module.exports = router;