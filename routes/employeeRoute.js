const router = require('express').Router();
const {createEmployee,deleteEmployee,getAllEmployee,getEmployee,updateEmployee} = require('../controller/EmployeeController');

const {verifyAdmin} = require('../utilities/jwt');
const upload = require('../utilities/multer');




(()=>{
  employee_requests()
})();






function employee_requests(){
    router.post("/add_employees",upload.single('img'),createEmployee);

    router.get("/get_employee",getEmployee);
  

    router.get("/get_all_employees",getAllEmployee);

    router.put("/update_employee",updateEmployee);

    router.delete("/delete_employee",deleteEmployee);
}


module.exports = router