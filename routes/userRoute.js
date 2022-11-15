const router = require('express').Router();
const {followUser,unfollowUser,getUser} = require('../controller/userController');


(()=>{
    user_requests()
})();



function user_requests(){
    router.get("/user", getUser)
    router.put("/follow",followUser)
     router.put("/unfollow",unfollowUser)
   
};

module.exports = router;
