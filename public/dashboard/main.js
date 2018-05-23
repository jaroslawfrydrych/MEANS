(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../api/api.module.ts":
/*!****************************!*\
  !*** ../api/api.module.ts ***!
  \****************************/
/*! exports provided: ApiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiModule", function() { return ApiModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./configuration */ "../api/configuration.ts");
/* harmony import */ var _api_security_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api/security.service */ "../api/api/security.service.ts");
/* harmony import */ var _api_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api/users.service */ "../api/api/users.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var ApiModule = /** @class */ (function () {
    function ApiModule(parentModule) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import your base AppModule only.');
        }
    }
    ApiModule_1 = ApiModule;
    ApiModule.forRoot = function (configurationFactory) {
        return {
            ngModule: ApiModule_1,
            providers: [{ provide: _configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"], useFactory: configurationFactory }]
        };
    };
    ApiModule = ApiModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]],
            declarations: [],
            exports: [],
            providers: [
                _api_security_service__WEBPACK_IMPORTED_MODULE_4__["SecurityService"],
                _api_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"]
            ]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"])()),
        __metadata("design:paramtypes", [ApiModule])
    ], ApiModule);
    return ApiModule;
    var ApiModule_1;
}());



/***/ }),

/***/ "../api/api/api.ts":
/*!*************************!*\
  !*** ../api/api/api.ts ***!
  \*************************/
/*! exports provided: APIS, SecurityService, UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APIS", function() { return APIS; });
/* harmony import */ var _security_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./security.service */ "../api/api/security.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SecurityService", function() { return _security_service__WEBPACK_IMPORTED_MODULE_0__["SecurityService"]; });

/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users.service */ "../api/api/users.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return _users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"]; });





var APIS = [_security_service__WEBPACK_IMPORTED_MODULE_0__["SecurityService"], _users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"]];


/***/ }),

/***/ "../api/api/security.service.ts":
/*!**************************************!*\
  !*** ../api/api/security.service.ts ***!
  \**************************************/
/*! exports provided: SecurityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityService", function() { return SecurityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../variables */ "../api/variables.ts");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../configuration */ "../api/configuration.ts");
/**
 * MEANS
 * Api dla MEANS
 *
 * OpenAPI spec version: 1.0.0
 * Contact: jarek.frydrych@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var SecurityService = /** @class */ (function () {
    function SecurityService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'http://localhost/api';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    SecurityService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    SecurityService.prototype.currentUserQuery = function (observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/security/current", {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    SecurityService.prototype.loginHandler = function (content, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (content === null || content === undefined) {
            throw new Error('Required parameter content was null or undefined when calling loginHandler.');
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }
        return this.httpClient.post(this.basePath + "/security/login", content, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    SecurityService.prototype.logoutHandler = function (observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/security/logout", {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    SecurityService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_variables__WEBPACK_IMPORTED_MODULE_2__["BASE_PATH"])), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String, _configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"]])
    ], SecurityService);
    return SecurityService;
}());



/***/ }),

/***/ "../api/api/users.service.ts":
/*!***********************************!*\
  !*** ../api/api/users.service.ts ***!
  \***********************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../encoder */ "../api/encoder.ts");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variables */ "../api/variables.ts");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../configuration */ "../api/configuration.ts");
/**
 * MEANS
 * Api dla MEANS
 *
 * OpenAPI spec version: 1.0.0
 * Contact: jarek.frydrych@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var UsersService = /** @class */ (function () {
    function UsersService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'http://localhost/api';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    UsersService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    UsersService.prototype.userDetailsQuery = function (id, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling userDetailsQuery.');
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/users/" + encodeURIComponent(String(id)), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    UsersService.prototype.userNewHandler = function (content, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (content === null || content === undefined) {
            throw new Error('Required parameter content was null or undefined when calling userNewHandler.');
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }
        return this.httpClient.post(this.basePath + "/users", content, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    UsersService.prototype.usersListQuery = function (page, count, sortDirection, sortOrder, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
        if (page !== undefined) {
            queryParameters = queryParameters.set('page', page);
        }
        if (count !== undefined) {
            queryParameters = queryParameters.set('count', count);
        }
        if (sortDirection !== undefined) {
            queryParameters = queryParameters.set('sort_direction', sortDirection);
        }
        if (sortOrder !== undefined) {
            queryParameters = queryParameters.set('sort_order', sortOrder);
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/users", {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    UsersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"])), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String, _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]])
    ], UsersService);
    return UsersService;
}());



/***/ }),

/***/ "../api/configuration.ts":
/*!*******************************!*\
  !*** ../api/configuration.ts ***!
  \*******************************/
/*! exports provided: Configuration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Configuration", function() { return Configuration; });
var Configuration = /** @class */ (function () {
    function Configuration(configurationParameters) {
        if (configurationParameters === void 0) { configurationParameters = {}; }
        this.apiKeys = configurationParameters.apiKeys;
        this.username = configurationParameters.username;
        this.password = configurationParameters.password;
        this.accessToken = configurationParameters.accessToken;
        this.basePath = configurationParameters.basePath;
        this.withCredentials = configurationParameters.withCredentials;
    }
    /**
     * Select the correct content-type to use for a request.
     * Uses {@link Configuration#isJsonMime} to determine the correct content-type.
     * If no content type is found return the first found type if the contentTypes is not empty
     * @param {string[]} contentTypes - the array of content types that are available for selection
     * @returns {string} the selected content-type or <code>undefined</code> if no selection could be made.
     */
    Configuration.prototype.selectHeaderContentType = function (contentTypes) {
        var _this = this;
        if (contentTypes.length == 0) {
            return undefined;
        }
        var type = contentTypes.find(function (x) { return _this.isJsonMime(x); });
        if (type === undefined) {
            return contentTypes[0];
        }
        return type;
    };
    /**
     * Select the correct accept content-type to use for a request.
     * Uses {@link Configuration#isJsonMime} to determine the correct accept content-type.
     * If no content type is found return the first found type if the contentTypes is not empty
     * @param {string[]} accepts - the array of content types that are available for selection.
     * @returns {string} the selected content-type or <code>undefined</code> if no selection could be made.
     */
    Configuration.prototype.selectHeaderAccept = function (accepts) {
        var _this = this;
        if (accepts.length == 0) {
            return undefined;
        }
        var type = accepts.find(function (x) { return _this.isJsonMime(x); });
        if (type === undefined) {
            return accepts[0];
        }
        return type;
    };
    /**
     * Check if the given MIME is a JSON MIME.
     * JSON MIME examples:
     *   application/json
     *   application/json; charset=UTF8
     *   APPLICATION/JSON
     *   application/vnd.company+json
     * @param {string} mime - MIME (Multipurpose Internet Mail Extensions)
     * @return {boolean} True if the given MIME is JSON, false otherwise.
     */
    Configuration.prototype.isJsonMime = function (mime) {
        var jsonMime = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
        return mime != null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
    };
    return Configuration;
}());



/***/ }),

/***/ "../api/encoder.ts":
/*!*************************!*\
  !*** ../api/encoder.ts ***!
  \*************************/
/*! exports provided: CustomHttpUrlEncodingCodec */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomHttpUrlEncodingCodec", function() { return CustomHttpUrlEncodingCodec; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
* CustomHttpUrlEncodingCodec
* Fix plus sign (+) not encoding, so sent as blank space
* See: https://github.com/angular/angular/issues/11058#issuecomment-247367318
*/
var CustomHttpUrlEncodingCodec = /** @class */ (function (_super) {
    __extends(CustomHttpUrlEncodingCodec, _super);
    function CustomHttpUrlEncodingCodec() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomHttpUrlEncodingCodec.prototype.encodeKey = function (k) {
        k = _super.prototype.encodeKey.call(this, k);
        return k.replace(/\+/gi, '%2B');
    };
    CustomHttpUrlEncodingCodec.prototype.encodeValue = function (v) {
        v = _super.prototype.encodeValue.call(this, v);
        return v.replace(/\+/gi, '%2B');
    };
    return CustomHttpUrlEncodingCodec;
}(_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpUrlEncodingCodec"]));



/***/ }),

/***/ "../api/index.ts":
/*!***********************!*\
  !*** ../api/index.ts ***!
  \***********************/
/*! exports provided: Configuration, APIS, BASE_PATH, COLLECTION_FORMATS, ApiModule, SecurityService, UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api/api */ "../api/api/api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "APIS", function() { return _api_api__WEBPACK_IMPORTED_MODULE_0__["APIS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SecurityService", function() { return _api_api__WEBPACK_IMPORTED_MODULE_0__["SecurityService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return _api_api__WEBPACK_IMPORTED_MODULE_0__["UsersService"]; });

/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variables */ "../api/variables.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BASE_PATH", function() { return _variables__WEBPACK_IMPORTED_MODULE_1__["BASE_PATH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "COLLECTION_FORMATS", function() { return _variables__WEBPACK_IMPORTED_MODULE_1__["COLLECTION_FORMATS"]; });

/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./configuration */ "../api/configuration.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Configuration", function() { return _configuration__WEBPACK_IMPORTED_MODULE_2__["Configuration"]; });

/* harmony import */ var _api_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.module */ "../api/api.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiModule", function() { return _api_module__WEBPACK_IMPORTED_MODULE_3__["ApiModule"]; });







/***/ }),

/***/ "../api/variables.ts":
/*!***************************!*\
  !*** ../api/variables.ts ***!
  \***************************/
/*! exports provided: BASE_PATH, COLLECTION_FORMATS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_PATH", function() { return BASE_PATH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLLECTION_FORMATS", function() { return COLLECTION_FORMATS; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");

var BASE_PATH = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('basePath');
var COLLECTION_FORMATS = {
    'csv': ',',
    'tsv': '   ',
    'ssv': ' ',
    'pipes': '|'
};


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/api/api-configuration.ts":
/*!******************************************!*\
  !*** ./src/app/api/api-configuration.ts ***!
  \******************************************/
/*! exports provided: apiConfiguration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiConfiguration", function() { return apiConfiguration; });
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../api/configuration */ "../api/configuration.ts");

function apiConfiguration() {
    var conf = new _api_configuration__WEBPACK_IMPORTED_MODULE_0__["Configuration"]();
    conf.withCredentials = true;
    conf.basePath = generateBasePath();
    return conf;
}
function generateBasePath() {
    return '/api';
}


/***/ }),

/***/ "./src/app/api/api-interceptor.ts":
/*!****************************************!*\
  !*** ./src/app/api/api-interceptor.ts ***!
  \****************************************/
/*! exports provided: ApiInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiInterceptor", function() { return ApiInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_toast_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/toast/toast.service */ "./src/app/core/toast/toast.service.ts");
/* harmony import */ var _core_toast_toast_types_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/toast/toast-types.enum */ "./src/app/core/toast/toast-types.enum.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ApiInterceptor = /** @class */ (function () {
    function ApiInterceptor(toastService) {
        this.toastService = toastService;
    }
    ApiInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next
            .handle(request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (response) {
            if (response.error) {
                _this.toastService.showToast(response.error, _core_toast_toast_types_enum__WEBPACK_IMPORTED_MODULE_4__["ToastTypes"].Error);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response);
        }));
    };
    ApiInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_core_toast_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"]])
    ], ApiInterceptor);
    return ApiInterceptor;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _security_security_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./security/security.module */ "./src/app/security/security.module.ts");
