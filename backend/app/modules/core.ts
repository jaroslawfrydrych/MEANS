export function asdHandler(req, res, next) {
    res.send(req.auth);
}
