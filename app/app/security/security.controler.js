"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SecurityControler = (function () {
    function SecurityControler() {
    }
    SecurityControler.prototype.login = function (req, res, next) {
        if (req.body.username === 'username' && req.body.password === 'password') {
            res.json({
                status: 'OK'
            });
        }
        else {
            res.status(401)
                .send('Niepoprawne dane logowania');
        }
    };
    return SecurityControler;
}());
exports.SecurityControler = SecurityControler;
