const errorMiddleWare = (err, req, res, next) => {
    console.log('ERRORR');
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);

    let response = { message: err.message };
    // Explicitly check if NODE_ENV is not 'production'
    if (process.env.NODE_ENV !== 'production') {
        response.stack = err.stack;
    }

    res.json(response);
}

 

module.exports = errorMiddleWare