let customApiError=(message,StatusCode)=>
{
    let customError= new Error(message)
    customError.StatusCode=StatusCode
    return customError
}

module.exports=customApiError