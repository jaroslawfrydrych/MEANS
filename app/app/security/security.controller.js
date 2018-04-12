"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SecurityController = (function () {
    function SecurityController() {
    }
    SecurityController.prototype.login = function (req, res, next) {
        var body = req.body;
        if (body.username === 'username' && body.password === 'password') {
            res.json({
                status: 'OK'
            });
        }
        else {
            res.status(403)
                .send('Niepoprawne dane logowania');
        }
    };
    return SecurityController;
}());
exports.SecurityController = SecurityController;