/* harmony import */ var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.module */ "./src/app/dashboard/dashboard.module.ts");
/* harmony import */ var _security_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./security/auth.guard */ "./src/app/security/auth.guard.ts");
/* harmony import */ var _security_login_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./security/login.guard */ "./src/app/security/login.guard.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        canActivate: [_security_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        loadChildren: function () { return _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_3__["DashboardModule"]; }
    },
    {
        path: 'login',
        canActivate: [_security_login_guard__WEBPACK_IMPORTED_MODULE_5__["LoginGuard"]],
        loadChildren: function () { return _security_security_module__WEBPACK_IMPORTED_MODULE_2__["SecurityModule"]; }
    },
    {
        path: '**',
        component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundComponent"],
        canActivate: [_security_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  height: 100%;\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _security_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./security/auth.guard */ "./src/app/security/auth.guard.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _api_api_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./api/api-interceptor */ "./src/app/api/api-interceptor.ts");
/* harmony import */ var _core_toast_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/toast/toast.service */ "./src/app/core/toast/toast.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../api */ "../api/index.ts");
/* harmony import */ var _api_api_configuration__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./api/api-configuration */ "./src/app/api/api-configuration.ts");
/* harmony import */ var _security_login_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./security/login.guard */ "./src/app/security/login.guard.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_12__["PageNotFoundComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
                _api__WEBPACK_IMPORTED_MODULE_9__["ApiModule"].forRoot(_api_api_configuration__WEBPACK_IMPORTED_MODULE_10__["apiConfiguration"])
            ],
            providers: [
                _security_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"],
                _security_login_guard__WEBPACK_IMPORTED_MODULE_11__["LoginGuard"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                    useClass: _api_api_interceptor__WEBPACK_IMPORTED_MODULE_6__["ApiInterceptor"],
                    multi: true,
                    deps: [_core_toast_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"]]
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/buttons/button-circle/button-circle.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/core/buttons/button-circle/button-circle.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button [type]=\"type\" (click)=\"onClick($event)\" [disabled]=\"disabled !== false\" [ngClass]=\"color\">\n  <ng-content></ng-content>\n</button>"

/***/ }),

/***/ "./src/app/core/buttons/button-circle/button-circle.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/core/buttons/button-circle/button-circle.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host button {\n  position: relative;\n  cursor: pointer;\n  border-style: solid;\n  border-radius: 1.25em;\n  border-width: 1px;\n  outline: none;\n  box-shadow: none;\n  height: 40px;\n  padding: 0 30px;\n  overflow: hidden;\n  font-weight: 500;\n  font-size: 1em;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 9.75em;\n  transition: border-color 0.2s cubic-bezier(0.77, 0, 0.175, 1), background-color 0.2s cubic-bezier(0.77, 0, 0.175, 1), color 0.2s cubic-bezier(0.77, 0, 0.175, 1); }\n  :host button.primary {\n    background-color: #1874ef;\n    color: #ffffff;\n    border-color: #1874ef; }\n  :host button.accent {\n    background-color: #ffffff;\n    color: #1874ef;\n    border-color: #ffffff; }\n  :host button.secondary {\n    background-color: #acacac;\n    color: #ffffff;\n    border-color: #acacac; }\n  :host button:disabled, :host button:disabled:hover {\n    background: #BABCBF;\n    border-color: #BABCBF;\n    color: #ffffff;\n    cursor: default; }\n  :host button:hover {\n    background-color: #3082f1;\n    border-color: #3082f1; }\n  :host button {\n  width: 40px;\n  height: 40px;\n  padding: 0;\n  border-radius: 50%; }\n"

/***/ }),

/***/ "./src/app/core/buttons/button-circle/button-circle.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/core/buttons/button-circle/button-circle.component.ts ***!
  \***********************************************************************/
/*! exports provided: ButtonCircleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonCircleComponent", function() { return ButtonCircleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../button/button.component */ "./src/app/core/buttons/button/button.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ButtonCircleComponent = /** @class */ (function (_super) {
    __extends(ButtonCircleComponent, _super);
    function ButtonCircleComponent() {
        return _super.call(this) || this;
    }
    ButtonCircleComponent_1 = ButtonCircleComponent;
    ButtonCircleComponent = ButtonCircleComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-button-circle',
            template: __webpack_require__(/*! ./button-circle.component.html */ "./src/app/core/buttons/button-circle/button-circle.component.html"),
            styles: [__webpack_require__(/*! ./button-circle.component.scss */ "./src/app/core/buttons/button-circle/button-circle.component.scss")],
            providers: [
                {
                    provide: _button_button_component__WEBPACK_IMPORTED_MODULE_1__["ButtonComponent"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return ButtonCircleComponent_1; })
                }
            ]
        }),
        __metadata("design:paramtypes", [])
    ], ButtonCircleComponent);
    return ButtonCircleComponent;
    var ButtonCircleComponent_1;
}(_button_button_component__WEBPACK_IMPORTED_MODULE_1__["ButtonComponent"]));



/***/ }),

/***/ "./src/app/core/buttons/button-icon/button-icon.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/core/buttons/button-icon/button-icon.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button [type]=\"type\" (click)=\"onClick($event)\" [disabled]=\"disabled !== false\" [ngClass]=\"color\">\n    <i class=\"material-icons\">\n        <ng-content></ng-content>\n    </i>\n</button>"

/***/ }),

/***/ "./src/app/core/buttons/button-icon/button-icon.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/core/buttons/button-icon/button-icon.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host button {\n  position: relative;\n  cursor: pointer;\n  border-style: solid;\n  border-radius: 1.25em;\n  border-width: 1px;\n  outline: none;\n  box-shadow: none;\n  height: 40px;\n  padding: 0 30px;\n  overflow: hidden;\n  font-weight: 500;\n  font-size: 1em;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 9.75em;\n  transition: border-color 0.2s cubic-bezier(0.77, 0, 0.175, 1), background-color 0.2s cubic-bezier(0.77, 0, 0.175, 1), color 0.2s cubic-bezier(0.77, 0, 0.175, 1); }\n  :host button.primary {\n    background-color: #1874ef;\n    color: #ffffff;\n    border-color: #1874ef; }\n  :host button.accent {\n    background-color: #ffffff;\n    color: #1874ef;\n    border-color: #ffffff; }\n  :host button.secondary {\n    background-color: #acacac;\n    color: #ffffff;\n    border-color: #acacac; }\n  :host button:disabled, :host button:disabled:hover {\n    background: #BABCBF;\n    border-color: #BABCBF;\n    color: #ffffff;\n    cursor: default; }\n  :host button:hover {\n    background-color: #3082f1;\n    border-color: #3082f1; }\n  :host button {\n  background: none;\n  border: none;\n  width: 40px;\n  padding: 0; }\n  :host button.primary, :host button.accent, :host button.secondary {\n    background: none; }\n  :host button.primary {\n    color: #1874ef; }\n  :host button.primary:hover {\n      background-color: rgba(24, 116, 239, 0.15);\n      border-color: rgba(24, 116, 239, 0.15); }\n  :host button.accent {\n    color: #ffffff; }\n  :host button.accent:hover {\n      background-color: rgba(255, 255, 255, 0.15);\n      border-color: rgba(255, 255, 255, 0.15); }\n  :host button.secondary {\n    color: #acacac; }\n  :host button.secondary:hover {\n      background-color: rgba(172, 172, 172, 0.15);\n      border-color: rgba(172, 172, 172, 0.15); }\n"

/***/ }),

/***/ "./src/app/core/buttons/button-icon/button-icon.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/core/buttons/button-icon/button-icon.component.ts ***!
  \*******************************************************************/
/*! exports provided: ButtonIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonIconComponent", function() { return ButtonIconComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../button/button.component */ "./src/app/core/buttons/button/button.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ButtonIconComponent = /** @class */ (function (_super) {
    __extends(ButtonIconComponent, _super);
    function ButtonIconComponent() {
        return _super.call(this) || this;
    }
    ButtonIconComponent_1 = ButtonIconComponent;
    ButtonIconComponent.prototype.ngOnInit = function () {
    };
    ButtonIconComponent = ButtonIconComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-button-icon',
            template: __webpack_require__(/*! ./button-icon.component.html */ "./src/app/core/buttons/button-icon/button-icon.component.html"),
            styles: [__webpack_require__(/*! ./button-icon.component.scss */ "./src/app/core/buttons/button-icon/button-icon.component.scss")],
            providers: [
                {
                    provide: _button_button_component__WEBPACK_IMPORTED_MODULE_1__["ButtonComponent"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return ButtonIconComponent_1; })
                }
            ]
        }),
        __metadata("design:paramtypes", [])
    ], ButtonIconComponent);
    return ButtonIconComponent;
    var ButtonIconComponent_1;
}(_button_button_component__WEBPACK_IMPORTED_MODULE_1__["ButtonComponent"]));



/***/ }),

/***/ "./src/app/core/buttons/button/button.component.html":
/*!***********************************************************!*\
  !*** ./src/app/core/buttons/button/button.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button [type]=\"type\" (click)=\"onClick($event)\" [disabled]=\"disabled !== false\" [ngClass]=\"color\">\n    <ng-content></ng-content>\n</button>"

/***/ }),

/***/ "./src/app/core/buttons/button/button.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/core/buttons/button/button.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host button {\n  position: relative;\n  cursor: pointer;\n  border-style: solid;\n  border-radius: 1.25em;\n  border-width: 1px;\n  outline: none;\n  box-shadow: none;\n  height: 40px;\n  padding: 0 30px;\n  overflow: hidden;\n  font-weight: 500;\n  font-size: 1em;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 9.75em;\n  transition: border-color 0.2s cubic-bezier(0.77, 0, 0.175, 1), background-color 0.2s cubic-bezier(0.77, 0, 0.175, 1), color 0.2s cubic-bezier(0.77, 0, 0.175, 1); }\n  :host button.primary {\n    background-color: #1874ef;\n    color: #ffffff;\n    border-color: #1874ef; }\n  :host button.accent {\n    background-color: #ffffff;\n    color: #1874ef;\n    border-color: #ffffff; }\n  :host button.secondary {\n    background-color: #acacac;\n    color: #ffffff;\n    border-color: #acacac; }\n  :host button:disabled, :host button:disabled:hover {\n    background: #BABCBF;\n    border-color: #BABCBF;\n    color: #ffffff;\n    cursor: default; }\n  :host button:hover {\n    background-color: #3082f1;\n    border-color: #3082f1; }\n"

/***/ }),

