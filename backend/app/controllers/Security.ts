export function loginHandler(req, res, next) {
    const content = req.swagger.params['content'].value;
    res.json(content);
}