const router = require('express').Router();
const {sendMessage,recieveMessage} = require('../controller/messageController');




router.post('/sendmessage',sendMessage)
router.get('/recievemessage',recieveMessage)













module.exports = router;