/***/ "./src/app/core/buttons/button/button.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/buttons/button/button.component.ts ***!
  \*********************************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ButtonComponent = /** @class */ (function () {
    function ButtonComponent() {
        this.type = 'button';
        this.disabled = false;
        this.color = 'primary';
        this.clicked = false;
        this.click = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ButtonComponent.prototype.onHostClick = function (event) {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }
    };
    ButtonComponent.prototype.onClick = function (event) {
        var _this = this;
        event.preventDefault();
        event.stopPropagation();
        this.click.emit(null);
        this.clicked = true;
        setTimeout(function () {
            _this.clicked = false;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ButtonComponent.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ButtonComponent.prototype, "disabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ButtonComponent.prototype, "color", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ButtonComponent.prototype, "onHostClick", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('click'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ButtonComponent.prototype, "click", void 0);
    ButtonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-button',
            template: __webpack_require__(/*! ./button.component.html */ "./src/app/core/buttons/button/button.component.html"),
            styles: [__webpack_require__(/*! ./button.component.scss */ "./src/app/core/buttons/button/button.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ButtonComponent);
    return ButtonComponent;
}());



/***/ }),

/***/ "./src/app/core/buttons/buttons.module.ts":
/*!************************************************!*\
  !*** ./src/app/core/buttons/buttons.module.ts ***!
  \************************************************/
/*! exports provided: ButtonsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsModule", function() { return ButtonsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button/button.component */ "./src/app/core/buttons/button/button.component.ts");
/* harmony import */ var _button_circle_button_circle_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button-circle/button-circle.component */ "./src/app/core/buttons/button-circle/button-circle.component.ts");
/* harmony import */ var _button_icon_button_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./button-icon/button-icon.component */ "./src/app/core/buttons/button-icon/button-icon.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var COMPONENTS = [
    _button_button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"],
    _button_circle_button_circle_component__WEBPACK_IMPORTED_MODULE_3__["ButtonCircleComponent"],
    _button_icon_button_icon_component__WEBPACK_IMPORTED_MODULE_4__["ButtonIconComponent"]
];
var ButtonsModule = /** @class */ (function () {
    function ButtonsModule() {
    }
    ButtonsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: COMPONENTS.slice(),
            exports: COMPONENTS.slice()
        })
    ], ButtonsModule);
    return ButtonsModule;
}());



/***/ }),

/***/ "./src/app/core/card/card-actions/card-actions.component.html":
/*!********************************************************************!*\
  !*** ./src/app/core/card/card-actions/card-actions.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #actionsContent>\n    <ng-content></ng-content>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/core/card/card-actions/card-actions.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/core/card/card-actions/card-actions.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/card/card-actions/card-actions.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/core/card/card-actions/card-actions.component.ts ***!
  \******************************************************************/
/*! exports provided: CardActionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardActionsComponent", function() { return CardActionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _buttons_button_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../buttons/button/button.component */ "./src/app/core/buttons/button/button.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardActionsComponent = /** @class */ (function () {
    function CardActionsComponent() {
    }
    CardActionsComponent.prototype.ngOnInit = function () {
    };
    CardActionsComponent.prototype.ngAfterContentInit = function () {
        this.buttons
            .map(function (button) {
            button.color = 'secondary';
            return button;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('actionsContent'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CardActionsComponent.prototype, "actionsContent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"])(_buttons_button_button_component__WEBPACK_IMPORTED_MODULE_1__["ButtonComponent"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], CardActionsComponent.prototype, "buttons", void 0);
    CardActionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-card-actions',
            template: __webpack_require__(/*! ./card-actions.component.html */ "./src/app/core/card/card-actions/card-actions.component.html"),
            styles: [__webpack_require__(/*! ./card-actions.component.scss */ "./src/app/core/card/card-actions/card-actions.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CardActionsComponent);
    return CardActionsComponent;
}());



/***/ }),

/***/ "./src/app/core/card/card-content/card-content.component.html":
/*!********************************************************************!*\
  !*** ./src/app/core/card/card-content/card-content.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #contentContent>\n    <ng-content></ng-content>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/core/card/card-content/card-content.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/core/card/card-content/card-content.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/card/card-content/card-content.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/core/card/card-content/card-content.component.ts ***!
  \******************************************************************/
/*! exports provided: CardContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardContentComponent", function() { return CardContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardContentComponent = /** @class */ (function () {
    function CardContentComponent() {
    }
    CardContentComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('contentContent'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CardContentComponent.prototype, "contentContent", void 0);
    CardContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-card-content',
            template: __webpack_require__(/*! ./card-content.component.html */ "./src/app/core/card/card-content/card-content.component.html"),
            styles: [__webpack_require__(/*! ./card-content.component.scss */ "./src/app/core/card/card-content/card-content.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CardContentComponent);
    return CardContentComponent;
}());



/***/ }),

/***/ "./src/app/core/card/card-footer/card-footer.component.html":
/*!******************************************************************!*\
  !*** ./src/app/core/card/card-footer/card-footer.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #footerContent>\n    <ng-content></ng-content>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/core/card/card-footer/card-footer.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/core/card/card-footer/card-footer.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/card/card-footer/card-footer.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/core/card/card-footer/card-footer.component.ts ***!
  \****************************************************************/
/*! exports provided: CardFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardFooterComponent", function() { return CardFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardFooterComponent = /** @class */ (function () {
    function CardFooterComponent() {
    }
    CardFooterComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('footerContent'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CardFooterComponent.prototype, "footerContent", void 0);
    CardFooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-card-footer',
            template: __webpack_require__(/*! ./card-footer.component.html */ "./src/app/core/card/card-footer/card-footer.component.html"),
            styles: [__webpack_require__(/*! ./card-footer.component.scss */ "./src/app/core/card/card-footer/card-footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CardFooterComponent);
    return CardFooterComponent;
}());



/***/ }),

/***/ "./src/app/core/card/card-header/card-header.component.html":
/*!******************************************************************!*\
  !*** ./src/app/core/card/card-header/card-header.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #headerContent>\n    <ng-content></ng-content>\n</ng-template>"

/***/ }),

/***/ "./src/app/core/card/card-header/card-header.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/core/card/card-header/card-header.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/card/card-header/card-header.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/core/card/card-header/card-header.component.ts ***!
  \****************************************************************/
/*! exports provided: CardHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardHeaderComponent", function() { return CardHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardHeaderComponent = /** @class */ (function () {
    function CardHeaderComponent() {
    }
    CardHeaderComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('headerContent'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CardHeaderComponent.prototype, "headerContent", void 0);
    CardHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-card-header',
            template: __webpack_require__(/*! ./card-header.component.html */ "./src/app/core/card/card-header/card-header.component.html"),
            styles: [__webpack_require__(/*! ./card-header.component.scss */ "./src/app/core/card/card-header/card-header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CardHeaderComponent);
    return CardHeaderComponent;
}());



/***/ }),

/***/ "./src/app/core/card/card.module.ts":
/*!******************************************!*\
  !*** ./src/app/core/card/card.module.ts ***!
  \******************************************/
/*! exports provided: CardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardModule", function() { return CardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card/card.component */ "./src/app/core/card/card/card.component.ts");
/* harmony import */ var _card_header_card_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card-header/card-header.component */ "./src/app/core/card/card-header/card-header.component.ts");
/* harmony import */ var _card_content_card_content_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./card-content/card-content.component */ "./src/app/core/card/card-content/card-content.component.ts");
/* harmony import */ var _card_actions_card_actions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./card-actions/card-actions.component */ "./src/app/core/card/card-actions/card-actions.component.ts");
/* harmony import */ var _card_footer_card_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./card-footer/card-footer.component */ "./src/app/core/card/card-footer/card-footer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var COMPONENTS = [
    _card_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"],
    _card_header_card_header_component__WEBPACK_IMPORTED_MODULE_3__["CardHeaderComponent"],
    _card_content_card_content_component__WEBPACK_IMPORTED_MODULE_4__["CardContentComponent"],
    _card_actions_card_actions_component__WEBPACK_IMPORTED_MODULE_5__["CardActionsComponent"],
    _card_footer_card_footer_component__WEBPACK_IMPORTED_MODULE_6__["CardFooterComponent"]
];
var CardModule = /** @class */ (function () {
    function CardModule() {
    }
    CardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: COMPONENTS.slice(),
            exports: COMPONENTS.slice()
        })
    ], CardModule);
    return CardModule;
}());



/***/ }),

/***/ "./src/app/core/card/card/card.component.html":
/*!****************************************************!*\
  !*** ./src/app/core/card/card/card.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cardContainer\">\n    <header *ngIf=\"header || actions\">\n        <h2 *ngIf=\"header\">\n            <ng-container [ngTemplateOutlet]=\"header.headerContent\"></ng-container>\n        </h2>\n\n        <div class=\"actions\" *ngIf=\"actions\">\n            <ng-container [ngTemplateOutlet]=\"actions.actionsContent\"></ng-container>\n        </div>\n    </header>\n    <div class=\"content\" *ngIf=\"content\">\n        <ng-container [ngTemplateOutlet]=\"content.contentContent\"></ng-container>\n    </div>\n    <footer *ngIf=\"footer\">\n        <ng-container [ngTemplateOutlet]=\"footer.footerContent\"></ng-container>\n    </footer>\n</div>"

/***/ }),

/***/ "./src/app/core/card/card/card.component.scss":
/*!****************************************************!*\
  !*** ./src/app/core/card/card/card.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .cardContainer {\n  background-color: #ffffff;\n  padding: 10px 30px 25px;\n  border-style: solid;\n  border-width: 1px;\n  border-color: #e5e6eb;\n  border-radius: 3px; }\n  :host .cardContainer header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between; }\n  :host .cardContainer footer {\n    display: flex;\n    align-items: center;\n    justify-content: flex-end; }\n"

/***/ }),

/***/ "./src/app/core/card/card/card.component.ts":
/*!**************************************************!*\
  !*** ./src/app/core/card/card/card.component.ts ***!
  \**************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _card_header_card_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../card-header/card-header.component */ "./src/app/core/card/card-header/card-header.component.ts");
/* harmony import */ var _card_content_card_content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../card-content/card-content.component */ "./src/app/core/card/card-content/card-content.component.ts");
/* harmony import */ var _card_actions_card_actions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../card-actions/card-actions.component */ "./src/app/core/card/card-actions/card-actions.component.ts");
/* harmony import */ var _card_footer_card_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../card-footer/card-footer.component */ "./src/app/core/card/card-footer/card-footer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CardComponent = /** @class */ (function () {
    function CardComponent() {
    }
    CardComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])(_card_header_card_header_component__WEBPACK_IMPORTED_MODULE_1__["CardHeaderComponent"]),
        __metadata("design:type", _card_header_card_header_component__WEBPACK_IMPORTED_MODULE_1__["CardHeaderComponent"])
    ], CardComponent.prototype, "header", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])(_card_content_card_content_component__WEBPACK_IMPORTED_MODULE_2__["CardContentComponent"]),
        __metadata("design:type", _card_content_card_content_component__WEBPACK_IMPORTED_MODULE_2__["CardContentComponent"])
    ], CardComponent.prototype, "content", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])(_card_actions_card_actions_component__WEBPACK_IMPORTED_MODULE_3__["CardActionsComponent"]),
        __metadata("design:type", _card_actions_card_actions_component__WEBPACK_IMPORTED_MODULE_3__["CardActionsComponent"])
    ], CardComponent.prototype, "actions", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])(_card_footer_card_footer_component__WEBPACK_IMPORTED_MODULE_4__["CardFooterComponent"]),
        __metadata("design:type", _card_footer_card_footer_component__WEBPACK_IMPORTED_MODULE_4__["CardFooterComponent"])
    ], CardComponent.prototype, "footer", void 0);
    CardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-card',
            template: __webpack_require__(/*! ./card.component.html */ "./src/app/core/card/card/card.component.html"),
            styles: [__webpack_require__(/*! ./card.component.scss */ "./src/app/core/card/card/card.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _form_form_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form/form.module */ "./src/app/core/form/form.module.ts");
/* harmony import */ var _toast_toast_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toast/toast.module */ "./src/app/core/toast/toast.module.ts");
/* harmony import */ var _buttons_buttons_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./buttons/buttons.module */ "./src/app/core/buttons/buttons.module.ts");
/* harmony import */ var _card_card_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./card/card.module */ "./src/app/core/card/card.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var MODULES = [
    _form_form_module__WEBPACK_IMPORTED_MODULE_2__["FormModule"],
    _toast_toast_module__WEBPACK_IMPORTED_MODULE_3__["ToastModule"],
    _buttons_buttons_module__WEBPACK_IMPORTED_MODULE_4__["ButtonsModule"],
    _card_card_module__WEBPACK_IMPORTED_MODULE_5__["CardModule"]
];
var COMPONENTS = [];
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ].concat(MODULES),
            declarations: COMPONENTS.slice(),
            exports: MODULES.concat(COMPONENTS)
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/core.service.ts":
/*!**************************************!*\
  !*** ./src/app/core/core.service.ts ***!
  \**************************************/
