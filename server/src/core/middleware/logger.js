function logger(req, res, next) {
    //console.log(req.originalUrl);
    console.log("Logger");
    next();
}
export default logger;