function handleErrors(error, req, res, next){
    console.log(error);
    res.status(500).json({
        message:"something went wrong!"
    })
}

module.exports = handleErrors;