/*! exports provided: CoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreService", function() { return CoreService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CoreService = /** @class */ (function () {
    function CoreService() {
    }
    Object.defineProperty(CoreService.prototype, "loginPage", {
        get: function () {
            return 'login';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CoreService.prototype, "homePage", {
        get: function () {
            return '';
        },
        enumerable: true,
        configurable: true
    });
    CoreService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CoreService);
    return CoreService;
}());



/***/ }),

/***/ "./src/app/core/form/base-form-control/base-form-control.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/core/form/base-form-control/base-form-control.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/form/base-form-control/base-form-control.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/core/form/base-form-control/base-form-control.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  base-form-control works!\n</p>\n"

/***/ }),

/***/ "./src/app/core/form/base-form-control/base-form-control.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/core/form/base-form-control/base-form-control.component.ts ***!
  \****************************************************************************/
/*! exports provided: BaseFormControlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseFormControlComponent", function() { return BaseFormControlComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BaseFormControlComponent = /** @class */ (function () {
    function BaseFormControlComponent() {
        this.value = null;
        this.isFocused = false;
        this.onChange = function () {
        };
        this.onTouched = function () {
        };
    }
    BaseFormControlComponent.prototype.ngOnInit = function () {
    };
    BaseFormControlComponent.prototype.writeValue = function (value) {
        this.value = value;
    };
    BaseFormControlComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    BaseFormControlComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    BaseFormControlComponent.prototype.onBlur = function () {
        this.isFocused = true;
    };
    BaseFormControlComponent.prototype.onFocus = function () {
        this.isFocused = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], BaseFormControlComponent.prototype, "formControlName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.focus'),
        __metadata("design:type", Boolean)
    ], BaseFormControlComponent.prototype, "isFocused", void 0);
    BaseFormControlComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-base-form-control',
            template: __webpack_require__(/*! ./base-form-control.component.html */ "./src/app/core/form/base-form-control/base-form-control.component.html"),
            styles: [__webpack_require__(/*! ./base-form-control.component.css */ "./src/app/core/form/base-form-control/base-form-control.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BaseFormControlComponent);
    return BaseFormControlComponent;
}());



/***/ }),

/***/ "./src/app/core/form/form.module.ts":
/*!******************************************!*\
  !*** ./src/app/core/form/form.module.ts ***!
  \******************************************/
/*! exports provided: FormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormModule", function() { return FormModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _base_form_control_base_form_control_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base-form-control/base-form-control.component */ "./src/app/core/form/base-form-control/base-form-control.component.ts");
/* harmony import */ var _input_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./input/input.component */ "./src/app/core/form/input/input.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _label_label_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./label/label.component */ "./src/app/core/form/label/label.component.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form/form.component */ "./src/app/core/form/form/form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var COMPONENTS = [
    _input_input_component__WEBPACK_IMPORTED_MODULE_3__["InputComponent"],
    _base_form_control_base_form_control_component__WEBPACK_IMPORTED_MODULE_2__["BaseFormControlComponent"],
    _label_label_component__WEBPACK_IMPORTED_MODULE_5__["LabelComponent"],
    _form_form_component__WEBPACK_IMPORTED_MODULE_6__["FormComponent"]
];
var FormModule = /** @class */ (function () {
    function FormModule() {
    }
    FormModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            declarations: COMPONENTS.slice(),
            exports: COMPONENTS.slice()
        })
    ], FormModule);
    return FormModule;
}());



/***/ }),

/***/ "./src/app/core/form/form/form.component.html":
/*!****************************************************!*\
  !*** ./src/app/core/form/form/form.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"formGroup\" (submit)=\"onFormSubmit()\">\n    <ng-content></ng-content>\n</form>"

/***/ }),

/***/ "./src/app/core/form/form/form.component.scss":
/*!****************************************************!*\
  !*** ./src/app/core/form/form/form.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/form/form/form.component.ts":
/*!**************************************************!*\
  !*** ./src/app/core/form/form/form.component.ts ***!
  \**************************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormComponent = /** @class */ (function () {
    function FormComponent() {
        this.submit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    FormComponent.prototype.onFormSubmit = function () {
        this.submit.emit(null);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('formGroup'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"])
    ], FormComponent.prototype, "formGroup", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('submit'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], FormComponent.prototype, "submit", void 0);
    FormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form',
            template: __webpack_require__(/*! ./form.component.html */ "./src/app/core/form/form/form.component.html"),
            styles: [__webpack_require__(/*! ./form.component.scss */ "./src/app/core/form/form/form.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/core/form/input/input.component.html":
/*!******************************************************!*\
  !*** ./src/app/core/form/input/input.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input [type]=\"type\" class=\"formInput\" [placeholder]=\"placeholder\" [formControl]=\"control\" [name]=\"formControlName\" (focus)=\"onFocus()\"\n       (blur)=\"onBlur()\">"

/***/ }),

/***/ "./src/app/core/form/input/input.component.scss":
/*!******************************************************!*\
  !*** ./src/app/core/form/input/input.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host input {\n  height: 30px;\n  border-style: solid;\n  border-width: 1px;\n  border-color: #e5e6eb;\n  border-radius: 3px;\n  width: 250px;\n  max-width: 100%;\n  margin-bottom: 15px;\n  padding: 0 10px; }\n"

/***/ }),

/***/ "./src/app/core/form/input/input.component.ts":
/*!****************************************************!*\
  !*** ./src/app/core/form/input/input.component.ts ***!
  \****************************************************/
/*! exports provided: InputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputComponent", function() { return InputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _base_form_control_base_form_control_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-form-control/base-form-control.component */ "./src/app/core/form/base-form-control/base-form-control.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var InputComponent = /** @class */ (function (_super) {
    __extends(InputComponent, _super);
    function InputComponent(controlContainer) {
        var _this = _super.call(this) || this;
        _this.controlContainer = controlContainer;
        _this.type = 'text';
        _this.placeholder = '';
        return _this;
    }
    InputComponent_1 = InputComponent;
    InputComponent.prototype.ngOnInit = function () {
        if (this.controlContainer) {
            if (this.formControlName) {
                this.control = this.controlContainer.control.get(this.formControlName);
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], InputComponent.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], InputComponent.prototype, "placeholder", void 0);
    InputComponent = InputComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-input',
            template: __webpack_require__(/*! ./input.component.html */ "./src/app/core/form/input/input.component.html"),
            styles: [__webpack_require__(/*! ./input.component.scss */ "./src/app/core/form/input/input.component.scss")],
            providers: [
                { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return InputComponent_1; }), multi: true }
            ]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"])()),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ControlContainer"]])
    ], InputComponent);
    return InputComponent;
    var InputComponent_1;
}(_base_form_control_base_form_control_component__WEBPACK_IMPORTED_MODULE_2__["BaseFormControlComponent"]));



/***/ }),

/***/ "./src/app/core/form/label/label.component.html":
/*!******************************************************!*\
  !*** ./src/app/core/form/label/label.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<label *ngIf=\"label\">{{label}}: </label><ng-content></ng-content>"

/***/ }),

/***/ "./src/app/core/form/label/label.component.scss":
/*!******************************************************!*\
  !*** ./src/app/core/form/label/label.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex; }\n"

/***/ }),

/***/ "./src/app/core/form/label/label.component.ts":
/*!****************************************************!*\
  !*** ./src/app/core/form/label/label.component.ts ***!
  \****************************************************/
/*! exports provided: LabelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelComponent", function() { return LabelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LabelComponent = /** @class */ (function () {
    function LabelComponent() {
        this.label = null;
    }
    LabelComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('label'),
        __metadata("design:type", String)
    ], LabelComponent.prototype, "label", void 0);
    LabelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-label',
            template: __webpack_require__(/*! ./label.component.html */ "./src/app/core/form/label/label.component.html"),
            styles: [__webpack_require__(/*! ./label.component.scss */ "./src/app/core/form/label/label.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LabelComponent);
    return LabelComponent;
}());



/***/ }),

/***/ "./src/app/core/toast/toast-types.enum.ts":
/*!************************************************!*\
  !*** ./src/app/core/toast/toast-types.enum.ts ***!
  \************************************************/
/*! exports provided: ToastTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastTypes", function() { return ToastTypes; });
var ToastTypes;
(function (ToastTypes) {
    ToastTypes["Info"] = "info";
    ToastTypes["Error"] = "error";
    ToastTypes["Success"] = "success";
})(ToastTypes || (ToastTypes = {}));


/***/ }),

/***/ "./src/app/core/toast/toast.component.html":
/*!*************************************************!*\
  !*** ./src/app/core/toast/toast.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"toastContainer\" [ngClass]=\"type\">\n    <p>\n        {{message}}\n    </p>\n    <app-button-icon (click)=\"closeToast()\" color=\"accent\">clear</app-button-icon>\n</div>\n"

/***/ }),

/***/ "./src/app/core/toast/toast.component.scss":
/*!*************************************************!*\
  !*** ./src/app/core/toast/toast.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: fixed;\n  right: 0;\n  bottom: 15px;\n  left: 0;\n  width: 650px;\n  max-width: 90%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: auto;\n  z-index: 100;\n  height: 52px;\n  -webkit-animation-duration: 500ms;\n          animation-duration: 500ms; }\n  :host .toastContainer {\n    position: relative;\n    box-shadow: 0 15px 50px -15px rgba(0, 0, 0, 0.75);\n    width: 100%;\n    height: 100%;\n    margin: auto;\n    background-color: #1874ef;\n    color: #ffffff;\n    padding: 0 10px 0 25px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    overflow: hidden;\n    border-radius: 3px;\n    border-style: none;\n    border-color: #1874ef;\n    border-width: 1px; }\n  :host .toastContainer.error {\n      background-color: #e73636;\n      border-color: #e73636; }\n  :host .toastContainer.success {\n      background-color: #40c33c;\n      border-color: #40c33c; }\n"

/***/ }),

/***/ "./src/app/core/toast/toast.component.ts":
/*!***********************************************!*\
  !*** ./src/app/core/toast/toast.component.ts ***!
  \***********************************************/
