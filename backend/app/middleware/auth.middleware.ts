export default (req, res, next) => {
    console.log('authMiddleware', req.auth);
    next();
};
