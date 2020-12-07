

const sendSocket =(postionName,data)=>{
 
    io.emit(postionName,data)
    
}

module.exports = sendSocket;