/*! exports provided: ToastComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastComponent", function() { return ToastComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _toast_types_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toast-types.enum */ "./src/app/core/toast/toast-types.enum.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ToastComponent = /** @class */ (function () {
    function ToastComponent() {
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this.closeToastSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.closeToast$ = this.closeToastSubject.asObservable();
        this.message = null;
        this.type = _toast_types_enum__WEBPACK_IMPORTED_MODULE_2__["ToastTypes"].Info;
        this.lifeTimeSeconds = 3;
        this.animationIn = true;
        this.animationOut = false;
    }
    ToastComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.lifeTimeTimerSub = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(this.lifeTimeSeconds * 1000)
            .subscribe(function () {
            _this.closeToast();
        });
        this.subscriptions.add(this.lifeTimeTimerSub);
    };
    ToastComponent.prototype.closeToast = function () {
        var _this = this;
        this.animationOut = true;
        var closeToastAnimationTimer = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(1000)
            .subscribe(function () {
            _this.closeToastSubject.next(null);
        });
        this.subscriptions.add(closeToastAnimationTimer);
    };
    ToastComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.animated'),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.fadeInUp'),
        __metadata("design:type", Boolean)
    ], ToastComponent.prototype, "animationIn", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.fadeOutDown'),
        __metadata("design:type", Boolean)
    ], ToastComponent.prototype, "animationOut", void 0);
    ToastComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-toast',
            template: __webpack_require__(/*! ./toast.component.html */ "./src/app/core/toast/toast.component.html"),
            styles: [__webpack_require__(/*! ./toast.component.scss */ "./src/app/core/toast/toast.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ToastComponent);
    return ToastComponent;
}());



/***/ }),

/***/ "./src/app/core/toast/toast.module.ts":
/*!********************************************!*\
  !*** ./src/app/core/toast/toast.module.ts ***!
  \********************************************/
/*! exports provided: ToastModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastModule", function() { return ToastModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _toast_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toast.component */ "./src/app/core/toast/toast.component.ts");
/* harmony import */ var _buttons_buttons_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../buttons/buttons.module */ "./src/app/core/buttons/buttons.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var COMPONENTS = [_toast_component__WEBPACK_IMPORTED_MODULE_2__["ToastComponent"]];
var ToastModule = /** @class */ (function () {
    function ToastModule() {
    }
    ToastModule.forRoot = function () {
    };
    ToastModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _buttons_buttons_module__WEBPACK_IMPORTED_MODULE_3__["ButtonsModule"]
            ],
            declarations: COMPONENTS.slice(),
            entryComponents: COMPONENTS.slice(),
            exports: COMPONENTS.slice()
        })
    ], ToastModule);
    return ToastModule;
}());



/***/ }),

/***/ "./src/app/core/toast/toast.service.ts":
/*!*********************************************!*\
  !*** ./src/app/core/toast/toast.service.ts ***!
  \*********************************************/
/*! exports provided: ToastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastService", function() { return ToastService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _toast_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toast.component */ "./src/app/core/toast/toast.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToastService = /** @class */ (function () {
    function ToastService(componentFactoryResolver, applicationRef, injector) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.applicationRef = applicationRef;
        this.injector = injector;
    }
    ToastService.prototype.showToast = function (message, type) {
        var _this = this;
        var componentRef = this.componentFactoryResolver
            .resolveComponentFactory(_toast_component__WEBPACK_IMPORTED_MODULE_1__["ToastComponent"])
            .create(this.injector);
        this.applicationRef.attachView(componentRef.hostView);
        var domElem = componentRef.hostView
            .rootNodes[0];
        document.body.appendChild(domElem);
        componentRef.instance.message = message;
        componentRef.instance.type = type;
        var closeToastSub = componentRef.instance.closeToast$
            .subscribe(function () {
            _this.applicationRef.detachView(componentRef.hostView);
            componentRef.destroy();
            closeToastSub.unsubscribe();
        });
        return componentRef.instance;
    };
    ToastService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], ToastService);
    return ToastService;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/dashboard/home/home.component.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _users_users_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users/users.module */ "./src/app/dashboard/users/users.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
        children: [
            {
                path: 'home',
                component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
            },
            {
                path: 'users',
                loadChildren: function () { return _users_users_module__WEBPACK_IMPORTED_MODULE_4__["UsersModule"]; }
            },
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            }
        ]
    }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-top-bar></app-top-bar>\n<app-menu>\n    <app-menu-item path=\"/home\" label=\"Dashboard\" icon=\"dashboard\"></app-menu-item>\n    <app-menu-item path=\"/users\" label=\"Users\" icon=\"group\"></app-menu-item>\n</app-menu>\n<div id=\"content\" [class.menu-closed]=\"menuService.menuOpen$ | async\">\n    <div class=\"contentContainer\">\n        <router-outlet></router-outlet>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host #content {\n  height: 100%;\n  min-height: 100%;\n  transition: padding 500ms ease;\n  padding-top: 100px;\n  padding-left: 250px; }\n  :host #content.menu-closed {\n    padding-left: 75px; }\n  :host #content .contentContainer {\n    background-color: #f8f8f8;\n    padding: 25px 50px;\n    min-height: 100%; }\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _layout_menu_menu_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/menu/menu/menu.service */ "./src/app/dashboard/layout/menu/menu/menu.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_core_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/core.service */ "./src/app/core/core.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(menuService, coreService, router) {
        this.menuService = menuService;
        this.coreService = coreService;
        this.router = router;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        if (this.router.url === '/') {
            this.router.navigate([this.coreService.homePage]);
        }
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [_layout_menu_menu_menu_service__WEBPACK_IMPORTED_MODULE_1__["MenuService"],
            _core_core_service__WEBPACK_IMPORTED_MODULE_3__["CoreService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/dashboard/home/home.component.ts");
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/layout.module */ "./src/app/dashboard/layout/layout.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__["DashboardRoutingModule"],
                _layout_layout_module__WEBPACK_IMPORTED_MODULE_3__["LayoutModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"]
            ],
            declarations: [
                _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
                _dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"]
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/dashboard/home/home.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/home/home.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-card>\n    <app-card-header>\n        Dashboard\n    </app-card-header>\n    <app-card-content>\n        Hello!\n    </app-card-content>\n</app-card>\n"

/***/ }),

/***/ "./src/app/dashboard/home/home.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/home/home.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/home/home.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/home/home.component.ts ***!
  \**************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/dashboard/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/dashboard/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/layout/layout.module.ts":
/*!***************************************************!*\
  !*** ./src/app/dashboard/layout/layout.module.ts ***!
  \***************************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _menu_menu_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu/menu.module */ "./src/app/dashboard/layout/menu/menu.module.ts");
/* harmony import */ var _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./top-bar/top-bar.component */ "./src/app/dashboard/layout/top-bar/top-bar.component.ts");
/* harmony import */ var _security_user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../security/user/user.service */ "./src/app/security/user/user.service.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/core.module */ "./src/app/core/core.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var COMPONENTS = [
    _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_3__["TopBarComponent"]
];
var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _menu_menu_module__WEBPACK_IMPORTED_MODULE_2__["MenuModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"]
            ],
            declarations: COMPONENTS.slice(),
            exports: COMPONENTS.concat([
                _menu_menu_module__WEBPACK_IMPORTED_MODULE_2__["MenuModule"]
            ]),
            providers: [
                _security_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
            ]
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ "./src/app/dashboard/layout/menu/menu-item/menu-item.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/dashboard/layout/menu/menu-item/menu-item.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./src/app/dashboard/layout/menu/menu-item/menu-item.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/dashboard/layout/menu/menu-item/menu-item.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/layout/menu/menu-item/menu-item.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/dashboard/layout/menu/menu-item/menu-item.component.ts ***!
  \************************************************************************/
/*! exports provided: MenuItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItemComponent", function() { return MenuItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuItemComponent = /** @class */ (function () {
    function MenuItemComponent() {
        this.path = '';
        this.label = '';
        this.icon = '';
    }
    MenuItemComponent_1 = MenuItemComponent;
    MenuItemComponent.prototype.ngOnInit = function () {
    };
    MenuItemComponent.prototype.ngAfterContentInit = function () {
        this.menuItems = this.menuItemsContent.filter(function (item, index) {
            return index > 0;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MenuItemComponent.prototype, "path", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MenuItemComponent.prototype, "label", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MenuItemComponent.prototype, "icon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('menuItemContent'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MenuItemComponent.prototype, "menuItemContent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('subMenuItemsContent'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MenuItemComponent.prototype, "subMenuItemsContent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"])(MenuItemComponent_1),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], MenuItemComponent.prototype, "menuItemsContent", void 0);
    MenuItemComponent = MenuItemComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu-item',
            template: __webpack_require__(/*! ./menu-item.component.html */ "./src/app/dashboard/layout/menu/menu-item/menu-item.component.html"),
            styles: [__webpack_require__(/*! ./menu-item.component.scss */ "./src/app/dashboard/layout/menu/menu-item/menu-item.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MenuItemComponent);
    return MenuItemComponent;
    var MenuItemComponent_1;
}());



/***/ }),

/***/ "./src/app/dashboard/layout/menu/menu.module.ts":
/*!******************************************************!*\
  !*** ./src/app/dashboard/layout/menu/menu.module.ts ***!
  \******************************************************/
/*! exports provided: MenuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuModule", function() { return MenuModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/dashboard/layout/menu/menu/menu.component.ts");
/* harmony import */ var _menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu-item/menu-item.component */ "./src/app/dashboard/layout/menu/menu-item/menu-item.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var COMPONENTS = [
    _menu_menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"],
    _menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_3__["MenuItemComponent"]
];
var MenuModule = /** @class */ (function () {
    function MenuModule() {
    }
    MenuModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
            ],
            declarations: COMPONENTS.slice(),
            exports: COMPONENTS.slice()
        })
    ], MenuModule);
    return MenuModule;
}());



/***/ }),

/***/ "./src/app/dashboard/layout/menu/menu/menu.component.html":
/*!****************************************************************!*\
  !*** ./src/app/dashboard/layout/menu/menu/menu.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"menu\" [class.closed]=\"menuService.menuOpen$ | async\">\n    <div class=\"logo\">\n        <span>DD</span>Managment\n    </div>\n    <nav>\n        <div class=\"marker\" [ngStyle]=\"{'transform': 'translate3d(0, ' + markerOffset + 'px, 0)'}\"\n             [class.markerActive]=\"markerActive\" #marker></div>\n        <ul>\n            <li *ngFor=\"let menuItem of menuItems\" routerLinkActive=\"active\" #link>\n                <a [routerLink]=\"parentPath + menuItem.path\"><i class=\"material-icons\">{{menuItem.icon}}</i>{{menuItem.label}}</a>\n\n                <ul *ngIf=\"menuItem.menuItems.length\">\n                    <li *ngFor=\"let subItem of menuItem.menuItems\">\n                        <a [routerLink]=\"parentPath + subItem.path\">{{subItem.label}}</a>\n\n                        <ul *ngIf=\"subItem.menuItems.length\">\n                            <li *ngFor=\"let subSubItem of subItem.menuItems\">\n                                <a [routerLink]=\"parentPath + subSubItem.path\">{{subSubItem.label}}</a>\n\n                                <ul *ngIf=\"subSubItem.menuItems.length\">\n                                    <li *ngFor=\"let subSubSubItem of subSubItem.menuItems\">\n                                        <a [routerLink]=\"parentPath + subSubSubItem.path\">{{subSubSubItem.label}}</a>\n                                    </li>\n                                </ul>\n                            </li>\n                        </ul>\n                    </li>\n                </ul>\n            </li>\n        </ul>\n    </nav>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/layout/menu/menu/menu.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/dashboard/layout/menu/menu/menu.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host #menu {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 250px;\n  padding-top: 100px;\n  background-color: #ffffff;\n  z-index: 99;\n  overflow: hidden;\n  transition: width 500ms ease;\n  border-right-style: solid;\n  border-right-width: 1px;\n  border-right-color: #e5e6eb; }\n  :host #menu.closed {\n    width: 75px; }\n  :host #menu .logo {\n    position: absolute;\n    top: 0;\n    right: -1px;\n    left: 0;\n    height: 100px;\n    background-color: #1874ef;\n    color: #ffffff;\n    font-weight: 500;\n    font-size: 1.5rem;\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n  :host #menu .logo span {\n      font-weight: 700; }\n  :host #menu nav {\n    display: block;\n    position: relative; }\n  :host #menu nav .marker {\n      position: absolute;\n      top: 0;\n      right: 0;\n      height: 2rem;\n      width: 4px;\n      background-color: #1874ef;\n      opacity: 0; }\n  :host #menu nav .marker.markerActive {\n        transition: all 250ms ease;\n        opacity: 1; }\n  :host #menu nav ul {\n      display: block;\n      list-style: none;\n      padding-top: 10px;\n      padding-left: 0; }\n  :host #menu nav ul li {\n        display: block;\n        padding: 0;\n        margin: 0;\n        line-height: 50px;\n        font-weight: 500; }\n  :host #menu nav ul li.active a {\n          color: #1874ef; }\n  :host #menu nav ul li a {\n          display: flex;\n          align-items: center;\n          padding-left: 30px;\n          transition: all 250ms ease;\n          color: #acacac; }\n  :host #menu nav ul li a .material-icons {\n            width: 25px;\n            margin-top: -5px;\n            margin-right: 15px; }\n  :host #menu nav ul li a:hover {\n            color: #1874ef; }\n"

/***/ }),

