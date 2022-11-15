const server = require("./server");
const PORT = process.env.PORT|| 1111;



server.listen(PORT,()=>{
    console.log(`server is running at port ${PORT}`)
})


