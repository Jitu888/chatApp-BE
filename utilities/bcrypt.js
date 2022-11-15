const bcrypt = require('bcrypt');
const saltRounds = 4
exports.hash_password = async(passward)=> {
    return await bcrypt.hash(passward,saltRounds)
}

exports.match_password = async(password,hash_password)=>{
    return bcrypt.compare(password,hash_password);
}