/***/ "./src/app/dashboard/layout/menu/menu/menu.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/dashboard/layout/menu/menu/menu.component.ts ***!
  \**************************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../menu-item/menu-item.component */ "./src/app/dashboard/layout/menu/menu-item/menu-item.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/index */ "../../node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _menu_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu.service */ "./src/app/dashboard/layout/menu/menu/menu.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MenuComponent = /** @class */ (function () {
    function MenuComponent(router, menuService) {
        this.router = router;
        this.menuService = menuService;
        this.parentPath = '';
        this.markerOffset = 0;
        this.markerActive = false;
        this.routerEventSubscription = new rxjs_index__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
    }
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routerEventSubscription = this.router.events
            .subscribe(function (routerEvent) {
            _this.onRouterEvent(routerEvent);
        });
    };
    MenuComponent.prototype.ngAfterViewInit = function () {
        this.handleActiveElement();
    };
    MenuComponent.prototype.onRouterEvent = function (routerEvent) {
        if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"] ||
            routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationCancel"] ||
            routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationError"]) {
            this.handleActiveElement();
        }
    };
    MenuComponent.prototype.handleActiveElement = function () {
        var _this = this;
        setTimeout(function () {
            var activeElement = _this.linkElements
                .find(function (element) {
                return element.nativeElement.classList.contains('active');
            });
            if (!activeElement) {
                activeElement = _this.linkElements.first;
                _this.markerActive = false;
                return;
            }
            _this.markerOffset = _this.getMarkerOffset(activeElement.nativeElement);
            setTimeout(function () {
                _this.markerActive = true;
            });
        });
    };
    MenuComponent.prototype.getMarkerOffset = function (target) {
        return target.offsetTop + (target.offsetHeight / 2) - this.marker.nativeElement.clientHeight / 2;
    };
    MenuComponent.prototype.ngOnDestroy = function () {
        if (this.routerEventSubscription) {
            this.routerEventSubscription.unsubscribe();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('parentPath'),
        __metadata("design:type", String)
    ], MenuComponent.prototype, "parentPath", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"])(_menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_1__["MenuItemComponent"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], MenuComponent.prototype, "menuItems", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('marker'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MenuComponent.prototype, "marker", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])('link'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], MenuComponent.prototype, "linkElements", void 0);
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/dashboard/layout/menu/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/dashboard/layout/menu/menu/menu.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _menu_service__WEBPACK_IMPORTED_MODULE_4__["MenuService"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/layout/menu/menu/menu.service.ts":
/*!************************************************************!*\
  !*** ./src/app/dashboard/layout/menu/menu/menu.service.ts ***!
  \************************************************************/
/*! exports provided: MenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuService", function() { return MenuService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/index */ "../../node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuService = /** @class */ (function () {
    function MenuService() {
        this.menuOpenSubject = new rxjs_index__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.menuOpen$ = this.menuOpenSubject.asObservable();
    }
    MenuService.prototype.toggleMenu = function () {
        this.menuOpenSubject.next(!this.menuOpenSubject.getValue());
    };
    MenuService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], MenuService);
    return MenuService;
}());



/***/ }),

/***/ "./src/app/dashboard/layout/top-bar/top-bar.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/dashboard/layout/top-bar/top-bar.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"top-bar\" [class.menu-closed]=\"menuService.menuOpen$ | async\">\n    <app-button-icon class=\"menu-toggle\" (click)=\"menuToggle()\" color=\"secondary\">arrow_back</app-button-icon>\n\n    <button class=\"user-profile-button\" (click)=\"userProfileDropdownToggle()\" #userProfileButton>\n        <span class=\"initials\">\n            {{initials}}\n        </span>\n        <i class=\"material-icons\">keyboard_arrow_down</i>\n    </button>\n\n    <div class=\"user-profile-dropdown animated fadeIn\" *ngIf=\"userProfileDropdownVisible\" #userProfileDropdown>\n        <app-button (click)=\"logout()\">\n            Logout\n        </app-button>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/dashboard/layout/top-bar/top-bar.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/dashboard/layout/top-bar/top-bar.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host #top-bar {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  height: 100px;\n  z-index: 98;\n  padding-left: 250px;\n  background-color: #ffffff;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  padding-right: 50px;\n  transition: padding 500ms ease;\n  border-bottom-style: solid;\n  border-bottom-width: 1px;\n  border-bottom-color: #e5e6eb; }\n  :host #top-bar.menu-closed {\n    padding-left: 75px; }\n  :host #top-bar.menu-closed .menu-toggle {\n      -webkit-transform: scale(-1, 1);\n              transform: scale(-1, 1); }\n  :host #top-bar .menu-toggle {\n    margin-right: auto;\n    margin-left: 10px;\n    transition: all 250ms ease; }\n  :host #top-bar .user-profile-button {\n    background: none;\n    display: flex;\n    align-items: center;\n    border-style: none;\n    cursor: pointer;\n    margin-right: -30px; }\n  :host #top-bar .user-profile-button .initials {\n      width: 40px;\n      height: 40px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      padding: 0;\n      position: relative;\n      background-color: #1874ef;\n      color: #ffffff;\n      border-style: solid;\n      border-radius: 50%;\n      border-width: 1px;\n      border-color: #1874ef;\n      outline: none;\n      box-shadow: none;\n      overflow: hidden;\n      font-weight: 500;\n      font-size: 1em;\n      -webkit-user-select: none;\n         -moz-user-select: none;\n          -ms-user-select: none;\n              user-select: none;\n      transition: border-color 0.2s cubic-bezier(0.77, 0, 0.175, 1), background-color 0.2s cubic-bezier(0.77, 0, 0.175, 1), color 0.2s cubic-bezier(0.77, 0, 0.175, 1); }\n  :host #top-bar .user-profile-button .material-icons {\n      color: #acacac;\n      font-size: 1.3em;\n      width: 30px;\n      display: flex;\n      justify-content: flex-end; }\n  :host #top-bar .user-profile-button:hover .initials {\n      background-color: #3082f1;\n      border-color: #3082f1; }\n  :host #top-bar .user-profile-dropdown {\n    position: absolute;\n    top: 90px;\n    box-shadow: 0 20px 80px -25px rgba(0, 0, 0, 0.75);\n    right: 30px;\n    width: 300px;\n    padding: 30px;\n    background-color: #ffffff;\n    display: flex;\n    justify-content: flex-end;\n    -webkit-animation-duration: 500ms;\n            animation-duration: 500ms;\n    border-color: #e5e6eb;\n    border-width: 1px;\n    border-style: solid;\n    border-radius: 3px; }\n  :host #top-bar .user-profile-dropdown:before, :host #top-bar .user-profile-dropdown:after {\n      position: absolute;\n      content: '';\n      width: 0;\n      height: 0;\n      border-style: solid;\n      border-color: transparent transparent #ffffff transparent; }\n  :host #top-bar .user-profile-dropdown:before {\n      border-color: transparent transparent #e5e6eb transparent;\n      border-width: 10px;\n      right: 37px;\n      top: -20px; }\n  :host #top-bar .user-profile-dropdown:after {\n      border-color: transparent transparent #ffffff transparent;\n      border-width: 11px;\n      right: 36px;\n      top: -20px; }\n"

/***/ }),

/***/ "./src/app/dashboard/layout/top-bar/top-bar.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/dashboard/layout/top-bar/top-bar.component.ts ***!
  \***************************************************************/
/*! exports provided: TopBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopBarComponent", function() { return TopBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _security_security_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../security/security.service */ "./src/app/security/security.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _security_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../security/user/user.service */ "./src/app/security/user/user.service.ts");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/index */ "../../node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _menu_menu_menu_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../menu/menu/menu.service */ "./src/app/dashboard/layout/menu/menu/menu.service.ts");
/* harmony import */ var _core_core_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/core.service */ "./src/app/core/core.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TopBarComponent = /** @class */ (function () {
    function TopBarComponent(securityService, userService, router, coreService, menuService) {
        this.securityService = securityService;
        this.userService = userService;
        this.router = router;
        this.coreService = coreService;
        this.menuService = menuService;
        this.initials = null;
        this.subscriptions = new rxjs_index__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
        this.userProfileDropdownVisible = false;
    }
    TopBarComponent.prototype.onDocumentClick = function (event) {
        if (!this.userProfileDropdownVisible || this.userProfileButton.nativeElement.contains(event.target)) {
            return;
        }
        if (!this.userProfileDropdown.nativeElement.contains(event.target)) {
            this.userProfileDropdownHide();
        }
    };
    TopBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        var currentUserSub = this.userService.currentUser
            .subscribe(function (user) {
            _this.setUserInitials(user);
        });
        this.subscriptions.add(currentUserSub);
    };
    TopBarComponent.prototype.logout = function () {
        var _this = this;
        this.userProfileDropdownHide();
        var logoutHandlerSub = this.securityService.logoutHandler()
            .subscribe(function () {
            _this.router.navigate([_this.coreService.loginPage]);
        });
        this.subscriptions.add(logoutHandlerSub);
    };
    TopBarComponent.prototype.setUserInitials = function (user) {
        if (user.firstname && user.surname) {
            this.initials = user.firstname.charAt(0) + user.surname.charAt(0);
        }
        else {
            this.initials = user.username.substring(0, 2);
        }
        this.initials.toUpperCase();
    };
    TopBarComponent.prototype.menuToggle = function () {
        this.menuService.toggleMenu();
    };
    TopBarComponent.prototype.userProfileDropdownToggle = function () {
        this.userProfileDropdownVisible = !this.userProfileDropdownVisible;
    };
    TopBarComponent.prototype.userProfileDropdownHide = function () {
        this.userProfileDropdownVisible = false;
    };
    TopBarComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('userProfileDropdown'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], TopBarComponent.prototype, "userProfileDropdown", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('userProfileButton'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], TopBarComponent.prototype, "userProfileButton", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TopBarComponent.prototype, "onDocumentClick", null);
    TopBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-top-bar',
            template: __webpack_require__(/*! ./top-bar.component.html */ "./src/app/dashboard/layout/top-bar/top-bar.component.html"),
            styles: [__webpack_require__(/*! ./top-bar.component.scss */ "./src/app/dashboard/layout/top-bar/top-bar.component.scss")]
        }),
        __metadata("design:paramtypes", [_security_security_service__WEBPACK_IMPORTED_MODULE_1__["SecurityService"],
            _security_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_core_service__WEBPACK_IMPORTED_MODULE_6__["CoreService"],
            _menu_menu_menu_service__WEBPACK_IMPORTED_MODULE_5__["MenuService"]])
    ], TopBarComponent);
    return TopBarComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/users/users-edit/users-edit.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/dashboard/users/users-edit/users-edit.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-card>\n  <app-card-header>\n    Edit user\n  </app-card-header>\n  <app-card-content>\n    <app-form [formGroup]=\"formGroup\">\n      <app-label label=\"Username\">\n        <app-input formControlName=\"username\"></app-input>\n      </app-label>\n      <app-label label=\"Password\">\n        <app-input formControlName=\"password\" type=\"password\"></app-input>\n      </app-label>\n      <app-label label=\"Firstname\">\n        <app-input formControlName=\"firstname\"></app-input>\n      </app-label>\n      <app-label label=\"Surname\">\n        <app-input formControlName=\"surname\"></app-input>\n      </app-label>\n    </app-form>\n  </app-card-content>\n  <app-card-footer>\n    <app-button (click)=\"saveUser()\">Save</app-button>\n  </app-card-footer>\n</app-card>"

