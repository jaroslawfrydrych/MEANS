export default (req, res, next) => {
    if(req.url === '/api/security/login') {
        return next();
    }

    console.log(req.cookies, req.signedCookies);

    if (req && req.cookies)
    {
        console.log(req.cookies['BEARER']);
    }
    next();
}