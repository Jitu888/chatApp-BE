const router = require('express').Router();
const {register, login} = require('../controller/signInsignUpController');


(()=>{
    auth_requests()
})();



function auth_requests(){
    router.post("/register",register)
    router.post("/login",login)
   
}





module.exports = router;