/***/ }),

/***/ "./src/app/dashboard/users/users-edit/users-edit.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/dashboard/users/users-edit/users-edit.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/users/users-edit/users-edit.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/dashboard/users/users-edit/users-edit.component.ts ***!
  \********************************************************************/
/*! exports provided: UsersEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersEditComponent", function() { return UsersEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersEditComponent = /** @class */ (function () {
    function UsersEditComponent(formBuilder) {
        this.formBuilder = formBuilder;
    }
    UsersEditComponent.prototype.ngOnInit = function () {
        this.formGroup = this.formBuilder.group({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, { validators: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required }),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, { validators: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required }),
            firstname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {}),
            surname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {}),
        });
    };
    UsersEditComponent.prototype.saveUser = function () {
    };
    UsersEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users-edit',
            template: __webpack_require__(/*! ./users-edit.component.html */ "./src/app/dashboard/users/users-edit/users-edit.component.html"),
            styles: [__webpack_require__(/*! ./users-edit.component.scss */ "./src/app/dashboard/users/users-edit/users-edit.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], UsersEditComponent);
    return UsersEditComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/users/users-list/users-list.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/dashboard/users/users-list/users-list.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-card>\n    <app-card-header>\n        Users\n    </app-card-header>\n    <app-card-actions>\n        <app-button-icon routerLink=\"/users/new\">\n            add\n        </app-button-icon>\n    </app-card-actions>\n    <app-card-content>\n        <ul>\n            <li *ngFor=\"let user of usersList | async\">\n                <a routerLink=\"/users/{{user.id}}\">{{user.username}} | {{user.firstname}} | {{user.surname}}</a>\n            </li>\n        </ul>\n    </app-card-content>\n</app-card>\n"

/***/ }),

/***/ "./src/app/dashboard/users/users-list/users-list.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/dashboard/users/users-list/users-list.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/users/users-list/users-list.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/dashboard/users/users-list/users-list.component.ts ***!
  \********************************************************************/
/*! exports provided: UsersListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersListComponent", function() { return UsersListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _users_list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users-list.service */ "./src/app/dashboard/users/users-list/users-list.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersListComponent = /** @class */ (function () {
    function UsersListComponent(usersListService) {
        this.usersListService = usersListService;
    }
    UsersListComponent.prototype.ngOnInit = function () {
        this.usersList = this.usersListService.getUsersList();
    };
    UsersListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users-list',
            template: __webpack_require__(/*! ./users-list.component.html */ "./src/app/dashboard/users/users-list/users-list.component.html"),
            styles: [__webpack_require__(/*! ./users-list.component.scss */ "./src/app/dashboard/users/users-list/users-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_users_list_service__WEBPACK_IMPORTED_MODULE_1__["UsersListService"]])
    ], UsersListComponent);
    return UsersListComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/users/users-list/users-list.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/dashboard/users/users-list/users-list.service.ts ***!
  \******************************************************************/
/*! exports provided: UsersListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersListService", function() { return UsersListService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../api */ "../api/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersListService = /** @class */ (function () {
    function UsersListService(usersService) {
        this.usersService = usersService;
    }
    UsersListService.prototype.getUsersList = function (page, count, sortDirection, sortOrder) {
        return this.usersService.usersListQuery(page, count, sortDirection, sortOrder);
    };
    UsersListService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_api__WEBPACK_IMPORTED_MODULE_1__["UsersService"]])
    ], UsersListService);
    return UsersListService;
}());



/***/ }),

/***/ "./src/app/dashboard/users/users-new/users-new.component.html":
/*!********************************************************************!*\
  !*** ./src/app/dashboard/users/users-new/users-new.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-card>\n    <app-card-header>\n        Add new user\n    </app-card-header>\n    <app-card-content>\n        <app-form [formGroup]=\"formGroup\">\n            <app-label label=\"Username\">\n                <app-input formControlName=\"username\"></app-input>\n            </app-label>\n            <app-label label=\"Password\">\n                <app-input formControlName=\"password\" type=\"password\"></app-input>\n            </app-label>\n            <app-label label=\"Firstname\">\n                <app-input formControlName=\"firstname\"></app-input>\n            </app-label>\n            <app-label label=\"Surname\">\n                <app-input formControlName=\"surname\"></app-input>\n            </app-label>\n        </app-form>\n    </app-card-content>\n    <app-card-footer>\n        <app-button (click)=\"saveUser()\">Save</app-button>\n    </app-card-footer>\n</app-card>"

/***/ }),

/***/ "./src/app/dashboard/users/users-new/users-new.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/dashboard/users/users-new/users-new.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/users/users-new/users-new.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/dashboard/users/users-new/users-new.component.ts ***!
  \******************************************************************/
/*! exports provided: UsersNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersNewComponent", function() { return UsersNewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _users_new_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users-new.service */ "./src/app/dashboard/users/users-new/users-new.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_toast_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/toast/toast.service */ "./src/app/core/toast/toast.service.ts");
/* harmony import */ var _core_toast_toast_types_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/toast/toast-types.enum */ "./src/app/core/toast/toast-types.enum.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UsersNewComponent = /** @class */ (function () {
    function UsersNewComponent(formBuilder, usersNewService, router, toastService) {
        this.formBuilder = formBuilder;
        this.usersNewService = usersNewService;
        this.router = router;
        this.toastService = toastService;
    }
    UsersNewComponent.prototype.ngOnInit = function () {
        this.formGroup = this.formBuilder.group({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, { validators: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required }),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, { validators: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required }),
            firstname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {}),
            surname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {}),
        });
    };
    UsersNewComponent.prototype.saveUser = function () {
        var _this = this;
        this.usersNewService.saveUser(this.formGroup.getRawValue())
            .subscribe(function () {
            _this.router.navigate(['/users']);
            _this.toastService.showToast('User created', _core_toast_toast_types_enum__WEBPACK_IMPORTED_MODULE_5__["ToastTypes"].Success);
        });
    };
    UsersNewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users-new',
            template: __webpack_require__(/*! ./users-new.component.html */ "./src/app/dashboard/users/users-new/users-new.component.html"),
            styles: [__webpack_require__(/*! ./users-new.component.scss */ "./src/app/dashboard/users/users-new/users-new.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _users_new_service__WEBPACK_IMPORTED_MODULE_2__["UsersNewService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _core_toast_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"]])
    ], UsersNewComponent);
    return UsersNewComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/users/users-new/users-new.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/dashboard/users/users-new/users-new.service.ts ***!
  \****************************************************************/
/*! exports provided: UsersNewService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersNewService", function() { return UsersNewService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../api */ "../api/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersNewService = /** @class */ (function () {
    function UsersNewService(usersService) {
        this.usersService = usersService;
    }
    UsersNewService.prototype.saveUser = function (content) {
        return this.usersService.userNewHandler(content);
    };
    UsersNewService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_api__WEBPACK_IMPORTED_MODULE_1__["UsersService"]])
    ], UsersNewService);
    return UsersNewService;
}());



/***/ }),

/***/ "./src/app/dashboard/users/users-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/dashboard/users/users-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: UsersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersRoutingModule", function() { return UsersRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _users_list_users_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users-list/users-list.component */ "./src/app/dashboard/users/users-list/users-list.component.ts");
/* harmony import */ var _users_new_users_new_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users-new/users-new.component */ "./src/app/dashboard/users/users-new/users-new.component.ts");
/* harmony import */ var _users_edit_users_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users-edit/users-edit.component */ "./src/app/dashboard/users/users-edit/users-edit.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: _users_list_users_list_component__WEBPACK_IMPORTED_MODULE_2__["UsersListComponent"]
    },
    {
        path: 'new',
        component: _users_new_users_new_component__WEBPACK_IMPORTED_MODULE_3__["UsersNewComponent"]
    },
    {
        path: ':id',
        component: _users_edit_users_edit_component__WEBPACK_IMPORTED_MODULE_4__["UsersEditComponent"]
    }
];
var UsersRoutingModule = /** @class */ (function () {
    function UsersRoutingModule() {
    }
    UsersRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], UsersRoutingModule);
    return UsersRoutingModule;
}());



/***/ }),

/***/ "./src/app/dashboard/users/users.module.ts":
/*!*************************************************!*\
  !*** ./src/app/dashboard/users/users.module.ts ***!
  \*************************************************/
/*! exports provided: UsersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _users_list_users_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users-list/users-list.component */ "./src/app/dashboard/users/users-list/users-list.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _users_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users-routing.module */ "./src/app/dashboard/users/users-routing.module.ts");
/* harmony import */ var _users_new_users_new_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./users-new/users-new.component */ "./src/app/dashboard/users/users-new/users-new.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _users_edit_users_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./users-edit/users-edit.component */ "./src/app/dashboard/users/users-edit/users-edit.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var COMPONENTS = [
    _users_list_users_list_component__WEBPACK_IMPORTED_MODULE_2__["UsersListComponent"],
    _users_new_users_new_component__WEBPACK_IMPORTED_MODULE_5__["UsersNewComponent"],
    _users_edit_users_edit_component__WEBPACK_IMPORTED_MODULE_7__["UsersEditComponent"]
];
var UsersModule = /** @class */ (function () {
    function UsersModule() {
    }
    UsersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"],
                _users_routing_module__WEBPACK_IMPORTED_MODULE_4__["UsersRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
            ],
            declarations: COMPONENTS.slice()
        })
    ], UsersModule);
    return UsersModule;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-card>\n  <app-card-header>\n    Page not found\n  </app-card-header>\n  <app-card-content>\n    <p>The page you are looking for doesn't exist.</p>\n    <p>Back to <a [routerLink]=\"homePagePath\">home page</a></p>\n  </app-card-content>\n</app-card>\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  padding: 30px;\n  display: block;\n  height: 100%;\n  background-color: #f8f8f8; }\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_core_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/core.service */ "./src/app/core/core.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent(coreService) {
        this.coreService = coreService;
        this.homePagePath = '/';
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
        this.homePagePath = this.coreService.homePage;
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.scss */ "./src/app/page-not-found/page-not-found.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_core_service__WEBPACK_IMPORTED_MODULE_1__["CoreService"]])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/security/auth.guard.ts":
/*!****************************************!*\
  !*** ./src/app/security/auth.guard.ts ***!
  \****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user/user.service */ "./src/app/security/user/user.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_core_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/core.service */ "./src/app/core/core.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, coreService, userService) {
        this.router = router;
        this.coreService = coreService;
        this.userService = userService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        return this.userService.checkCurrentUser()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) {
            if (!value) {
                _this.router.navigate([_this.coreService.loginPage]);
            }
            return value;
        }));
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            provideIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _core_core_service__WEBPACK_IMPORTED_MODULE_4__["CoreService"],
            _user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/security/login.guard.ts":
