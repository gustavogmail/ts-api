"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var data_source_1 = require("./data-source");
var routes_1 = require("./routes");
function handleError(err, req, res, next) {
    res.status(err.statusCode || 500).send(err.message);
}
data_source_1.AppDataSource.initialize().then(function () { return __awaiter(void 0, void 0, void 0, function () {
    var PORT, app, path, cors;
    return __generator(this, function (_a) {
        PORT = process.env.PORT || 3001;
        app = express();
        app.use(bodyParser.json());
        app.use(handleError);
        path = require('path');
        // Fazer com que o Node sirva os arquivos do app em React criado
        app.use(express.static(path.resolve(__dirname, '../client/build')));
        // register express routes from defined application routes
        routes_1.Routes.forEach(function (route) {
            app[route.method](route.route, function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
                var result, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, (new route.controller)[route.action](req, res, next)];
                        case 1:
                            result = _a.sent();
                            res.set('Access-Control-Allow-Origin', '*');
                            res.json(result);
                            return [3 /*break*/, 3];
                        case 2:
                            error_1 = _a.sent();
                            next(error_1);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
        });
        cors = require('cors');
        app.use(cors);
        // Todas as outras solicitações GET não tratadas retornarão nosso app em React
        //app.get('*', (req, res) => {
        //  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
        //});
        app.listen(PORT);
        // insert new users for test
        /*
        await AppDataSource.manager.save(
            AppDataSource.manager.create(User, {
                firstName: "Gustavo",
                lastName: "Developer",
                age: 27
            })
        )
    
        await AppDataSource.manager.save(
            AppDataSource.manager.create(User, {
                firstName: "Tony",
                lastName: "Fullstack",
                age: 24
            })
        )
        */
        console.log("Server listening on ".concat(PORT));
        return [2 /*return*/];
    });
}); }).catch(function (error) { return console.log(error); });
//# sourceMappingURL=index.js.map