/*!*****************************************!*\
  !*** ./src/app/security/login.guard.ts ***!
  \*****************************************/
/*! exports provided: LoginGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginGuard", function() { return LoginGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user/user.service */ "./src/app/security/user/user.service.ts");
/* harmony import */ var _core_core_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/core.service */ "./src/app/core/core.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginGuard = /** @class */ (function () {
    function LoginGuard(router, userService, coreService) {
        this.router = router;
        this.userService = userService;
        this.coreService = coreService;
    }
    LoginGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        return this.userService.checkCurrentUser()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (value) {
            if (value) {
                _this.router.navigate([_this.coreService.homePage]);
            }
            return !value;
        }));
    };
    LoginGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _core_core_service__WEBPACK_IMPORTED_MODULE_3__["CoreService"]])
    ], LoginGuard);
    return LoginGuard;
}());



/***/ }),

/***/ "./src/app/security/login/login.component.html":
/*!*****************************************************!*\
  !*** ./src/app/security/login/login.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"logo\">\n    <span>DD</span>Managment\n</div>\n\n<div class=\"login-container\">\n    <app-form [formGroup]=\"formGroup\" [ngClass]=\"{'animated shake': wrongCredentials}\">\n        <h2>Hello!</h2>\n        <app-label>\n            <app-input placeholder=\"username\" formControlName=\"username\"></app-input>\n        </app-label>\n        <app-label>\n            <app-input type=\"password\" placeholder=\"password\" formControlName=\"password\"></app-input>\n        </app-label>\n        <div>\n            <app-button type=\"submit\" (click)=\"onFormSubmit()\" [disabled]=\"!formGroup.valid\">Sign In</app-button>\n        </div>\n    </app-form>\n</div>\n\n<div class=\"copyright\">\n    Photo by Adam Chang on Unsplash\n</div>"

/***/ }),

/***/ "./src/app/security/login/login.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/security/login/login.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  background-image: url('adam-chang-231299-unsplash.jpg');\n  background-color: #f8f8f8;\n  background-size: cover;\n  background-position: center;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: flex-end;\n  align-content: center;\n  align-items: center; }\n  :host .logo {\n    position: absolute;\n    top: 25px;\n    left: 25px;\n    font-weight: 500;\n    font-size: 1.5rem;\n    color: #ffffff;\n    text-shadow: 0px 2px 10px rgba(0, 0, 0, 0.35); }\n  :host .logo span {\n      color: #1874ef;\n      font-weight: 700; }\n  :host .copyright {\n    position: absolute;\n    bottom: 15px;\n    left: 20px;\n    font-size: .75rem; }\n  :host .login-container {\n    order: 0;\n    flex: 0 1 50%;\n    align-self: auto;\n    display: flex;\n    align-content: center;\n    align-items: center;\n    justify-content: center; }\n  :host .login-container app-form {\n      -webkit-animation-duration: 750ms;\n              animation-duration: 750ms;\n      background-color: #ffffff;\n      padding: 10px 40px 30px;\n      box-shadow: 0 20px 80px -25px rgba(0, 0, 0, 0.75);\n      border-style: solid;\n      border-width: 1px;\n      border-color: #e5e6eb;\n      border-radius: 3px; }\n  :host .login-container app-form h2 {\n        padding: 0 10px; }\n  :host .login-container app-form /deep/ app-input input {\n        border-top: none;\n        border-right: none;\n        border-left: none;\n        border-radius: 3; }\n"

/***/ }),

/***/ "./src/app/security/login/login.component.ts":
/*!***************************************************!*\
  !*** ./src/app/security/login/login.component.ts ***!
  \***************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user/user.service */ "./src/app/security/user/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _security_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../security.service */ "./src/app/security/security.service.ts");
/* harmony import */ var _core_core_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/core.service */ "./src/app/core/core.service.ts");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/index */ "../../node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _core_toast_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/toast/toast.service */ "./src/app/core/toast/toast.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, securityService, userService, router, toastService, coreService) {
        this.formBuilder = formBuilder;
        this.securityService = securityService;
        this.userService = userService;
        this.router = router;
        this.toastService = toastService;
        this.coreService = coreService;
        this.wrongCredentials = false;
        this.loginHandlerSubsription = new rxjs_index__WEBPACK_IMPORTED_MODULE_6__["Subscription"]();
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.formGroup = this.formBuilder.group({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    };
    LoginComponent.prototype.onFormSubmit = function () {
        var _this = this;
        this.wrongCredentials = false;
        this.loginHandlerSubsription = this.securityService.loginHandler(this.formGroup.getRawValue())
            .subscribe(function () {
            _this.userService.checkCurrentUser()
                .subscribe(function (value) {
                if (value) {
                    _this.toastService.showToast('Welcome back! You have been logged in.');
                    _this.router.navigate([_this.coreService.homePage]);
                }
            });
        }, function (err) {
            if (err.status === 403) {
                _this.wrongCredentials = true;
            }
        });
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        if (this.loginHandlerSubsription) {
            this.loginHandlerSubsription.unsubscribe();
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/security/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/security/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _security_service__WEBPACK_IMPORTED_MODULE_4__["SecurityService"],
            _user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _core_toast_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"],
            _core_core_service__WEBPACK_IMPORTED_MODULE_5__["CoreService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/security/security-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/security/security-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: SecurityRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityRoutingModule", function() { return SecurityRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _security_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./security.component */ "./src/app/security/security.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/security/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: _security_component__WEBPACK_IMPORTED_MODULE_2__["SecurityComponent"],
        children: [
            {
                path: '',
                component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
            }
        ]
    }
];
var SecurityRoutingModule = /** @class */ (function () {
    function SecurityRoutingModule() {
    }
    SecurityRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], SecurityRoutingModule);
    return SecurityRoutingModule;
}());



/***/ }),

/***/ "./src/app/security/security.component.html":
/*!**************************************************!*\
  !*** ./src/app/security/security.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/security/security.component.scss":
/*!**************************************************!*\
  !*** ./src/app/security/security.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  width: 100%;\n  height: 100%; }\n"

/***/ }),

/***/ "./src/app/security/security.component.ts":
/*!************************************************!*\
  !*** ./src/app/security/security.component.ts ***!
  \************************************************/
/*! exports provided: SecurityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityComponent", function() { return SecurityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SecurityComponent = /** @class */ (function () {
    function SecurityComponent() {
    }
    SecurityComponent.prototype.ngOnInit = function () {
    };
    SecurityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-security',
            template: __webpack_require__(/*! ./security.component.html */ "./src/app/security/security.component.html"),
            styles: [__webpack_require__(/*! ./security.component.scss */ "./src/app/security/security.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SecurityComponent);
    return SecurityComponent;
}());



/***/ }),

/***/ "./src/app/security/security.module.ts":
/*!*********************************************!*\
  !*** ./src/app/security/security.module.ts ***!
  \*********************************************/
/*! exports provided: SecurityModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityModule", function() { return SecurityModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/security/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../api */ "../api/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _security_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./security.component */ "./src/app/security/security.component.ts");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user/user.service */ "./src/app/security/user/user.service.ts");
/* harmony import */ var _security_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./security.service */ "./src/app/security/security.service.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _security_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./security-routing.module */ "./src/app/security/security-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var COMPONENTS = [
    _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
    _security_component__WEBPACK_IMPORTED_MODULE_6__["SecurityComponent"]
];
var SecurityModule = /** @class */ (function () {
    function SecurityModule() {
    }
    SecurityModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _security_routing_module__WEBPACK_IMPORTED_MODULE_10__["SecurityRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_9__["CoreModule"]
            ],
            declarations: COMPONENTS.slice(),
            providers: [
                _api__WEBPACK_IMPORTED_MODULE_4__["SecurityService"],
                _user_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"],
                _security_service__WEBPACK_IMPORTED_MODULE_8__["SecurityService"]
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]
            ]
        })
    ], SecurityModule);
    return SecurityModule;
}());



/***/ }),

/***/ "./src/app/security/security.service.ts":
/*!**********************************************!*\
  !*** ./src/app/security/security.service.ts ***!
  \**********************************************/
/*! exports provided: SecurityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityService", function() { return SecurityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../api */ "../api/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user/user.service */ "./src/app/security/user/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SecurityService = /** @class */ (function () {
    function SecurityService(securityApiService, userService) {
        this.securityApiService = securityApiService;
        this.userService = userService;
    }
    SecurityService.prototype.loginHandler = function (content) {
        return this.securityApiService.loginHandler(content);
    };
    SecurityService.prototype.logoutHandler = function () {
        var subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
        this.userService.clearUser();
        this.securityApiService.logoutHandler()
            .subscribe(function () {
            subject.next(null);
        }, function () {
            subject.next(null);
        });
        return subject;
    };
    SecurityService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_api__WEBPACK_IMPORTED_MODULE_1__["SecurityService"],
            _user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], SecurityService);
    return SecurityService;
}());



/***/ }),

/***/ "./src/app/security/user/user.service.ts":
/*!***********************************************!*\
  !*** ./src/app/security/user/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../api */ "../api/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(securityApiService) {
        this.securityApiService = securityApiService;
        this.currentUserValue = null;
    }
    Object.defineProperty(UserService.prototype, "currentUser", {
        get: function () {
            if (this.currentUserValue) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.currentUserValue);
            }
            return this.getUserData();
        },
        enumerable: true,
        configurable: true
    });
    UserService.prototype.setUser = function (userData) {
        this.currentUserValue = userData;
    };
    UserService.prototype.getUserData = function () {
        var _this = this;
        var subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
        this.securityApiService.currentUserQuery()
            .subscribe(function (userData) {
            _this.setUser(userData);
            subject.next(_this.currentUserValue);
        }, function () {
            _this.clearUser();
            subject.next(null);
        });
        return subject;
    };
    UserService.prototype.clearUser = function () {
        this.setUser(null);
    };
    UserService.prototype.checkCurrentUser = function () {
        var subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
        this.currentUser
            .subscribe(function (user) {
            if (user) {
                return subject.next(true);
            }
            return subject.next(false);
        });
        return subject;
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_api__WEBPACK_IMPORTED_MODULE_1__["SecurityService"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jarek/Projects/means/frontend/dashboard/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map